const img = document.querySelector('img');
let pokemonRando = Math.floor(Math.random() * 151) + 1;

const gerarPokemon = () => {
   //consummindo os dados da api
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonRando}`)
   // aqui retornamos os dados do json e atribuimos a um str
    .then( (resposta) => { return resposta.json()})
   // daqui pegamos o json e seu dados 
    .then( (pokemon) => { 
        img.setAttribute('src',pokemon.sprites.front_default)
     })
}

gerarPokemon();