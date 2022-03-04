import 'nouislider/dist/nouislider.css';

import * as noUiSlider from 'nouislider';

import ArrayConstructor from '../../../classes/arrayConstructor';
import localStorageItem from '../../../classes/localStorageItem';
import singletonSong from '../../../classes/singletoneSong';
import ToysItemConstructor from '../../../classes/toysItemsConstructor';
import {colors, DataKeys, shape, size} from '../../../data/localStItems';
import { generalSettings } from '../../../data/settings';
import appendAny from '../../../units/appendAny';
import htmlToElement from '../../../units/HTMLtoElement';
import renderSortedItems from '../../../units/renderFilteredItems';
import renderTreePage from '../../../units/renderTree';
import styleLikedOnes from '../../../units/styleLikedOnes';
import treePage from '../../trees';
import ToysPage from './templateToys';

// decloration part

const toysPage =  <HTMLElement>htmlToElement(ToysPage);
const LSITEM = new localStorageItem();

const searchField = toysPage.querySelector('#search-input') as HTMLInputElement;

const letMusicPlay = toysPage.querySelector('.voluem') as HTMLButtonElement;

const sortContainer = toysPage.querySelector('#sort-select') as HTMLElement;

const shapeContainer = toysPage.querySelector('.settings-shape-container') as HTMLDivElement;
const colorContainer = toysPage.querySelector('.settings-Chb-container') as HTMLDivElement;
const sizeContainer = toysPage.querySelector('.checkbox-container') as HTMLDivElement;
const favoriteChB = toysPage.querySelector('#liked-chb') as HTMLInputElement;

const buttonResetFilters = toysPage.querySelector('#reset-filters') as HTMLButtonElement;
const buttonResetAll = toysPage.querySelector('#reset-settings') as HTMLButtonElement;

const itemToysContainer = toysPage.querySelector('.toys-container__items') as HTMLDivElement;
const countLikedToys = toysPage.querySelector('#liked-count') as HTMLTitleElement;

const buttonToysTree = toysPage.querySelector('#go-decorate') as HTMLButtonElement;

const sliderYear = toysPage.querySelector('#slider-year') as noUiSlider.target;
const sliderYearMin = toysPage.querySelector('#minYear') as HTMLTitleElement;
const sliderYearMax = toysPage.querySelector('#maxYear') as HTMLTitleElement;
const sliderCountMin = toysPage.querySelector('#minCount') as HTMLTitleElement;
const sliderCountMax = toysPage.querySelector('#minCount') as HTMLTitleElement;

noUiSlider.create(sliderYear as HTMLElement, {
    start: [1940, 2020],
    connect: true,
    range: {
        'min': 1940,
        'max': 2020
    },
    step: 10
});

const sliderCount = toysPage.querySelector('#slider-count') as noUiSlider.target;

noUiSlider.create(sliderCount  as HTMLElement, {
    start: [1, 12],
    connect: true,
    range: {
        'min': 1,
        'max': 12
    },
    step: 1
});

// events part

letMusicPlay.addEventListener('click', (e: Event) => {
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

searchField.addEventListener('input', (e: Event): void  => {
  const toysContainer = toysPage.querySelector('.toys-container__items') as HTMLElement;
  const localSTItem = new localStorageItem();
  const arrayForRender = new ArrayConstructor( localSTItem.getSortType(), localSTItem.getFilters());
  // eslint-disable-next-line max-len
  const toysConstructor = new ToysItemConstructor(arrayForRender.searchArray(`${(e.target as HTMLInputElement).value}`) as string[], localSTItem.getLikedOnes());
  toysConstructor.renderAll(toysContainer);
  styleLikedOnes(toysPage);
});

sortContainer.addEventListener('change', (e: Event): void => {
  const LSTITEM = new localStorageItem();
  LSTITEM.setSortType((e.target as HTMLInputElement).value);
  renderSortedItems();
  styleLikedOnes(toysPage);
});

shapeContainer.addEventListener('click', (e: Event): void => {
  const currentChecked = (e.target as HTMLDivElement).closest('.settings-shape-item');
  const id = (currentChecked?.querySelector('.settings-shape-icon') as HTMLDivElement).id;
  const LSTITEM = new localStorageItem();

  LSTITEM.setFilters(DataKeys.shape, shape[id]);
  currentChecked?.classList.toggle('checked');
  renderSortedItems();
  styleLikedOnes(toysPage);
});

colorContainer.addEventListener('click', (e: Event): void => {
  const currentChecked = (e.target as HTMLInputElement).closest('.color-chb');
  const id = (currentChecked as HTMLInputElement).value;
  const LSTITEM = new localStorageItem();

  LSTITEM.setFilters(DataKeys.color, colors[id]);
  renderSortedItems();
  styleLikedOnes(toysPage);
});

sizeContainer.addEventListener('click', (e: Event): void => {
  const currentChecked = (e.target as HTMLInputElement).closest("input[type='checkbox']");
  const id = (currentChecked as HTMLInputElement).value;

  LSITEM.setFilters(DataKeys.size, size[id]);
  renderSortedItems();
  styleLikedOnes(toysPage);
});

sliderYear.noUiSlider?.on('change',(): void => {
  const arrValues: string[] = sliderYear.noUiSlider?.get() as string[]; //получение массива значений при изменении

  LSITEM.setFilters(DataKeys.year, [`${+arrValues[0]}`, `${+arrValues[1]}`]);
  renderSortedItems();
  styleLikedOnes(toysPage);

  sliderYearMax.innerText = `${+arrValues[1]}`;
  sliderYearMin.innerText = `${+arrValues[0]}`;
});

sliderCount.noUiSlider?.on('change',(): void => {
  const arrValues: string[] = sliderCount.noUiSlider?.get() as string[]; //получение массива значений при изменении

  LSITEM.setFilters(DataKeys.count, [`${+arrValues[0]}`, `${+arrValues[1]}`]);
  renderSortedItems();
  styleLikedOnes(toysPage);

  sliderCountMax.innerText = `${+arrValues[1]}`;
  sliderCountMin.innerText = `${+arrValues[0]}`;
});

favoriteChB.addEventListener('change',(e: Event): void => {
  if ((e.target as HTMLInputElement).checked  === true){
    LSITEM.setFilters(DataKeys.favorite, 'true')
  } else {
    LSITEM.setFilters(DataKeys.favorite, 'all')
  }
  renderSortedItems();
  styleLikedOnes(toysPage);
});


buttonResetFilters.addEventListener('click', (): void => {
  LSITEM.resetFilters();

  const allChB = (toysPage).querySelectorAll("input[type='checkbox']") as NodeListOf<HTMLInputElement>;

  allChB.forEach((item: HTMLInputElement): void => {
    item.checked = false;
  });

  for (let i=0; i<shapeContainer.children.length; i++){
    shapeContainer.children[i].classList.remove('checked');
  }

  sliderYear.noUiSlider?.set([1940, 2020]);
  sliderCount.noUiSlider?.set([1, 12]);
  sliderCountMax.innerText = '12';
  sliderCountMin.innerText = '1';
  sliderYearMin.innerText = '1940';
  sliderYearMax.innerText = '2020';
  searchField.value = '';

  renderSortedItems();

  styleLikedOnes(toysPage);
})

buttonResetAll.addEventListener('click', (): void => {
  LSITEM.startStorage();

  const allChB = (toysPage).querySelectorAll("input[type='checkbox']") as NodeListOf<HTMLInputElement>;

  allChB.forEach((item: HTMLInputElement):void => {
    item.checked = false;
  });

  for (let i=0; i<shapeContainer.children.length; i++){
    shapeContainer.children[i].classList.remove('checked');
  }

  sliderYear.noUiSlider?.set([1940, 2020]);
  sliderCount.noUiSlider?.set([1, 12]);
  sliderCountMax.innerText = '12';
  sliderCountMin.innerText = '1';
  sliderYearMax.innerText = '2020';
  sliderYearMin.innerText = '1940';
  searchField.value = '';

  countLikedToys.innerHTML= '0';

  renderSortedItems();
});

itemToysContainer.addEventListener('click', (e: MouseEvent):void => {
  const mainContainer = (e.target as HTMLDivElement).closest('.toys-container__items') as HTMLDivElement;

  const container = (e.target as HTMLDivElement).closest('.toys-container__item') as HTMLDivElement;
  const id = container.dataset.num;

  LSITEM.setLikedOnes(id as string);

  countLikedToys.innerHTML = `${LSITEM.getLikedOnes().length || 0}`;
  if (container.classList.contains('checked')){
    container.classList.remove('checked')
  } else {
    container.classList.add('checked')
  }

  if (LSITEM.getLikedOnes().length >= 20){
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('toys-absent-div');
    errorDiv.innerHTML = "Все слоты (20 шт.) заполнены";
    mainContainer.innerHTML = '';
    mainContainer?.prepend(errorDiv);
    setTimeout((): void => {
      errorDiv.remove();
      renderSortedItems();
      styleLikedOnes(toysPage);
    }, 3000);
    return;
  }
})

buttonToysTree.addEventListener('click', () :void => {
  appendAny((toysPage), (treePage as HTMLTemplateElement));
  renderTreePage();
})

export default toysPage;
