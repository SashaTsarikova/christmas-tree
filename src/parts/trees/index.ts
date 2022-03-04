import localStorageItem from '../../classes/localStorageItem';
import singletonSong from '../../classes/singletoneSong';
import {generalSettings,treeSettings} from '../../data/settings';
import appendAny from '../../units/appendAny';
import changeSmth from '../../units/changeTree';
import createLights from '../../units/createLights';
import htmlToElement from '../../units/HTMLtoElement';
import {makeSnow} from '../../units/letItSnowFN';
import renderSortedItems from '../../units/renderFilteredItems';
import renderTreePage from '../../units/renderTree';
import styleLikedOnes from '../../units/styleLikedOnes';
import homePage from '../home';
import toysPage from '../toys/general';
import TreePage from './templateTree';

const treePage =  <HTMLElement>htmlToElement(TreePage);

const LSITEM = new localStorageItem();

const treeChoisesContainer = treePage.querySelector(".trees-choises") as HTMLDivElement;
const bgChoisesContainer = treePage.querySelector(".background-imgs") as HTMLDivElement;
const garlandContainer = treePage.querySelector(".garland-colors") as HTMLDivElement;

const letMusicPlay = treePage.querySelector('.voluem') as HTMLButtonElement;
const letItSnowButton = treePage.querySelector('.snow') as HTMLButtonElement;

const resetButton = treePage.querySelector('#reset-settings') as HTMLButtonElement;
const buttonTreeHome = treePage.querySelector('#go-home') as HTMLButtonElement;
const buttonTreeToys = treePage.querySelector('#go-toys') as HTMLButtonElement;

letMusicPlay.addEventListener('click', (e: Event): void => {
  const song = singletonSong.getInstance();
  if (song.playID === 1){
    LSITEM.setSettings(generalSettings.music);
    song.pauseSong();
    (e.target as HTMLButtonElement).classList.remove('checked')
  } else {
    LSITEM.setSettings(generalSettings.music);
    song.playSong();
    (e.target as HTMLButtonElement).classList.add('checked')
  }
})

let snowTime = setInterval(makeSnow, 100);
clearInterval(snowTime);

letItSnowButton.addEventListener('click', (e: Event): void => {
  const snowflakes = treePage.querySelectorAll(".snowflake") as NodeListOf<HTMLDivElement>;
  snowflakes.forEach((el:ChildNode) =>{
    el.remove()
  })
    if ((e.target as HTMLElement).classList.contains('go')){
    (e.target as HTMLElement).classList.remove('go');
    clearInterval(snowTime);
  } else {
    clearInterval(snowTime);
    snowTime = setInterval(makeSnow, 100);
    (e.target as HTMLElement).classList.add('go');
  }
  letSongPlay();
})

treeChoisesContainer.addEventListener('click', (e:Event): void => {
  const newIndex:string = ((e.target as HTMLElement).closest('.trees-choises__item')as HTMLElement).dataset.number as string;
  changeSmth(treeSettings.tree, newIndex);
  letSongPlay();
})

bgChoisesContainer.addEventListener('click', (e:Event): void => {
  const song = singletonSong.getInstance();
  const newIndex:string = ((e.target as HTMLElement).closest('.background-imgs__item')as HTMLElement).dataset.number as string;
  changeSmth(treeSettings.bg, newIndex);

  if (LSITEM.getSettings()[generalSettings.music] === 'on'){
    song.changeSong();
  } else {
    song.changeMethod()
  }
})

garlandContainer.addEventListener('click',(e:Event): void =>{
  if ((e.target as HTMLElement).classList.contains('set')){
    LSITEM.setSettings(generalSettings.garland);
    freshLights();
    (e.target as HTMLElement).classList.remove('set');
  } else {
    const garlandButtons = treePage.querySelectorAll(".garland-colors__item") as NodeListOf<HTMLDivElement>;
    garlandButtons.forEach((el:ChildNode): void =>{
      if ((el as HTMLDivElement).classList.contains('set')){
        (el as HTMLDivElement).classList.remove('set');
        freshLights();
        LSITEM.setSettings(generalSettings.garland);
      }
    });
    LSITEM.setSettings(generalSettings.garland);
    createLights((e.target as HTMLElement).dataset.color as string);
    (e.target as HTMLElement).classList.add('set');
  }
  letSongPlay();
})

resetButton.addEventListener('click', (): void => {
  LSITEM.startStorage();
  const bgContainer = treePage.querySelector('.bigtree-container') as HTMLElement;
  bgContainer.querySelector('map')?.remove();
  renderTreePage();
})

buttonTreeHome.addEventListener('click', (): void => {
  appendAny(treePage, (homePage as HTMLTemplateElement));
})

buttonTreeToys.addEventListener('click', (): void => {
  appendAny(treePage, (toysPage as HTMLTemplateElement));

  renderSortedItems();
  const searchField = (toysPage as HTMLElement).querySelector('#search-input') as HTMLInputElement;
  searchField.focus();

  styleLikedOnes(toysPage as HTMLElement);
})

function freshLights():void {
  const garlandLights = (treePage as HTMLElement).querySelectorAll(".lightrope") as NodeListOf<HTMLDivElement>;
  garlandLights.forEach((el:ChildNode): void =>{
  el.remove()
  });
}

function letSongPlay(): void {
  const song = singletonSong.getInstance();
  if (LSITEM.getSettings()[generalSettings.music] === 'on' && song.playID===0){
    song.playSong();
  }
}

export default treePage;

