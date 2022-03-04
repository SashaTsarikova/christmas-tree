declare function dragStart(ev: DragEvent): boolean;
declare function dragEnd(ev: DragEvent): void;
declare function dragEnter(ev: MouseEvent): boolean;
declare function dragOver(ev: MouseEvent): void;
declare function dragDrop(ev: DragEvent): boolean;
declare function dragLeave(ev: DragEvent): boolean;
declare function dragDropBg(ev: MouseEvent): boolean;
declare function dragStartInner(ev: DragEvent): boolean;
export { dragDrop, dragDropBg, dragEnd, dragEnter, dragLeave, dragOver, dragStart, dragStartInner };
