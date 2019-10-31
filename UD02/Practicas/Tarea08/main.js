window.addEventListener('keydown',sonido);

function sonido(e){
    var tecla = e.keyCode;
    switch(tecla){
        case 81:
            var sonidoQ = document.querySelector(`audio[data-key="${81}"]`);
            if (!sonidoQ)return;
            sonidoQ.currentTime=0;
            sonidoQ.play();
        break;
        case 87:
            var sonidoW = document.querySelector(`audio[data-key="${87}"]`);
            if (!sonidoW)return;
            sonidoW.currentTime=0;
            sonidoW.play();
        break;
        case 69:
            var sonidoE = document.querySelector(`audio[data-key="${69}"]`);
            if (!sonidoE)return;
            sonidoE.currentTime=0;
            sonidoE.play();
        break;
        case 82:
            var sonidoR = document.querySelector(`audio[data-key="${82}"]`);
            if (!sonidoR)return;
            sonidoR.currentTime=0;
            sonidoR.play();
        break;
    }
    switch(tecla){
        case 81:
            var teclaQ = document.querySelector(`.cuadro[data-key="${81}"]`);
            teclaQ.classList.add('animacion');
        break;
        case 87:
            var teclaW = document.querySelector(`.cuadro[data-key="${87}"]`);
            teclaW.classList.add('animacion');
        break;
        case 69:
            var teclaE = document.querySelector(`.cuadro[data-key="${69}"]`);
            teclaE.classList.add('animacion');
        break;
        case 82:
            var teclaR = document.querySelector(`.cuadro[data-key="${82}"]`);
            teclaR.classList.add('animacion');
        break;
    }
    quitarEfecto();
}
function quitarEfecto(){
    var cuadros = document.querySelectorAll(".cuadro");
    for(let i=0;i<cuadros.length;i++){
        cuadros[i].addEventListener("transitionend",quitarAnimacion);
    }
}
function quitarAnimacion(e){
    e.target.classList.remove('animacion');
} 
