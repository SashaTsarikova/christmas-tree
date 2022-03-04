declare type VoidReturnFN = () => void;
declare type StringReturnFN = () => string;
declare type StringArrayReturnFN = () => string[];
declare type StringGetFN = (a: string) => void;
interface ForLocalStorageItem {
    storage: Storage;
    startStorage: VoidReturnFN;
    getSortType: StringReturnFN;
    getFilters: StringArrayReturnFN;
    getLikedOnes: StringArrayReturnFN;
    getSettings: StringArrayReturnFN;
    getSettingsTree: StringArrayReturnFN;
    setSortType: StringGetFN;
    setFilters: (a: string, b: string) => void;
    setLikedOnes: StringGetFN;
    setSettings: StringGetFN;
    setTreeSettings: (a: string, b: string) => void;
    resetFilters: VoidReturnFN;
    resetSorting: VoidReturnFN;
}
export default class LocalStorageItem implements ForLocalStorageItem {
    storage: Storage;
    constructor();
    startStorage(): void;
    getSortType(): string;
    getFilters(): any;
    getLikedOnes(): any;
    getSettings(): any;
    getSettingsTree(): any;
    setSettings(settingthID: string): void;
    setTreeSettings(settingthID: string, newSettings: string): void;
    setSortType(newType: string): void;
    setFilters(filterID: string, newFilter: string | string[]): void;
    setLikedOnes(newLikedOne: string): void;
    resetFilters(): void;
    resetSorting(): void;
    clearLS(): void;
}
export {};
