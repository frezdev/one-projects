export class AudioPlayer {
  media;
  constructor({ element }) {
    this.media = element;
    this.play = this.play.bind(this)
  }

  play () {
    this.media.currentTime = 0;
    this.media.play();
  }
}