'use strict';

function mostrarDiferenca(){
    const n1 = parseInt(document.getElementById('a').value)
    const n2 = parseInt(document.getElementById('b').value)
    const result = document.getElementById('result')
    let resultante

    if(n1 > n2){
        resultante = n1-n2
        result.textContent = 'Seu resultado é: '+n1 + ' - '+ n2 + ' = ' + resultante
    }else{
        resultante = n2-n1
        result.textContent = 'Seu resultado é: '+n2 + ' - '+ n1 + ' = ' + resultante
    }
}

const botaoCalcular = document.getElementById('botaoCalcular').addEventListener('click', mostrarDiferenca)