'use strict';

function valorPositivo(){
    const variavel = parseInt(document.getElementById('a').value)
    const result = document.getElementById('result')

    if(variavel < 0){
        let resultado = variavel*(-1)
        result.textContent = 'O valor inicial inserido foi: '+variavel+'. Agora ele se transformou em positivo sendo: '+ resultado
    }else{
        result.textContent = 'O valor inserido foi: '+variavel
    }
}

const botaoCalcular = document.getElementById('botaoCalcular').addEventListener('click', valorPositivo)