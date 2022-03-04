import localStorageItem from "./localStorageItem";

const LSTITEM = new localStorageItem();

type VoidReturnFN = () => void;

interface ForSingleton{
  playID: number,

  changeSong: VoidReturnFN,
  playSong: VoidReturnFN,
  changeMethod: VoidReturnFN,
  pauseSong: VoidReturnFN,
}

export default class Singleton implements ForSingleton {

  protected song : HTMLAudioElement;
  public playID = 0;

  protected static _instance :Singleton;
  constructor() {
    if (Singleton._instance) {
        throw new Error("Instantiation failed: "+
                        "use Singleton.getInstance() instead of new.");
    }
    Singleton._instance = this;
    this.song = new Audio(`./assets/audio/${LSTITEM.getSettingsTree().bg}.mp3`);
  }

  public static getInstance() :Singleton {
    if (Singleton._instance) {
      return Singleton._instance;
    }
    return Singleton._instance = new Singleton();
  }

  changeSong(): void{
    if (LSTITEM.getSettingsTree().bg !== this.song){
      this.song.pause();
      this.changeMethod()
      this.playSong();
    } else {
    return
    }
  }

  changeMethod(): void{
    this.song = new Audio(`./assets/audio/${LSTITEM.getSettingsTree().bg}.mp3`);
  }

  playSong(): void{
    this.song.play();
    this.playID = 1;
  }

  pauseSong(): void{
    this.song.pause();
    this.playID = 0;
  }
}

