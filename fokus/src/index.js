import {templates, contexts, LocalStorage} from './constants.js'
const $ = document;
const $htmlRoot = $.querySelector('html');
const $focusButton = $.querySelector('#focusButton');
const $shortBreakButton = $.querySelector('#shortBreakButton');
const $longBreakButton = $.querySelector('#longBreakButton');
const $bannerImage = $.querySelector('.app__image');
const $appTitle = $.querySelector('.app__title');
const $activeMusicInput = $.querySelector('#alternar-musica');
const $musicVolumeControl = $.querySelector('#musicVolume');
const $timerContainer = $.querySelector('#timer');
const $startOrPauseBtn = $.querySelector('#start-pause');

let timerValue = 25 * 60;
let idInterval = null;

$timerContainer.textContent = convertToHourFormat(timerValue)

// AUDIOS
const musicAudio = new Audio('./sonidos/luna-rise-part-one.mp3');
musicAudio.loop = true;
musicAudio.volume = 0.5;

const alarmAudio = new Audio('./sonidos/beep.mp3');
const playAudio = new Audio('./sonidos/play.wav');
const pauseAudio = new Audio('./sonidos/pause.mp3');

[alarmAudio, playAudio, pauseAudio].forEach(audio => {
  audio.volume = 0.4;
});


$musicVolumeControl.defaultValue = 50;
$musicVolumeControl.oninput = (e) => {
  musicAudio.volume = e.target.value / 100;
}

$activeMusicInput.onchange = () => {
  if ($activeMusicInput.checked) {
    musicAudio.play();
  } else {
    musicAudio.pause();
  }
};


$shortBreakButton.addEventListener('click', () => {
  changeContext(contexts.shortBreak);
  activateButton($shortBreakButton, [$focusButton, $longBreakButton]);
});

$focusButton.addEventListener('click', () => {
  changeContext(contexts.focus);
  activateButton($focusButton, [$shortBreakButton, $longBreakButton]);
});

$longBreakButton.addEventListener('click', () => {
  changeContext(contexts.longBreak);
  activateButton($longBreakButton, [$focusButton, $shortBreakButton]);
});

$startOrPauseBtn.addEventListener('click', startCounter)

function activateButton (current, desactivate = []) {
  desactivate.forEach(button => {
    button.classList.remove('active');
  });

  current.classList.add('active');
}

function changeContext (context) {
  stopCounter({mute: true})
  $htmlRoot.setAttribute('data-contexto', context);
  $bannerImage.setAttribute('src', `./imagenes/${context}.webp`);
  $appTitle.innerHTML = changeTitle(context)
  timerValue = changeTime(context);
  LocalStorage.set('data-context', context);
  $timerContainer.textContent = convertToHourFormat(timerValue);
}

function changeTitle (context) {
  switch (context) {
    case contexts.focus:
      return templates.focus;

    case contexts.longBreak:
      return templates.longBreak;

    case contexts.shortBreak:
      return templates.shortBreak;

    default:
      return templates.focus;
  }
}

function changeTime (context) {
  switch (context) {
    case contexts.focus:
      return 25 * 60;

    case contexts.longBreak:
      return 15 * 60;

    case contexts.shortBreak:
      return 5 * 60;

    default:
      return 25 * 60;
  }
}

function startCounter () {
  if (idInterval) return stopCounter();

  playAudio.play();
  $startOrPauseBtn.innerHTML = StartOrPauseButton('pause');

  if (timerValue === 0) {
    const context = LocalStorage.get('data-context');
    timerValue = changeTime(context);
    $timerContainer.textContent = convertToHourFormat(timerValue);
  }
  idInterval = window.setInterval(() => {
    if (timerValue > 0) {
      timerValue--;
      $timerContainer.textContent = convertToHourFormat(timerValue);
      if (timerValue <= 5) alarmAudio.play();
    } else {
      stopCounter()
    }
  }, 1000)
}

function stopCounter ({mute = false} = {}) {
  !mute && pauseAudio.play();
  window.clearInterval(idInterval);
  idInterval = null;
  $startOrPauseBtn.innerHTML = StartOrPauseButton('play');
}

function convertToHourFormat(numero = 2) {
  const date = new Date(numero * 1000);
  return date.toLocaleTimeString('es-CO', {minute: '2-digit', second: '2-digit'})
}

/**
 * @param {'pause' | 'play'} state
 * @returns {string}
 */
function StartOrPauseButton (state) {
  const imageName = state === 'pause' ? 'pause' : 'play_arrow';
  const label = state === 'pause' ? 'Detener' : 'Iniciar';
  return (/*html */`
    <img class="app__card-primary-butto-icon" src="./imagenes/${imageName}.webp" alt="">
    <span>${label}</span>
  `)
}