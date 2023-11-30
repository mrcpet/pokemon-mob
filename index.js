const PokedexData = [
  {
    name: "bulbasaur",
    height: 7,
    weight: 69,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    height: 6,
    weight: 85,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "pikachu",
    height: 4,
    weight: 60,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mewtwo",
    height: 20,
    weight: 1220,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    name: "magikarp",
    height: 9,
    weight: 100,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
  },
  {
    name: "jigglypuff",
    height: 5,
    weight: 55,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    name: "squirtle",
    height: 5,
    weight: 90,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "jolteon",
    height: 8,
    weight: 245,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
  },
  {
    name: "electabuzz",
    height: 11,
    weight: 300,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
  },
  {
    name: "moltres",
    height: 20,
    weight: 600,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
  },
  {
    name: "growlithe",
    height: 7,
    weight: 190,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
  },
  {
    name: "oddish",
    height: 5,
    weight: 54,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
  },
  {
    name: "rattata",
    height: 3,
    weight: 35,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    name: "hypno",
    height: 16,
    weight: 756,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
  },
];

const pokeBtn = document.querySelector("#pokeBtn");
const pokeList = document.querySelector("#pokeList");

pokeBtn.addEventListener("click", () => {
  pokeList.innerHTML = "";

const checkboxes = document.querySelectorAll("[name='type']:checked")
// console.log(checkboxes);
let selectedPoke = []
checkboxes.forEach((box) => {
  selectedPoke.push(box.value);
});

let filteredPoke = PokedexData.filter((item) => {
  if (selectedPoke.includes(item.type) || selectedPoke.includes("all")) {
    return item;
  }
});
  renderPoke(filteredPoke);
});

const renderPoke = (array) => {
  array.forEach((pokemon) => {
    let li = document.createElement("li");
    li.innerText = `Name: ${pokemon.name}
        Height: ${pokemon.height}
        Weight: ${pokemon.weight}
        Type: ${pokemon.type} \n`;
    let img = document.createElement("img");
    img.setAttribute("src", pokemon.url);
    pokeList.append(li);
    li.append(img);
  });
};

// Skapa funktionalitet för att lägga till pokemons med ny data

const addBtn = document.querySelector("#addBtn"); 

addBtn.addEventListener("click", () => {

const pokeName = document.querySelector("#pokeName").value; 
const pokeHeight = document.querySelector("#pokeHeight").value; 
const pokeWeight = document.querySelector("#pokeWeight").value; 
const pokePic = document.querySelector("#pokePic").value; 
const pokeType = document.querySelector("#pokeType").value; 


  let newPokemon = {
    name: pokeName,
    height: pokeHeight,
    weight: pokeWeight,
    type: pokeType,
    url: pokePic
  }

  if (newPokemon.url === "") {
    newPokemon.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png";
  }

  PokedexData.push(newPokemon); 

  alert("Pokemon added!"); 


})