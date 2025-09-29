const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=708e00980000a8965cdf485f8f4960a4&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';//root part of the every part of the image
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=708e00980000a8965cdf485f8f4960a4&query=';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");
//want to create a div tag for everything in section""
returnMovies(APILINK);
  function returnMovies(url){//fetch-request data from server
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
      const div_card = document.createElement('div');
      div_card.setAttribute('class','card');
      
      const image = document.createElement('img');
      image.setAttribute('class','thumbnail');
      image.setAttribute('alt', element.title);
      
      const title = document.createElement('h3');
      
      const center = document.createElement('center');

      title.innerHTML = `${element.title}`;
      image.src = IMG_PATH + element.poster_path;

      center.appendChild(image);
      div_card.appendChild(center);
      div_card.appendChild(title);
      
      main.appendChild(div_card);
    });
  });
  }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';//this allows to delete all the movies existing on the screen
  const searchItem = search.value;

  if(searchItem){
    returnMovies(SEARCHAPI + searchItem);
      search.value = "";
  }
});