declare type StringGetFN = (a: string) => boolean;
declare type HtmlReturnFunction = (a: string) => ChildNode | null;
declare type HtmlGetFN = (a: HTMLElement) => void;
interface ForToysItemConstructor {
    arrayToys: string[];
    arrayLiked: string[];
    makeOne: HtmlReturnFunction;
    makeOneTree: HtmlReturnFunction;
    isLiked: StringGetFN;
    renderAll: HtmlGetFN;
    renderAllTree: HtmlGetFN;
}
export default class ToysItemConstructor implements ForToysItemConstructor {
    arrayToys: string[];
    arrayLiked: string[];
    constructor(arrayToys: string[], arrayLiked: string[]);
    makeOne(index: string): ChildNode | null;
    makeOneTree(index: string): ChildNode | null;
    isLiked(index: string): boolean;
    renderAll(root: HTMLElement): void;
    renderAllTree(root: HTMLElement): void;
}
export {};
