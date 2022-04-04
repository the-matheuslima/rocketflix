import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

function getMovie(idMovie) {
  const API_URL = `${BASE_URL}${idMovie}?${API_KEY}&${language}`
  fetch(API_URL)
    .then(respose => respose.json())
    .then(data => {
      let apiData = data
      createCard(apiData)
    })
}

function getId() {
  const idMovie = Math.floor(Math.random() * 1000) + 1;
  getMovie(idMovie)
}

getId()

function createCard(apiData) {
  const hero = document.querySelector('.hero')
  const poster = apiData.poster_path;

  const heroEl = `
  <div class="recommended-movie">
    <div class="poster">
      <img src="${IMG_URL + poster}" alt="">
    </div>
    
    <div class="movie-info">
      <h2 class="movie-title">${apiData.title}</h2>
      <p class="movie-description">
        ${apiData.overview}
      </p>
    </div>
  </div>
  `

  hero.innerHTML = heroEl
}

const searchMovie = document.querySelector('.search-movie');
searchMovie.addEventListener('click', getId)
