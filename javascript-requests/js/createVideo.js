import {api} from './conectionApi.js';
const form = document.querySelector('[data-form]')

async function createVideo () {
  const formData = new FormData(form)
  const dataVideo = Object.fromEntries(formData);

  const descripcion = Math.floor(Math.random() * 10)

  const [error, data] = await api.createVideo({...dataVideo, descripcion});

  if (error) {
    alert('Ha ocurrido un error inesperado al enviar el video. \nIntentalo de nuevo.')
    return console.error(error);
  }
  console.log(data);
  window.location.href = './envio-concluido.html'

}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  createVideo()
});

