// DATE EM FRASE
const ano = new Date();
const idade = ano.getFullYear() - 1982;
const presentSobre = document.querySelector('#present');

let anodev = ano.getFullYear() - 2021

if ( anodev <= 0 ) {
    anodev = 2021;
} else {
    anodev = 2021 + anodev;  
}

// const frase1 = `Sou soteropolitano, tenho ${idade} anos e resido em Palmeiras-Ba.
// Tenho formação em engenharia civil e trabalho com desenvolvimento web
// desde o início de ${anodev}.`;

// const p1 = createP();
// p1.innerHTML = frase1;
// presentSobre.appendChild(p1);


// TOGGLE SIDE BAR
// const togglePage = document.querySelector('#togglePage');
// const btmenu = document.querySelector('#btmenu');
// const btclose = document.querySelector('#btclose');

// btmenu.addEventListener('click', function () {
//     togglePage.classList.toggle('hidden');
// });

// FUNCTIONS

function createP () {
    const p = document.createElement('p');
    return p
}