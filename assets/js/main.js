//seletores
const img = document.querySelector('img');
const input = document.querySelector('input');
const form = document.querySelector('form');
const div = document.querySelector('div');
const span = document.querySelector('span');

//functions
const gerarPokemon = () => {
   //consummindo os dados da api
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`)
   // aqui retornamos os dados do json e atribuimos a um str
    .then( (resposta) => { return resposta.json()})
   // daqui pegamos o json e seu dados 
    .then( (pokemon) => { 
        img.setAttribute('src',pokemon.sprites.front_default);
        localStorage.setItem('nomePokemon', pokemon.name);
     })
}

const validarResposta = (evt) => {
    evt.preventDefault();
    //validar a resposta do input
    if (input.value === localStorage.getItem('nomePokemon')) {
        div.style.backgroundColor = '#4caf50';
        console.log('Resposta certa');
    }else{
        div.style.backgroundColor = '#ff5722';
        console.log('Resposta errada');
    }

    input.value = "";
    input.focus();
    img.style.filter = 'none';

    setTimeout(() => {
        div.style.backgroundColor = '#f9f9f9';
        img.style.filter = 'brightness(0)';
        gerarPokemon(); 
    }, 1000);

}

const mostrarPontuacao = () => {
    if (localStorage.getItem('pontuacao' == null) ) {
        localStorage.setItem('pontuacao', '0');
    }

    span.innerHTML = localStorage.getItem('pontuacao');

}

//events
window.onload = gerarPokemon;
form.onsubmit = validarResposta;