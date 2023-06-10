const maiorValor = 100
const menorValor = 1 
const numeroSecreto = sorteadorNumero()

function sorteadorNumero(){
    const numeroSorteado = parseInt(Math.random() * (maiorValor + 1)) 
    return numeroSorteado
}

function alterandoValores(){
    const elementoMaiorValor = document.getElementById('maior-valor')
    elementoMaiorValor.innerHTML = maiorValor

    const elementoMenorValor = document.getElementById('menor-valor')
    const menorValor = 1 
    elementoMenorValor.innerHTML = menorValor
}

alterandoValores()