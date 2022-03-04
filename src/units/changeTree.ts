import localStorageItem from '../classes/localStorageItem';
import renderTreePage from './renderTree';

export default function changeSmth(smthTOChange:string, index:string): void{
  const localSTItem = new localStorageItem();
  localSTItem.setTreeSettings(smthTOChange, index);
  renderTreePage();
}
