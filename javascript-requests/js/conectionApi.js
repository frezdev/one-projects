const BASE_URL = 'http://localhost:3001';

async function getVideos () {
  try {
    const res = await fetch(`${BASE_URL}/videos`);
    if (!res.ok) {
      throw new Error(`Request failed - ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();

    return [null, data];
  } catch (error) {
    console.error(error);
    return [error, null];
  }
}

async function createVideo (videoData) {
  const { titulo, descripcion, url, imagem } = videoData;
  try {
    const res = await fetch(`${BASE_URL}/videos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url,
        titulo,
        imagem,
        descripcion: `${descripcion} mil visualizaciones`
      })
    });

    if (!res.ok) {
      throw new Error(`Request failed - ${res.status}: ${res.statusText}`);
    }
    const data = await res.json();

    return [null, data];
  } catch (error) {
    console.error(error);
    return [error, null];
  }
}

async function findVideosByQuery (query) {
  try {
    const res = await fetch(`${BASE_URL}/videos?q=${query}`);

    if (!res.ok) {
      throw new Error(`Request failed - ${res.status}: ${res.statusText}`);
    }
    const data = await res.json();

    return [null, data];
  } catch (error) {
    console.error(error);
    return [error, null];
  }
}

export const api = {
  getVideos,
  createVideo,
  findVideosByQuery
}
