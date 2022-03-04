
import data from '../data/data';
import {DataKeys, filterInterface,SortOptions} from '../data/localStItems'


type StringArrayReturnFN = () => string[] | undefined;
type StringGetBooleanReturnFN = (a:string) => boolean;

interface ForArrayConstructor{
  sortingType:string;
  filters:filterInterface<string[]>;
  finalArray: string[];

  filterArray:  StringArrayReturnFN;
  sortArray:  StringArrayReturnFN;

  isYearOK: StringGetBooleanReturnFN;
  isFavariteOK: StringGetBooleanReturnFN;
  isShapeOK: StringGetBooleanReturnFN;
  isCountOK: StringGetBooleanReturnFN;
  isSizeOK: StringGetBooleanReturnFN;
  isColorOK: StringGetBooleanReturnFN;
}

export default class ArrayConstructor implements ForArrayConstructor{
  sortingType;
  filters;
  finalArray: string[];

  constructor( sortingType: string, filters: filterInterface<string[]>){
    this.filters = filters;
    this.sortingType = sortingType;
    this.finalArray = [];
  }

  filterArray(): string[]|undefined{
    for (const key of data){
      if (this.isYearOK(key[DataKeys.num]) &&
          this.isSizeOK(key[DataKeys.num]) &&
          this.isShapeOK(key[DataKeys.num]) &&
          this.isFavariteOK(key[DataKeys.num]) &&
          this.isCountOK(key[DataKeys.num]) &&
          this.isColorOK(key[DataKeys.num])
      ){

    this.finalArray.push(key[DataKeys.num])
      }
    }
    return this.finalArray;
  }

  sortArray(): string[]|undefined{
    this.filterArray();
    switch(this.sortingType){

      case SortOptions.AZ:
        const newArrNames:string[] = [];
        const newFinalArr:string[] = [];
        for (let i=0; i< this.finalArray.length; i++){
          newArrNames.push(data[+this.finalArray[i] - 1][DataKeys.name])
        }
        newArrNames.sort();
        for (let i=0; i< newArrNames.length; i++){
          for (let j=0; j< this.finalArray.length; j++){
            if (newArrNames[i] === data[+this.finalArray[j] -1].name){
              newFinalArr.push(data[+this.finalArray[j] -1].num);
            }
          }
        }
        return newFinalArr;
        break;
      case SortOptions.ZA:
        const newArrNames2:string[] = [];
        const newFinalArr2:string[] = [];
        for (let i=0; i< this.finalArray.length; i++){
          newArrNames2.push(data[+this.finalArray[i] - 1][DataKeys.name])
        }
        newArrNames2.sort().reverse();
        for (let i=0; i< newArrNames2.length; i++){
          for (let j=0; j< this.finalArray.length; j++){
            if (newArrNames2[i] === data[+this.finalArray[j] -1].name){
              newFinalArr2.push(data[+this.finalArray[j] -1].num);
            }
          }
        }
        return newFinalArr2;
        break;
      case SortOptions.numberDown:
        const newArr1 = this.finalArray.sort((a,b) => +data[+b - 1][DataKeys.year] - +data[+a - 1][DataKeys.year]);
        if (newArr1 !== undefined) {return newArr1}
        break;
      case SortOptions.numberUp:
        const newArr2 = this.finalArray.sort((a,b) => +data[+a - 1][DataKeys.year] - +data[+b - 1][DataKeys.year]);
        if (newArr2 !== undefined) {return newArr2}
        break;
    }
  }

    searchArray(str:string): string[]{
      this.sortArray();
      const newArr: string[]= [];
      for (let i=0; i < data.length; i++){
        if (data[i][DataKeys.name].includes(str) && this.finalArray.includes(data[i][DataKeys.num])){
          newArr.push(data[i][DataKeys.num])
        }
      }
      return newArr;
    }

  isYearOK(item: string): boolean{
    if (+data[+item - 1][DataKeys.year] >= Number(this.filters[DataKeys.year][0]) &&
    +data[+item - 1][DataKeys.year] <= Number(this.filters[DataKeys.year][1])){
      return true
    }
    else {
      return false;
    }
  }

  isCountOK(item: string): boolean{
    if (+data[+item - 1][DataKeys.count] >= Number(this.filters[DataKeys.count][0]) &&
    +data[+item - 1][DataKeys.count] <= Number(this.filters[DataKeys.count][1])){
      return true
    }
    else {
      return false;
    }
  }

  isShapeOK(item: string): boolean{
    if (this.filters[DataKeys.shape][0] === 'all') {return true}
    for (const key of this.filters[DataKeys.shape]){
      if (data[+item - 1][DataKeys.shape] === key) {
        return true
      }
    }
    return false
  }

  isSizeOK(item: string): boolean{
    if (this.filters[DataKeys.size][0] === 'all') {return true}
    for (const key of this.filters[DataKeys.size]){
      if (data[+item - 1][DataKeys.size] === key) {
        return true
      }
    }
    return false
  }

  isColorOK(item: string): boolean{
    if (this.filters[DataKeys.color][0] === 'all') {return true}
    for (const key of this.filters[DataKeys.color]){
      if (data[+item - 1][DataKeys.color] === key) {
        return true
      }
    }
    return false
  }

  isFavariteOK(item: string): boolean{
    if (this.filters[DataKeys.favorite] === 'all') {return true}
    if (data[+item - 1][DataKeys.favorite] === true) {return true}
    else {return false}
  }
}
