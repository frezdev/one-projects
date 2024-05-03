const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10'

// fetch(API_URL)
//   .then(response => response.json())
//   .then(renderItems)
//   .catch(console.log)

const cardTemplate = (item) => (
  `
  <li class="card">
      <img class="card__image" loading="lazy" src="${item.url}" alt="${item.title}">
      <h3 class="card__title">${item.title}</h3>
  </li>
  `
)
function renderItems (items = []) {
  const cardsContainer = document.querySelector('.ul__cards');
  cardsContainer.innerHTML = items.map(item => cardTemplate(item)).join('');
}

async function getImages () {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) throw new Error('Ha ocurrido un error');
    const data = await response.json();

    return [null, data]
  } catch (error) {
    console.log(error)
    return [error, null]
  }
}

(async () => {
  const [error, data] = await getImages();

  if (error) {
    console.log(error);
    return;
  }

  renderItems(data)
})()