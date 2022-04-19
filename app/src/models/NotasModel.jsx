class NotasModel {
    constructor () {
        this.inputQuantidade = document.querySelector('.input-quantidade');
        this.inputValor = document.querySelector('.input-valor');
        this.pizzaForm = document.querySelector('#pizza-form');
        this.btClear = document.querySelector('.bt-clear');
        this.quantidade = document.querySelector('.quantidade');
        this.quantidade2 = document.querySelector('.quantidade2');
        this.valor = document.querySelector('.valor');
        this.valor2 = document.querySelector('.valor2');
    }


    form(event) {
        event.preventDefault();
        const response = calcular();
        quantidade.innerHTML = response.media.toFixed();
        valor.innerHTML = response.valorMedia.toFixed(2);
        quantidade2.innerHTML = response.familia.toFixed();
        valor2.innerHTML = response.valorFamilia.toFixed(2);
    };

    clear(event) {
        event.preventDefault();
        quantidade.innerHTML = "";
        valor.innerHTML = "";
        quantidade2.innerHTML = "";
        valor2.innerHTML = "";
    };

    calcular() {
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
}

export default NotasModel


