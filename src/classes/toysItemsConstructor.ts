import data from "../data/data";
import templateToy from "../parts/toys/toy-item/templateToy";
import templateToyTree from "../parts/trees/toyTreeTemplate";
import {dragEnd,dragStart} from '../units/dragFNs';
import htmlToElement from '../units/HTMLtoElement';

type StringGetFN = (a:string) => boolean;
type HtmlReturnFunction = (a:string) => ChildNode | null;
type HtmlGetFN = (a: HTMLElement) => void;

interface ForToysItemConstructor {
  arrayToys: string[];
  arrayLiked: string[];
  makeOne: HtmlReturnFunction;
  makeOneTree: HtmlReturnFunction;
  isLiked: StringGetFN;
  renderAll: HtmlGetFN;
  renderAllTree: HtmlGetFN;
}

export default class ToysItemConstructor implements ForToysItemConstructor{
  arrayToys;
  arrayLiked;

  constructor(arrayToys: string[], arrayLiked: string[]){
    this.arrayLiked = arrayLiked;
    this.arrayToys = arrayToys
  }

  makeOne(index:string): ChildNode | null{
    const newToyItem = htmlToElement(templateToy);

    const itemContainer = (newToyItem as HTMLDivElement).querySelector('.toys-container__item');

    const nameTitle = (newToyItem as HTMLElement).querySelector('.name') as HTMLTitleElement;
    const shapeTitle = (newToyItem as HTMLElement).querySelector('.shape');
    const colorTitle = (newToyItem as HTMLElement).querySelector('.color');
    const likedTitle = (newToyItem as HTMLElement).querySelector('.liked');
    const yearTitle = (newToyItem as HTMLElement).querySelector('.year');
    const countTitle = (newToyItem as HTMLElement).querySelector('.count');
    const sizeTitle = (newToyItem as HTMLElement).querySelector('.size');

    const imgContainer = (newToyItem as HTMLElement).querySelector('.img-container');

    (nameTitle as HTMLTitleElement).innerHTML = `${data[+index - 1].name}`;
    (shapeTitle as HTMLTitleElement).innerHTML = `Форма: ${data[+index - 1].shape}`;
    (colorTitle as HTMLTitleElement).innerHTML = `Цвет: ${data[+index - 1].color}`;
    (likedTitle as HTMLTitleElement).innerHTML = `Любимая: ${data[+index - 1].favorite}`;
    (yearTitle as HTMLTitleElement).innerHTML = `Год приобретения: ${data[+index - 1].year}`;
    (countTitle as HTMLTitleElement).innerHTML = `Количество: ${data[+index - 1].count}`;
    (sizeTitle as HTMLTitleElement).innerHTML = `Размер: ${data[+index - 1].size}`;

    const img = document.createElement('img');
    img.src = `./assets/toys/${index}.png`;
    img.alt =  `toy ${index}`;
    imgContainer?.appendChild(img);

    if (this.isLiked(index)){
      itemContainer?.classList.add('checked')
    } else {
      itemContainer?.classList.remove('checked')
    }

    const newItemContainer = nameTitle.closest('.toys-container__item');
    newItemContainer?.setAttribute('data-num', index);
    return newToyItem;
  }

  makeOneTree(index:string): ChildNode | null{
    const newToyItem = htmlToElement(templateToyTree);
    // eslint-disable-next-line max-len
    const itemContainer = ((newToyItem as HTMLDivElement).querySelector('.count-checker') as HTMLTitleElement).closest('.tree__toys-conteiner__item');
    const countTitle = (newToyItem as HTMLElement).querySelector('.count-checker') as HTMLTitleElement;

    const img = document.createElement('img');
    img.src = `./assets/toys/${index}.png`;
    img.alt =  `toy ${index}`;
    img.draggable = true;

    img.addEventListener('dragstart', (e:DragEvent):void=> {
      dragStart(e);
    });
    img.addEventListener('dragend', (e:DragEvent):void => {
      dragEnd(e);
    });

    itemContainer?.appendChild(img);

    countTitle.innerHTML = `${data[+index - 1].count}`;

    itemContainer?.setAttribute('data-numberToy', index);

    return newToyItem;
  }

  isLiked(index:string): boolean{
    return this.arrayLiked.includes(index)
  }

  renderAll(root: HTMLElement): void{
    const mainContainer = root.closest('.toys-container__items');
    (mainContainer as HTMLElement).innerHTML = '';
    this.arrayToys.forEach((elem) => {
      const temporary = this.makeOne(elem);
      (mainContainer as HTMLElement).append(temporary as HTMLElement);
    })
    if (!(mainContainer as HTMLElement).firstChild){
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('toys-absent-div');
      errorDiv.innerHTML = "К сожалению, ничего не подошло по параметрам поиска";
      mainContainer?.append(errorDiv);
    }
 }

  renderAllTree(root: HTMLElement): void {
  let counter = 0;
  const mainContainer = root.closest('.tree__toys-conteiner');
    (mainContainer as HTMLElement).innerHTML = '';
    this.arrayLiked.forEach((elem) => {
      const temporary = this.makeOneTree(elem);
      (mainContainer as HTMLElement).append(temporary as HTMLElement);
      counter++
    })
    if (counter === 0){
      this.arrayToys.slice(0,20).forEach((elem) => {
        const temporary = this.makeOneTree(elem);
        (mainContainer as HTMLElement).append(temporary as HTMLElement);
        counter++
      })
    }
    while (counter !==20){
      const newToyItem = htmlToElement(templateToyTree);
      const countTitle = (newToyItem as HTMLElement).querySelector('.count-checker') as HTMLTitleElement;

      countTitle.innerHTML = `-`;

      (mainContainer as HTMLElement).append(newToyItem as HTMLElement);
      counter++
    }
  }

}
