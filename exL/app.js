'use strict';

function notTres(){
    const varA = parseInt(document.getElementById('a').value)
    const result = document.getElementById('result')

    if(varA <3){
        result.textContent =`O número digitado foi ${varA}`
    }else{
        result.textContent = `O número digitado é maior que 3`
    }
}

const botaoCalcular = document.getElementById('botaoCalcular').addEventListener('click', notTres)