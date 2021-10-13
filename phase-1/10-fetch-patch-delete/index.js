const BASE_URL = "http://localhost:3000/pokemons";
const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");

function renderPokemon(pokemon) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "like-num";
  likesNum.textContent = pokemon.likes;

  const likeBttn = document.createElement("button");
  likeBttn.className = "like-bttn";
  likeBttn.textContent = "♥";
  likeBttn.addEventListener("click", () => increaseLikes(pokemon, likesNum));

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener("click", () => deletePoke(pokemon, pokeCard));

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
}

function createPokemon(event) {
  event.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = event.target.querySelector("#img-input").value;

  const pokemon = {
    name: name,
    img: img,
    likes: 0,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  };

  fetch(BASE_URL, configObj)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (pokemon) {
      renderPokemon(pokemon);
    });
  pokeForm.reset();
}

function increaseLikes(pokemon, likesNum) {
  ++pokemon.likes;
  likesNum.textContent = pokemon.likes;

  //Now we're here trying to add another layer that persists these updates
  
  //Create an endpoint that includes the id
  //This is an optimistic rendering, it doesn't have any of then .then
  //Here, we're also updating our DOM on line 69 BEFORE we get the server request
  fetch(`${BASE_URL}/${pokemon.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    //Body here is only going to pass in the properties that are being updated
    body: JSON.stringify({
      likes: pokemon.likes
    })
  })
}

function deletePoke(pokemon, card) {
  card.remove();

  //Optimistic
  fetch(`${BASE_URL}/${pokemon.id}`, {
    method: "DELETE",
  })

  //Pessimistic
  // fetch(`${BASE_URL}/${pokemon.id}`, {
  //   method: "DELETE"
  // })
  // .then(resp => resp.json())
  // .then(data => console.log(data));
  // //The data will return an empty object, since we're clearing out an object
}

function getPokemons() {
  fetch(BASE_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (pokemonsArray) {
      pokemonsArray.forEach(function (pokemon) {
        renderPokemon(pokemon);
      });
    });
}

function submitFunction(e) {
  e.preventDefault();
}

function init() {
  getPokemons();
  pokeForm.addEventListener("submit", createPokemon);
  const commentForm = document.querySelector("#comment-form");
  console.log(commentForm);
  commentForm.addEventListener("submit", submitFunction);
}

init();
