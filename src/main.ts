import './styles/style.css'

import LocalStorageItem from './classes/localStorageItem'
import homePage from './parts/home/index';

const mainContainer = document.querySelector('main') as HTMLElement;
(mainContainer as HTMLElement).append(homePage as HTMLElement);


 const localSTItem = new LocalStorageItem();

 if (!localSTItem.getFilters() || !localSTItem.getSortType() || !localSTItem.getLikedOnes() || !localSTItem.getSettings()){
   localSTItem.startStorage();
 }

console.log('Самооценка 186/200 \n');
console.log('Реализовано все, кроме пунктов ниже \n');
console.log(`повешенные на ёлку игрушки можно снимать с ёлки, при этом они возвращаются в свой слот (-10 из 10)\n`);
console.log(`Частично реализовано:
1) повешенные на ёлку игрушки можно перетягивать в пределах ёлки (игрушки перетягиваются и за ее пределы) (-5 из 10)
2) когда игрушку "вешают на ёлку" количество игрушек в слоте уменьшается, когда игрушку "снимают с ёлки", количество игрушек в слоте увеличивается, когда все экземпляры игрушки помещаются на ёлку, отображается пустой слот (не предусмотрена возможность снятия игрушек с елки и, соответственно, изменение их количества в большую сторону) (-4 из 10) \n`);
console.log('Дополнительный функционал, улучшающий качество приложения:');
console.log('Предусмотрена различное музыкальное оформление в зависимости от выбранного фона. При изменении фона изменяется и музыкальная компазиция (+5)');

