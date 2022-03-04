import appendAny from '../../units/appendAny';
import htmlToElement from '../../units/HTMLtoElement';
import renderSortedItems from '../../units/renderFilteredItems';
import renderTreePage from '../../units/renderTree';
import renderLikedTreeItems from '../../units/renderTreeLikedItems';
import styleLikedOnes from '../../units/styleLikedOnes';
import toysPage from '../toys/general/index';
import treePage from '../trees';
import HomePage from './templateHome';

const homePage =  <HTMLElement>htmlToElement(HomePage);
const buttonHomeToys = homePage.querySelector('#start') as HTMLButtonElement;
const buttonTreeToys = homePage.querySelector('#start-tree') as HTMLButtonElement;

buttonHomeToys.addEventListener('click', (): void => {
    appendAny(homePage, (toysPage as HTMLTemplateElement));

    renderSortedItems();
    const searchField = toysPage.querySelector('#search-input') as HTMLInputElement;
    searchField.focus();

    styleLikedOnes(toysPage);
})

buttonTreeToys.addEventListener('click', (): void => {
  appendAny(homePage, (treePage as HTMLTemplateElement));
  renderLikedTreeItems();
  renderTreePage();
})

export default homePage;
