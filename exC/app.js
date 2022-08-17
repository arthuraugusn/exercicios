'use strict';

function calcularMedia(){
    const nota1 = parseFloat(document.getElementById('a').value)
    const nota2 = parseFloat(document.getElementById('b').value)
    const nota3 = parseFloat(document.getElementById('c').value)
    const nota4 = parseFloat(document.getElementById('d').value)
    const result = document.getElementById('result')
    const form = document.getElementById('form')

    if(form.reportValidity()){
        const md = calculoMedia(nota1,nota2,nota3,nota4)

        if(md >=5){
            result.textContent = `Aprovado`
        }else{
            result.textContent = `Reprovado`
        }
    }
}

const calculoMedia = (nota1,nota2,nota3,nota4) => (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4))/4

const botaoCalcular = document.getElementById('botaoCalcular').addEventListener('click', calcularMedia)