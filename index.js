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
  
