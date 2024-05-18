import { LocalStorage } from '../utils/LocalStorage.js';

const $ = document;
const openCameraButton = $.querySelector('[data-video-boton]');
const cameraInput = $.querySelector('[data-camera]');
const video = $.querySelector('[data-video]');

const takePictureButton = $.querySelector('[data-tomar-foto]');
const message = $.querySelector('[data-mensaje]');
const canvas = $.querySelector('[data-video-canvas]');

const submitButton = $.querySelector('[data-enviar]');

let imgUrl = ''

openCameraButton.addEventListener('click', async () => {
  const startVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  });

  openCameraButton.style.display = 'none';
  cameraInput.style.display = 'block';
  video.srcObject = startVideo;
});

takePictureButton.addEventListener('click', () => {
  const context = canvas.getContext('2d');

  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  imgUrl = canvas.toDataURL('image/jpeg');
  cameraInput.style.display = 'none';
  message.style.display = 'block';
});

submitButton.addEventListener('click', () => {
  const registerData = LocalStorage.getItem('register');
  registerData.image_url = imgUrl;

  LocalStorage.setItem('register', registerData);
  window.location.href = './abrir-cuenta-form-3.html';
})