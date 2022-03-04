import localStorageItem from '../classes/localStorageItem';
import treePage from '../parts/trees';
import {dragDrop, dragEnter, dragLeave,dragOver} from './dragFNs';
import renderLikedTreeItems from './renderTreeLikedItems';

interface ForMapObject{
  [id:string]:number[];
}

const mapObject: ForMapObject = {
// eslint-disable-next-line max-len
"1":[243,9,262,10,271,53,283,60,269,80,295,69,309,80,283,108,275,136,306,120,315,138,303,171,345,140,362,153,342,180,351,215,361,224,391,216,405,240,353,272,395,284,391,307,329,315,367,327,383,348,414,349,425,371,388,386,365,402,368,412,389,408,407,414,406,435,424,440,454,449,453,478,408,480,427,502,431,525,483,543,488,570,463,580,459,632,435,639,447,656,427,677,378,664,375,694,343,698,299,700,284,680,270,701,242,704,226,672,209,706,183,706,168,656,147,672,128,696,100,682,113,634,84,648,60,632,55,612,41,606,41,587,32,576,14,563,14,541,54,542,92,532,102,512,92,504,75,493,47,496,51,466,43,460,32,437,83,436,111,428,111,385,69,369,77,345,138,354,172,340,126,338,119,312,183,298,121,286,119,260,197,266,107,243,111,209,193,215,170,196,175,174,162,151,169,128,204,149,203,114,192,84,218,77,207,64,214,43,233,53]
}

export default function renderTreePage(): void{
  renderLikedTreeItems();
  const bgContainer = (treePage as HTMLTemplateElement).querySelector('.bigtree-container') as HTMLElement;
  bgContainer.querySelector('.bigtree-container>img[alt^="tree"]')?.remove();
  // bgContainer.querySelector('map')?.remove();

  const treeChoises = (treePage as HTMLElement).querySelectorAll(".trees-choises__item") as NodeListOf<HTMLDivElement>;
  const bgChoises= (treePage as HTMLElement).querySelectorAll(".background-imgs__item") as NodeListOf<HTMLDivElement>;
  const letMusicPlay = (treePage as HTMLElement).querySelector('.voluem') as HTMLButtonElement;


  const localSTItem = new localStorageItem();
  const bgTree:string = localSTItem.getSettingsTree().bg;
  const treeTree:string = localSTItem.getSettingsTree().tree;

  bgContainer.style.backgroundImage = `url('./assets/bg/${bgTree}.jpg')`;

  const img = document.createElement('img');
  img.src = `./assets/tree/${treeTree}.png`;
  img.alt = `tree-${treeTree}`;
  img.useMap = `#treemap`;
  bgContainer.append(img);

  if (!bgContainer.querySelector('map')){
    const appendedImg = (treePage as HTMLTemplateElement).querySelector('.bigtree-container>img[alt^="tree"]') as HTMLElement;
    const mapForImage = document.createElement('map');
    mapForImage.name = `treemap`;
    const areaforMap = document.createElement('area');
    areaforMap.shape = 'poly';
    areaforMap.coords = `${modifyMapObject(mapObject['1'],appendedImg.offsetWidth, appendedImg.offsetHeight)}`;

    areaforMap.addEventListener('dragenter', (e) => {
      dragEnter(e);
    });

    areaforMap.addEventListener('drop', (e) => {
      dragDrop(e);
    });

    areaforMap.addEventListener('dragover', (e) => {
      dragOver(e);
    });

    areaforMap.addEventListener('dragleave', (e) => {
      dragLeave(e);
    });

    mapForImage.append(areaforMap);
    bgContainer.append(mapForImage);
  }


  treeChoises.forEach((el:ChildNode):void =>{
    if ((el as HTMLDivElement).dataset?.number === `${treeTree}`){
      (el as HTMLDivElement).classList.add('set');
    } else  {
      (el as HTMLDivElement).classList.remove('set');
    }
  })

  bgChoises.forEach((el:ChildNode):void => {
    if ((el as HTMLDivElement).dataset?.number === `${bgTree}`){
      (el as HTMLDivElement).classList.add('set');
    } else  {
      (el as HTMLDivElement).classList.remove('set');
    }
  })

  if (localSTItem.getSettings().music === 'on'){
    letMusicPlay.classList.add('checked');
  }
}


function modifyMapObject (arr: number[], width:number, height:number) : number[]{
  const percentForX = width/500;
  const percentForY = height/714;
  const arr2 = arr.map((el:number, index:number, array:number[] ) => {
    if (array[index]%2){
      return el*percentForX;
    } else {
      return el*percentForY;
    }
  })
  return arr2;
}
