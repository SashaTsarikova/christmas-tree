import { garlandColors } from "../data/settings";
import treePage from "../parts/trees";
import randomInt from "./rendomInt";

const colorsForChoise = ['red', 'green', 'blue' , 'yellow']

export default function createLights(color:string): void {

  const bgContainer = (treePage as HTMLTemplateElement).querySelector('.bigtree-container') as HTMLElement;
  const tree = bgContainer.querySelector('img[alt^="tree"]') as HTMLImageElement;

  const heightTree = tree?.height as number;
  const ofsetHeightTree = bgContainer.offsetHeight - <number>tree?.height;

  for (let j=1; j<7; j++){
    const ul = document.createElement('ul');
    ul.classList.add('lightrope');
    ul.style.left = `0px`;
    ul.style.top = `${ofsetHeightTree + (heightTree/8*j)}px`;

    const elementsCount = Math.round(j * 1.6);
    const arr = returnArray(elementsCount, 9);

    for (let i=0; i<elementsCount; i++){
      const li = document.createElement('li');
      li.style.top+=`${arr[i]}px`;
      li.style.transform = `rotate(${randomInt(-80,80)}deg)`;
        if (color === garlandColors.rgb){
          li.classList.add(`${colorsForChoise[randomInt(0,4)]}`);
        } else {
          li.classList.add(color);
        }
      ul.append(li);
    }
  bgContainer.append(ul)
  }
}


function returnArray(num:number, numberToIncrease: number):number[]{
  let arr:number[] = [];
  if(num%2){
    for (let i=0; i<Math.floor(num/2); i++){
      arr.push(i*numberToIncrease)
    }
    const arr2 :number[] = [];
    arr.map((el:number):void => {
      arr2.unshift(el);
    });
    arr = arr.concat(arr2);
    arr.splice(Math.floor(num/2),0,arr[Math.floor(num/2)]+numberToIncrease)
  } else {
    for (let i=0; i<num/2; i++){
      arr.push(i*numberToIncrease);
    }
    const arr2 :number[] = [];
    arr.map((el:number):void => {
      arr2.unshift(el);
    });
    arr = arr.concat(arr2);
  }
  return arr;
}
