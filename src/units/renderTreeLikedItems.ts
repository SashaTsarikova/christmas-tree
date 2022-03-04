import ArrayConstructor from '../classes/arrayConstructor';
import localStorageItem from '../classes/localStorageItem';
import ToysItemConstructor from '../classes/toysItemsConstructor';
import treePage from '../parts/trees';


export default function renderLikedTreeItems(): void{
  const treesContainer = (treePage as HTMLTemplateElement).querySelector('.tree__toys-conteiner') as HTMLElement;
  const localSTItem = new localStorageItem();
  const arrayForRender = new ArrayConstructor( localSTItem.getSortType(), localSTItem.getFilters());
  const toysConstructor = new ToysItemConstructor(arrayForRender.sortArray() as string[], localSTItem.getLikedOnes());
  toysConstructor.renderAllTree(treesContainer);
}
