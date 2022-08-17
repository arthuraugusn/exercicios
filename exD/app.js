'use strict';

function calcularMedia(){
    const nota1 = parseFloat(document.getElementById('a').value)
    const nota2 = parseFloat(document.getElementById('b').value)
    const nota3 = parseFloat(document.getElementById('c').value)
    const nota4 = parseFloat(document.getElementById('d').value)
    const result = document.getElementById('result')
    const form = document.getElementById('form')

    if(form.reportValidity()){
        const md1 = calculoMedia(nota1,nota2,nota3,nota4)

        if(md1 >=7){
            result.textContent = `Aprovado com média de ${md1}`
        }else{
            const nota5 = prompt('Digite o valor da quinta nota (exame): ')
            const md2 = calculoMediaExame(nota1,nota2,nota3,nota4,nota5)

            if(md2 >=5){
                result.textContent = `Aprovado em exame com média de ${md2}`
            }else{
                result.textContent = `Reprovado com média de ${md2}`
            }
        }
    }
}

const calculoMedia = (nota1,nota2,nota3,nota4) => (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4))/4
const calculoMediaExame = (nota1,nota2,nota3,nota4, nota5) => (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)+parseFloat(nota5))/5

const botaoCalcular = document.getElementById('botaoCalcular').addEventListener('click', calcularMedia)