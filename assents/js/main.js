main();


function main () {


     /**
     * @param {array} classesTailwind add classes css
     * @param {string} idElement id da html tag
     */
      function createP () {
        const p = document.createElement('p');
        p.classList.add('text-lg', 'font-medium');
        return p
        }

    // add anos 
    const ano = new Date();
    const idade = ano.getFullYear() - 1982;

    let anodev = ano.getFullYear() - 2021

    if ( anodev <= 0 ) {
        anodev = 2021;
    } else {
        anodev = 2021 + anodev;  
    }
    
    const frase1 = `Sou soteropolitano, tenho ${idade} anos e resido em Palmeiras-Ba.
    Tenho formação em engenharia civil e trabalho com desenvolvimento web
    desde o início de ${anodev}.`;
    const presentSobre = document.querySelector('#present');
    const p1 = createP();
    p1.innerHTML = frase1;
    presentSobre.appendChild(p1);


    /** 
    * Capitura o evento padrão do formulário 
    */
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
        tipResult(imc);
        setTip(tipMsn);
    
    });

    function getImc(peso, altura) {
        const imc = peso / (altura**2);
        return imc.toFixed(2);
    }

    function setResult (msg, isValid) {
        const result = document.querySelector('#result');
        result.innerHTML = '';
        const p2 = createP();
        if (isValid) {
            p2.classList.add('text-red-500', 'text-xl', 'font-semibold');
            p2.innerHTML = msg;
            result.appendChild(p2); 
            return;
        } else {
            p2.classList.add('text-green-500', 'text-xl', 'font-semibold');
            p2.innerHTML = msg;
            result.appendChild(p2);
        } 
        
    }
    
    
    function tipResult (imc) {
        const tip = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade'];
        let tipMsn;

        if (imc >= 30) {
            tipMsn = tip[3];
            return tipMsn;
        } else if ( imc >= 25) { 
            tipMsn = tip[2]
            return tipMsn;
        } else if ( imc >= 18.5) {
            tipMsn = tip[1] 
            return tipMsn;
        } else if ( imc <= 18.4) {
            tipMsn = tip[0] 
            return tipMsn;
        }
    
    }

   

    function setTip(msg){
        const tipResult = document.querySelector('#tipResult');
        const p3 = document.createElement('p');
        p3.classList.add('text-base', 'font-medium');
        p3.innerHTML = msg;
        tipResult.appendChild(p3);  
    }
   

}



