(function global () {
    const inputQuantidade = document.querySelector('.input-quantidade');
    const inputValor = document.querySelector('.input-valor');
    const pizzaForm = document.querySelector('#pizza-form');
    const btClear = document.querySelector('.bt-clear');
    const quantidade = document.querySelector('.quantidade');
    const quantidade2 = document.querySelector('.quantidade2');
    const valor = document.querySelector('.valor');
    const valor2 = document.querySelector('.valor2');
    
    const form = (event) => {
        event.preventDefault();
        const response = calcular();
        quantidade.innerHTML = response.media.toFixed();
        valor.innerHTML = response.valorMedia.toFixed(2);
        quantidade2.innerHTML = response.familia.toFixed();
        valor2.innerHTML = response.valorFamilia.toFixed(2);
    };

    const clear = (event) => {
        event.preventDefault();
        quantidade.innerHTML = "";
        valor.innerHTML = "";
        quantidade2.innerHTML = "";
        valor2.innerHTML = "";
    };

    const calcular = () => {
        const valor = inputValor.value;
        const peso = inputQuantidade.value;
        const pesoMedia = (peso / 2) / 0.48;
        const pesoFamilia = (peso / 2) / 0.84;
        const valorMedia = valor/(2*pesoMedia) || 0
        const valorFamilia = valor/(2*pesoFamilia) || 0

        return {
            media: pesoMedia, 
            familia: pesoFamilia,
            valorMedia: valorMedia,
            valorFamilia: valorFamilia
        };
    };

    btClear.addEventListener('click', clear);
    pizzaForm.addEventListener('submit', form);
})()


