import { filterInterface } from '../data/localStItems';
declare type StringArrayReturnFN = () => string[] | undefined;
declare type StringGetBooleanReturnFN = (a: string) => boolean;
interface ForArrayConstructor {
    sortingType: string;
    filters: filterInterface<string[]>;
    finalArray: string[];
    filterArray: StringArrayReturnFN;
    sortArray: StringArrayReturnFN;
    isYearOK: StringGetBooleanReturnFN;
    isFavariteOK: StringGetBooleanReturnFN;
    isShapeOK: StringGetBooleanReturnFN;
    isCountOK: StringGetBooleanReturnFN;
    isSizeOK: StringGetBooleanReturnFN;
    isColorOK: StringGetBooleanReturnFN;
}
export default class ArrayConstructor implements ForArrayConstructor {
    sortingType: string;
    filters: filterInterface<string[]>;
    finalArray: string[];
    constructor(sortingType: string, filters: filterInterface<string[]>);
    filterArray(): string[] | undefined;
    sortArray(): string[] | undefined;
    searchArray(str: string): string[];
    isYearOK(item: string): boolean;
    isCountOK(item: string): boolean;
    isShapeOK(item: string): boolean;
    isSizeOK(item: string): boolean;
    isColorOK(item: string): boolean;
    isFavariteOK(item: string): boolean;
}
export {};
