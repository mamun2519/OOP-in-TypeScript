export abstract class MediaPlayer {
  protected volume: number = 0;
  protected isMuted: boolean = false;
  protected isPlaying: boolean = false;
  protected isPaused: boolean = false;
  protected isStopped: boolean = false;

  constructor(protected file: string, protected format: string) {}

  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
  mute() {
    this.isMuted = true;
  }

  unmute() {
    this.isMuted = false;
  }

  increaseVolume(volume: number) {
    this.volume += volume;
    if (this.volume > 100) {
      this.volume = 100;
    }
  }

  decreaseVolume(volume: number) {
    this.volume -= volume;
    if (this.volume < 0) {
      this.volume = 0;
    }
  }

  getVolume() {
    return this.volume;
  }

  getIsMuted() {
    return this.isMuted;
  }

  getIsPlaying() {
    return this.isPlaying;
  }

  getIsPaused() {
    return this.isPaused;
  }

  getIsStopped() {
    return this.isStopped;
  }
}

export class AudioPlayer extends MediaPlayer {
  constructor(file: string, format: string) {
    super(file, format);
  }
  pause(): void {
    console.log("Pause Media");
  }
  play(): void {
    console.log("Play Media");
  }
  stop(): void {
    console.log("Stop Media");
  }
}
