window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const chute = e.results[0][0].transcript
    const chuteStrSemPonto = chute.slice(0, -1);

    exibeChuteNaTela(chuteStrSemPonto)
    verficarValidadeChute(chuteStrSemPonto)
}

const elementoChute = document.getElementById('chute')
function exibeChuteNaTela(numeroChutado){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class=box>${numeroChutado}</span>
    `
}

recognition.addEventListener('end', function(){
    recognition.start()
})