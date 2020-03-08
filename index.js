  // demo
const app = document.querySelector("#app");

//app.innerText = "Hello World!!!";
//going to grab names and infor from Star Wars API and plug in here
//boilerplate
fetch('https://swapi.co/api/people')
//set up promises
    .then(response => response.json())
    //log the responses
   //was .then(jsonData => console.log(jsonData)) but now we are iterating over the data
   .then(jsonData => {
    //    jsonData.results.forEach(person =>{
    //        console.log(person);
    //    });

//or

    const people = jsonData.results;

    people.forEach(person =>{
        //console.log(person);
        const nameElem = document.createElement("p");
        nameElem.innerText = person.name;
        app.appendChild(nameElem);
    });
   })
   .catch(err => console.log(err));






   //from a different site
   /**
 * Load Json File example
 */
const loadJson = () => {
    return fetch('movies.json')
      .then((response) => {
        loadMenu();
        return response.json()
      })
      .then((res) => {
        const moviesList = document.querySelector('ul');
        for (let i = 0; i < res.movies.length; i++) {
          const movie = document.createElement('li');
          movie.innerHTML = `<h3>${res.movies[ i ].title}</h3>`;
          movie.innerHTML += `<p> Episode ${res.movies[ i ].episode_number}</p>`;
          movie.innerHTML += `<p> ${res.movies[ i ].description}</p>`;
          let castList = '<ul>';
          res.movies[ i ].main_characters.forEach((character) => {
            castList += `<li><img src="/images/falcon.png" class="falcon">${character}</li>`;
          })
          castList += '</ul>'
          movie.innerHTML += ` Cast: ${castList}`;
          moviesList.appendChild(movie);
        }
      })
  }
  /**
 * HTML menu response example (So nice web sample)
 */
const loadMenu = () => {
    const menu = document.getElementById('menu');
    fetch('.menu.html')
      .then(function (response) { return response.text() })
      .then(function (text) {
        menu.innerHTML = text;
        const burger = document.getElementById('burger');
        const nav = document.getElementById('nav');
        if (burger) {
          burger.onclick = () => {
            burger.classList.toggle('active');
            nav.classList.toggle('show');
          }
        }
      });
  }
