import localStorageItem from "../classes/localStorageItem";

export default function styleLikedOnes(toysPage: HTMLElement): void{
  const itemToysContainer = (toysPage as HTMLElement).querySelector('.toys-container__items') as HTMLDivElement;
  const countLikedToys = (toysPage as HTMLElement).querySelector('#liked-count') as HTMLTitleElement;
  const localSTItem = new localStorageItem();

  countLikedToys.innerHTML = `${localSTItem.getLikedOnes().length || 0}`;
  itemToysContainer.childNodes.forEach((elem: ChildNode): void => {
    const likedArray = localSTItem.getLikedOnes();
    for (const key of likedArray){
      if ((elem as HTMLDivElement).dataset.num === key){
        (elem as HTMLDivElement).classList.add('checked')
      }
    }
  })
}
