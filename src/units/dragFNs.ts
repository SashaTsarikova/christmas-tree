import treePage from '../parts/trees';
// import ToysItemConstructor from '../classes/toysItemsConstructor';

interface Ev {
  dataTransfer: DataTransfer;
  target: EventTarget;
  clientX: number;
  clientY: number;
}

const bgContainer = treePage.querySelector('.bigtree-container') as HTMLElement;

let containerOffsetTop: number;
let containerOffsetLeft: number;


let shiftX: number;
let shiftY: number;

function dragStart(ev: DragEvent): boolean {
  const { dataTransfer, target, clientX, clientY } = <Ev>ev;
  containerOffsetTop = bgContainer.offsetTop;
  containerOffsetLeft = bgContainer.offsetLeft;
  dataTransfer.effectAllowed='copy';
  const constainerTree = ((target as HTMLImageElement).closest('.tree__toys-conteiner__item') as HTMLDivElement)
  const dataToRemind = constainerTree.getAttribute('data-numberToy') as string;
  dataTransfer.setData("Text", dataToRemind);
  (target as HTMLImageElement).setAttribute('data-numberToy', dataToRemind)
  shiftX  = clientX -  (target as HTMLImageElement).getBoundingClientRect().left;
  shiftY = clientY - (target as HTMLImageElement).getBoundingClientRect().top;
  return true;
}

function dragEnd(ev: DragEvent):void {
  ev.preventDefault();
}

function dragEnter(ev: MouseEvent): boolean {
  ev.preventDefault();
  return true;
}

function dragOver(ev: MouseEvent):void {
  ev.preventDefault();
}

interface Ev2 {
  dataTransfer: DataTransfer;
  target: EventTarget;
  pageX: number;
  pageY: number;
}

function dragDrop(ev: DragEvent): boolean {
  const { dataTransfer, target, pageX, pageY } = <Ev2>ev;

  const dataTr = dataTransfer.getData("Text");
  decreaseNumber(dataTr);
  const dragItem = document.querySelector(`[data-numberToy ='${dataTr}']>img`) as HTMLImageElement;
  if (dragItem?.cloneNode(true)){
  const clone = dragItem.cloneNode(true);
  (target as HTMLImageElement).append(clone);
  (clone as HTMLImageElement).classList.add('on-tree');
  (clone as HTMLImageElement).style.left = `${pageX - containerOffsetLeft - shiftX}px`;
  (clone as HTMLImageElement).style.top = `${pageY - containerOffsetTop - shiftY}px`;

  (clone as HTMLImageElement).addEventListener('dragstart', (e)=> {
    dragStartInner(e);
  });
  (clone as HTMLImageElement).addEventListener('dragend', (e)=> {
    dragEndInner(e);
  });

  deliteZeroImg(dataTr);
  }
  ev.stopPropagation();
  return false;
}

function dragLeave(ev: DragEvent): boolean {
  bgContainer.classList.add('to-delite');
  // (bgContainer as HTMLDivElement).children.getElementsByTagName('img[alt^="tree"]')?.classList.add('to-delite');
  ev.stopPropagation();
  return false;
}

function dragDropBg(ev: MouseEvent): boolean {
  console.log(((ev.target as HTMLDivElement).closest('.bigtree-container') as HTMLDivElement).classList)
  if (((ev.target as HTMLDivElement).closest('.bigtree-container') as HTMLDivElement).classList.contains('to-delite')){
    const toy = bgContainer.querySelector('img[alt^="toy"]');
    const data = toy?.getAttribute('data-numberToy');
    if (data) increaseNumber(data);
    toy?.remove();
    ((ev.target as HTMLDivElement).closest('.bigtree-container') as HTMLDivElement).classList.remove('to-delite');
    ev.stopPropagation();
    ev.preventDefault();
    return true;
  } else {
    return false
  }
}

function decreaseNumber(dataTr:string): void{
  const containersNode = document.querySelectorAll('.tree__toys-conteiner__item') as NodeListOf<HTMLDivElement>
  containersNode.forEach((el: HTMLDivElement) => {
   const text =  el.querySelector('p');
   if (el.closest('.tree__toys-conteiner__item')?.getAttribute('data-numberToy') === dataTr){
    (text as HTMLParagraphElement).innerText = String(Number((text as HTMLParagraphElement).innerText) - 1)
   }
  })
}

function increaseNumber(dataTr:string) : void{
  const containersNode = document.querySelectorAll('.tree__toys-conteiner__item') as NodeListOf<HTMLDivElement>
  containersNode.forEach((el: HTMLDivElement) => {
   const text =  el.querySelector('p');
   if (el.closest('.tree__toys-conteiner__item')?.getAttribute('data-numberToy') === dataTr){
    (text as HTMLParagraphElement).innerText = String(Number((text as HTMLParagraphElement).innerText) + 1)
   }
  })
}

function deliteZeroImg(dataTr:string): void{
  const containersNode = document.querySelectorAll('.tree__toys-conteiner__item') as NodeListOf<HTMLDivElement>
  containersNode.forEach((el: HTMLDivElement) => {
   const text =  el.querySelector('p');
   if (text?.innerText === '0' && (el.closest('.tree__toys-conteiner__item')?.getAttribute('data-numberToy') === dataTr)){
    el.closest('.tree__toys-conteiner__item')?.querySelector('img')?.remove();
   }
  })
}

function dragStartInner(ev: DragEvent): boolean {
  containerOffsetTop = bgContainer.offsetTop;
  containerOffsetLeft = bgContainer.offsetLeft;
  (ev.dataTransfer as DataTransfer).effectAllowed='move';
  // const dataToRemind = (ev.target as HTMLImageElement).getAttribute('data-numberToy') as string;
  // (ev.dataTransfer as DataTransfer).setData("Text", dataToRemind);
  shiftX  = ev.clientX - (ev.target as HTMLImageElement).getBoundingClientRect().left;
  shiftY = ev.clientY - (ev.target as HTMLImageElement).getBoundingClientRect().top;
  return true;
}

function dragEndInner(ev: DragEvent): void {
  ev.preventDefault();
  (ev.target as HTMLImageElement).style.left = `${ev.pageX - containerOffsetLeft - shiftX}px`;
  (ev.target as HTMLImageElement).style.top = `${ev.pageY - containerOffsetTop - shiftY}px`;
  ev.stopImmediatePropagation()
}


export {dragDrop,  dragDropBg, dragEnd, dragEnter , dragLeave,dragOver, dragStart, dragStartInner}
