let segundos=0;
let minutos = 0;
let horas= 0;

let intervalo = null;

window.onload= function(){

    const displayTempo = document.querySelector('#display-tempo')
    const btnIniciar = document.querySelector('#btn-iniciar');
    const btnParar = document.querySelector('#btn-parar');
    const btnResetar = document.querySelector('#btn-resetar');

    function iniciarContagem() {

        if (intervalo !== null){

            return;


        }

intervalo= setInterval(avancarTempo, 1000);
    }

    function pararContagem(){

        clearInterval(intervalo);
        intervalo = null;
    }

    function resetarContagem(){

        pararContagem();
        segundos= 0;
        minutos= 0;
        horas= 0;

        displayTempo.textContent= "00:00:00"
    }

    btnIniciar.addEventListener('click', iniciarContagem);
    btnParar.addEventListener('click', pararContagem);
    btnResetar.addEventListener('click',resetarContagem);

    displayTempo.textContent = "00:00:00";



    function formatarTempo(tempo) {

        return tempo < 10? '0' + tempo :tempo;

    }

function avancarTempo(){
    
segundos++;
if (segundos === 60) {

segundos = 0;
minutos++;

if (minutos === 60){

    minutos = 0;
    horas++;

    }

}displayTempo.textContent = 
formatarTempo(horas) + ':' + formatarTempo(minutos) + ':'+ formatarTempo(segundos);


}

}