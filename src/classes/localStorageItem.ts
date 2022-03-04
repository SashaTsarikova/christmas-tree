import {DataKeys, SortOptions} from '../data/localStItems'
import { generalSettings, treeSettings } from '../data/settings';

type VoidReturnFN = () => void;
type StringReturnFN = () => string;
type StringArrayReturnFN = () => string[];
type StringGetFN = (a:string) => void;

interface ForLocalStorageItem{
  storage:Storage;
  startStorage: VoidReturnFN,

  getSortType: StringReturnFN,
  getFilters: StringArrayReturnFN,
  getLikedOnes: StringArrayReturnFN,
  getSettings: StringArrayReturnFN,
  getSettingsTree: StringArrayReturnFN,

  setSortType: StringGetFN,
  setFilters: (a:string, b:string) => void,
  setLikedOnes: StringGetFN,
  setSettings: StringGetFN,
  setTreeSettings: (a:string, b:string) => void,

  resetFilters: VoidReturnFN,
  resetSorting: VoidReturnFN,
}

const FilterStartObject = {
  count: ['1','12'],
  year: ['1940', '2020'],
  shape: ['all'],
  color: ['all'],
  size: ['all'],
  favorite: 'all'
}

const settingsStartObject = {
  music: 'off',
  snow: 'off',
  garland: 'off'
}

const treeStartObject = {
  tree: '1',
  bg: '8',
  savedTree: ['1']
}

enum StorageKeys{
  Filters = 'filters',
  LikedOnes = 'likedOnes',
  SortType = 'sortType',
  SettingsTree ='settingsTree',
  SettingsGeneral = "settingsGeneral",
}

export default class LocalStorageItem implements ForLocalStorageItem{
  storage: Storage;

  constructor(){
    this.storage = localStorage;
  }

  startStorage():void {
    this.storage.setItem(StorageKeys.SortType, SortOptions.AZ);
    this.storage.setItem(StorageKeys.Filters, JSON.stringify(FilterStartObject));
    this.storage.setItem(StorageKeys.LikedOnes,'[]');
    this.storage.setItem(StorageKeys.SettingsGeneral, JSON.stringify(settingsStartObject));
    this.storage.setItem(StorageKeys.SettingsTree, JSON.stringify(treeStartObject));
  }

  getSortType():string {
    return this.storage.getItem(StorageKeys.SortType) as string;
  }

  getFilters() {
    const a = this.storage.getItem(StorageKeys.Filters);
    if (a!==null){
      return JSON.parse(a)
    } else {
      return
    }
  }

  getLikedOnes() {
    const a = this.storage.getItem(StorageKeys.LikedOnes);
    if (a!==null){
      return JSON.parse(a)
    } else {
      return
    }
  }

  getSettings() {
    const a = this.storage.getItem(StorageKeys.SettingsGeneral);
    if (a!==null){
      return JSON.parse(a)
    } else {
      return
    }
  }

  getSettingsTree() {
    const a = this.storage.getItem(StorageKeys.SettingsTree);
    if (a!==null){
      return JSON.parse(a)
    } else {
      return
    }
  }

setSettings(settingthID: string): void{
  const a = this.getSettings();
  switch(settingthID as string) {
    case generalSettings.music:
    case generalSettings.snow:
      if (a[settingthID] === 'on'){
        a[settingthID]= 'off'
      } else {
        a[settingthID]= 'on'
      }
      this.storage.setItem(StorageKeys.SettingsGeneral, JSON.stringify(a));
    break;
    case generalSettings.garland:
      if (settingthID === 'off'){
        a[settingthID]= 'off'
      } else {
        a[settingthID]=`on_${settingthID.slice(2)}`
      }
      this.storage.setItem(StorageKeys.SettingsGeneral, JSON.stringify(a));
    break;
    }
}

setTreeSettings(settingthID: string, newSettings: string ): void{
  const a = this.getSettingsTree();
  switch(settingthID as string) {
    case treeSettings.tree:
    case treeSettings.bg:
      a[settingthID] = newSettings;
      this.storage.setItem(StorageKeys.SettingsTree, JSON.stringify(a));
    break;
    case treeSettings.savedTree:
      if (a[settingthID].indexOf(newSettings) === -1){
        a[settingthID].push(newSettings)
        this.storage.setItem(StorageKeys.Filters,JSON.stringify(a));
        return
      }
    }
}

  setSortType(newType: string): void{
    this.storage.setItem(StorageKeys.SortType, newType);
  }

  setFilters(filterID:string, newFilter: string | string[]) :void{
    const a = this.getFilters();

    switch(filterID) {
      case DataKeys.count:
      case DataKeys.year:
        a[filterID] = newFilter;
        this.storage.setItem(StorageKeys.Filters, JSON.stringify(a));
        break
      case DataKeys.color:
      case DataKeys.size:
      case DataKeys.shape:
        if (a[filterID][0]==='all'){
          a[filterID].splice(0, 1)
          a[filterID].push(newFilter);
          this.storage.setItem(StorageKeys.Filters ,JSON.stringify(a));
        } else {
          if (a[filterID].indexOf(newFilter) === -1){
            a[filterID].push(newFilter)
            this.storage.setItem(StorageKeys.Filters,JSON.stringify(a));
            return
          }
          a[filterID].forEach((item:string) => {
            if (item == newFilter){
              a[filterID].splice(a[filterID].indexOf(item), 1);
              this.storage.setItem(StorageKeys.Filters,JSON.stringify(a));
          }})
        }
          if (a[filterID].length === 0){
            a[filterID] = ['all']
            this.storage.setItem(StorageKeys.Filters,JSON.stringify(a));
          }
      break;
      case DataKeys.favorite:
        if (a[filterID] === 'all'){
          a[filterID] = 'true';
          this.storage.setItem(StorageKeys.Filters,JSON.stringify(a));
        } else if (a[filterID] === 'true') {
          a[filterID] = 'all';
          this.storage.setItem(StorageKeys.Filters,JSON.stringify(a));
        }
      break;
    }
  }

  setLikedOnes(newLikedOne:string) : void{
    const a = this.getLikedOnes();
    if (a.indexOf(newLikedOne) == -1){
      a.push(newLikedOne);
      this.storage.setItem(StorageKeys.LikedOnes,JSON.stringify(a));
      return
    }
    a.forEach((item:string) => {
      if (item == newLikedOne){
        a.splice(a.indexOf(item), 1);
        this.storage.setItem(StorageKeys.LikedOnes,JSON.stringify(a));
    }})
  }

  resetFilters() : void {
    this.storage.setItem(StorageKeys.Filters, JSON.stringify(FilterStartObject));
  }

  resetSorting(): void {
    this.storage.setItem(StorageKeys.SortType, SortOptions.AZ);
  }

  clearLS(): void{
    this.storage.clear();
  }
}
