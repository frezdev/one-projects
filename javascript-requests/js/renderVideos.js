import {api} from './conectionApi.js';
import { errorTemplate } from './errorTemplate.js';

const $ = document;
export const list = $.querySelector('[data-list]');

export function createCard ({ titulo, descripcion, url, imagem }) {
  const video = $.createElement('li');
  video.classList.add('videos__item');

  video.innerHTML = /*html */`
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src="${imagem}" alt="logo canal">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
    </div>
  `
  return video;
}

export async function renderVideos () {
  const [error, videos] = await api.getVideos();

  if (error) {
    console.log(error)

    errorTemplate('Ha ocurrido un error inesperado :( <br> Revisa tu conexión a internet')
    return
  };

  const videoElements = videos.map(video => createCard(video));
  list.append(...videoElements);
}