import {api} from './conectionApi.js';
import { errorTemplate } from './errorTemplate.js';
import {createCard, list} from './renderVideos.js';

const searchForm = document.querySelector('[data-search]');

async function filterVideos () {
  const formData = new FormData(searchForm);

  const query = formData.get('search');

  if (!query) return;

  const [error, videos] = await api.findVideosByQuery(query);

  if (error) {
    errorTemplate('Ha ocurrido un error inesperado :( <br> Revisa tu conexión a internet')
    return console.log(error);
  }

  list.innerHTML = '';
  if (videos.length === 0) {
    return errorTemplate('No encontramos lo que buscabas :(')
  }

  errorTemplate().clear()
  const videoElements = videos.map(video => createCard(video));
  list.append(...videoElements);
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  filterVideos()
})