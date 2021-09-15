function main () {
    // capturando o evento de submit
    const form = document.querySelector('#imcform');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputAltura = event.target.querySelector('#altura');
        const inputPeso = event.target.querySelector('#peso');
        const altura = Number(inputAltura.value);
        const peso = Number(inputPeso.value);

       if (!altura) {
            setResult('Valor da Altura Invalido');
            return;
       }

       if (!peso) {
            setResult('Valor do Peso Invalido');
            return;
       }

       const imc = getImc(peso, altura);
       setResult(imc);
       setTipResult(imc);
        
    });

    function getImc(peso, altura) {
        const imc = peso / (altura**2);
        return imc.toFixed(2);
    }

    function setResult (msg, isValid) {
        const result = document.querySelector('#result');
        result.innerHTML = '';
        const p = document.createElement('p');
        if (isValid) {
            p.classList.add('text-red-500', 'text-lg', );
            p.innerHTML = msg;
            result.appendChild(p); 
            return;
        } else {
            p.classList.add('text-green-500', 'text-lg', );
            p.innerHTML = msg;
            result.appendChild(p);
        } 
        
    }

    function setTipResult (imc) {
        const tip = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade'];

        if (imc >= 30) return tip[3];
        if ( imc >= 25) return tip[2];
        if ( imc >= 18.5) return tip[1];
        if ( imc <= 18.4) return tip[1];
         
        const tipResult = document.querySelector('#tipResult');
        tipResult.innerHTML = 'tip';
        const p2 = document.createElement('p');
        p2.classList.add('text-red-500', 'text-noraml', 'font-medium');
        p2.innerHTML = msg;
        tipResult.appendChild(p2);
    }
}
main();

