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
}
