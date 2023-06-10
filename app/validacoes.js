function verficarValidadeChute(numeroChute){
    const numero = +numeroChute
    const numeroChuteMin = numeroChute.toLowerCase()

    if(numeroChuteMin === "game over"){
        document.body.innerHTML = `
        <h1>Você disse: </h1>
        <h3>GAME OVER!</h3>
        <input type="button" id="jogar-novamente" class="btn-jogar" value="Jogar novamente">
        `
        jogarNovamente()
        return
    }

    if(validarComoNumero(numero)){
        elementoChute.innerHTML += `<div>Valor inválido!</div`
        return
    }

    if(numeroNaoPermitido(numero)){
        elementoChute.innerHTML += `<div>O número precisa estar entre o ${menorValor} e o ${maiorValor}.</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto era: ${numeroSecreto}</h3>
        <input type="button" id="jogar-novamente" class="btn-jogar" value="Jogar novamente">
        `
        jogarNovamente()

    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>` 
    }else{
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }
}

function validarComoNumero(numero) {
    return Number.isNaN(numero)
}

function numeroNaoPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

function jogarNovamente(){
    const botaoJogar = document.getElementById('jogar-novamente')
    botaoJogar.addEventListener('click', function(){
        window.location.reload()
    })
}