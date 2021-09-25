function main () {
 
    
   
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
       const msgTip = tipResult(imc);
       setResult(imc);
       setTip(msgTip);
       
   });

   function createP () {
    const p = document.createElement('p');
    p.classList.add('text-lg', 'font-medium');
    return p
    }
   
   function getImc(peso, altura) {
       const imc = peso / (altura**2);
       return imc.toFixed(2);
   }

   function setResult (msg) {
       const result = document.querySelector('#result');
       result.innerHTML = '';
       const p2 = createP();
       p2.classList.add('text-white', 'text-xl', 'font-semibold');
       p2.innerHTML = msg;
       result.appendChild(p2); 
       return;    
   }
   
   
   function tipResult (imc) {
       const tip = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade'];
       if (imc >= 30) return tip[3];
       if ( imc >= 25) return tip[2];
       if ( imc >= 18.5) return tip[1];
       if ( imc <= 18.4) return tip[0];
   }

   function setTip(msg){
       const tipResult = document.querySelector('#tipResult');
       const p3 = document.createElement('p');
       p3.classList.add('text-lg', 'font-medium');
       p3.innerHTML = msg;
       tipResult.appendChild(p3);  
   }
  
}
main();