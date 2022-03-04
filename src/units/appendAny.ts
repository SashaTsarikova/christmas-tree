export default function appendAny(root: HTMLElement, elem: HTMLElement): void{
  const mainContainer= root.closest('main');
  (mainContainer as HTMLElement).innerHTML = '';
  (mainContainer as HTMLElement).append(elem);
}
