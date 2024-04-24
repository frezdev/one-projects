const $ = document;

const buttons = $.querySelectorAll('.tecla');
const audios = $.querySelectorAll('audio');

for (const audio of audios) {
  for (const button of buttons) {
    if (audio.id.includes(button.classList[1])) {
      button.onclick = () => {
        audio.currentTime = 0;
        audio.play()
      };
      button.onkeydown = (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
          button.classList.add('activa');
          return;
        }
      }
      button.onkeyup = () => {
        button.classList.remove('activa');
      }
    }
  }
}