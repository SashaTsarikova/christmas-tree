declare type VoidReturnFN = () => void;
interface ForSingleton {
    playID: number;
    changeSong: VoidReturnFN;
    playSong: VoidReturnFN;
    changeMethod: VoidReturnFN;
    pauseSong: VoidReturnFN;
}
export default class Singleton implements ForSingleton {
    protected song: HTMLAudioElement;
    playID: number;
    protected static _instance: Singleton;
    constructor();
    static getInstance(): Singleton;
    changeSong(): void;
    changeMethod(): void;
    playSong(): void;
    pauseSong(): void;
}
export {};
