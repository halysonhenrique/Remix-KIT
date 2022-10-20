'use strict';
/* cria uma const que ira criar divs */

const criarDiv = (texto) => {  /* cria uma const que ira criar divs, esse texto ira representar a div a baixo */
    const div = document.createElement('div'); /*createelement vai criar uma div */
    div.classList.add('key'); /* em seguida adciona uma classe a essa div */
    div.textContent = texto; /* é o texto que ira receber pra representar a div: ex: N1, N2 */
    div.id = texto; /* cria um id que sera representado pelo (texto)*/
    document.getElementById('container').appendChild(div) /*insere o arquivo do DOM, no caso sera inserido no conainer. appenchild adiciona um filho(a div que foi criada)*/
}

const sons = { /*ATRIBUI UMA DIV AO SONS*/
    'Q': '01 - Scratch.mp3',
    'W': '02 - Scratch.mp3',
    'E': '03 - Scratch.mp3',
    'R': '04 - Scratch.mp3',
    'T': '05 - Scratch.mp3',
    'A': '06 - Scratch.mp3',
    'S': '07 - Scratch.mp3',
    'D': '08 - Scratch.mp3',
    'F': '09 - Scratch.mp3',
    'G': '10 - Scratch.mp3',
    'Z': '11 - Scratch.mp3',
    'X': '12 - Scratch.mp3',
    'C': '13 - Scratch.mp3',
    'V': '14 - Scratch.mp3',
    'B': '15 - Scratch.mp3'
}

const exibir = (sons) => {
    Object.keys(sons)/*pega o objeto que é sons e separa somente as keys (var) num array,*/.forEach(criarDiv)/*pra cada elemento que o object.keys pegar ele vai criar uma div com a funcao criada. for each é para cada elemento.*/
}
exibir(sons); 

const tocarSom = (letra) => { 
    const audio = new Audio(`./sons/${sons[letra]}`); /* cria uma const pra tocar o som, em seguida outra pegando um new audio, com o local que esta os sons seguido da cons da letra selecionada */
    audio.play(); /*toca a const audio */
}
    const efeito = (letra) => document.getElementById(letra)
                                      .classList.add('active'); /*cria uma const que pega o id da letra que foi clicada e adiciona uma classe nela*/
    
    const Removerefeito = (letra) => {
        const div = document.getElementById(letra); /*cria uma div que pega o elemento letra*/
        const removeActive = () => div.classList.remove('active'); // cria outra div que vai remover o evento da classe da letra */
        div.addEventListener('transitionend', removeActive); // adciona um evento que ira voltar ao normal depois de realizar a transicão, e cria a funcao removeactive//
        };
    
                                      
    const ativarDiv = (evento) => {  /* cria uma const que pega o evento de click que esta acontecendo na div criada abaixo e entao cria uma const letra com o id do target que foi clicado*/
        let letra = ''; // (evento.target.id); //
            if (evento.type == 'click') { // se o evento for = a um click, vai executar a acao pelo click//
                letra = evento.target.id;
            } else { // se nao for um click, ele vai pegar o key da letra e vai executar pelo teclado pela funçao no fim do js //
                letra = evento.key.toUpperCase();   
            }
        const verificarletra = sons.hasOwnProperty(letra) /*verifica se tem a propriedade letra onde esta sendo clicado*/
        if (verificarletra) { /*verifica se tem a propriedade letra e se tiver toca o som */
        efeito(letra);
        Removerefeito(letra);
        tocarSom(letra); }/* executa o som que representa a letra clicada */
    }

document.getElementById('container') /*pega o elemento pelo id e cria uma funcao */
            .addEventListener('click', ativarDiv);


window.addEventListener('keydown', ativarDiv);//adiciona um evento que quando a pessoa apertar a tecla ela e direcionada pra funçao selecionada //