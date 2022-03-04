import ArrayConstructor from '../classes/arrayConstructor';
import localStorageItem from '../classes/localStorageItem';
import ToysItemConstructor from '../classes/toysItemsConstructor';
import toysPage from '../parts/toys/general/index';

export default function renderSortedItems(): void{
  const toysContainer = (toysPage as HTMLTemplateElement).querySelector('.toys-container__items') as HTMLElement;
  const localSTItem = new localStorageItem();
  const arrayForRender = new ArrayConstructor( localSTItem.getSortType(), localSTItem.getFilters());
  const toysConstructor = new ToysItemConstructor(arrayForRender.sortArray() as string[], localSTItem.getLikedOnes());
  toysConstructor.renderAll(toysContainer)
}
