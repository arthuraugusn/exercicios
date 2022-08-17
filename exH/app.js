'use strict';

function testarDivisao(){
    const varA = parseInt(document.getElementById('a').value)
    const varB = parseInt(document.getElementById('b').value)
    const varC = parseInt(document.getElementById('c').value)
    const varD = parseInt(document.getElementById('d').value)
    const result = document.getElementById('result')

    if(varA % 2 == 0 || varA % 3 == 0){
        result.textContent = `As variáveis divisíveis por 2 ou 3 são: ${varA}`
    }if(varB % 2 == 0|| varB % 3 == 0){
        result.textContent += `, ${varB}`
    }if(varC % 2 == 0|| varC % 3 == 0){
        result.textContent += `, ${varC}`
    }if(varD % 2 == 0|| varD % 3 == 0){
        result.textContent += `, ${varD}`
    }
}

const botaoCalcular = document.getElementById('botaoCalcular').addEventListener('click', testarDivisao)