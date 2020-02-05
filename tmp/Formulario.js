var Fallos = Array();

function ComprobarNombre(e){

    let Nombre = e.value;
    let patronNombre = new RegExp(/^([a-z ñáéíóú]{2,10})$/i);
    

    if(!patronNombre.test(Nombre)){
        document.getElementById("nombre").value = "error";
        Fallos[0] = 1;
    }else{
        Fallos[0] = 0;
    }

}

function ComprobarApellidos(e){

    let Apellidos = e.value;
    let patronApellidos = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);

    if(!patronApellidos.test(Apellidos)){
        document.getElementById("apellidos").value = "error";
        Fallos[1] = 1;
    }else{
        Fallos[1] = 0;
    }

}

function ComprobarEmail(e){

    let Email = e.value;
    let patronEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(!patronEmail.test(Email)){
        document.getElementById("email").value = "error";
        Fallos[2] = 1;
    }else{
        Fallos[2] = 0;
    }


}

function ComprobarDNI(e){

    let DNI = e.value;
    let patronDNI = new RegExp(/(^([0-9]{8,8}\-[A-Z])|^)$/);

    if(!patronDNI.test(DNI)){
        document.getElementById("dni").value = "error";
        Fallos[3] = 1;
    }else{
        Fallos[3] = 0;
    }

}
    
function ComprobarPassword(e){

    let Password = e.value;
    let patronPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

    if(!patronPassword.test(Password)){
        Fallos[4] = 1;
    }else{
        Fallos[4] = 0;
    }

}
    
function ComprobarPassword2(e){

    let Password2 = e.value;
    let patronPassword2 = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

    if(!patronPassword2.test(Password2)){
        Fallos[5] = 1;
    }else{
        Fallos[5] = 0;
    }

}

function ComprobarIP(e){

    let IP = e.value;
    let patronIP = new RegExp(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/);

    if(!patronIP.test(IP)){
        document.getElementById("ip").value = "error";
        Fallos[6] = 1;
    }else{
        Fallos[6] = 0;
    }

}                

function TodoCorrecto(){
            
            if(Fallos[0]==1){
                alert("El campo del nombre es inválido");
            }
            if(Fallos[1]==1){
                alert("El campo del apellidos es inválido");
            }
            if(Fallos[2]==1){
                alert("El campo del email es inválido");
            }
            if(Fallos[3]==1){
                alert("El campo del DNI es inválido");
            }
            if(Fallos[4]==1){
                alert("El campo del password es inválido");   
            }
            if(Fallos[5]==1){
                alert("El campo del repetir password es inválido");
            }
            if(Fallos[4]!=Fallos[5]){
                alert("Los campos de password no coinciden");
            }
            if(Fallos[6]==1){
                alert("El campo de IP equipo es inválido");
            }

            let TodoBien = Fallos.indexOf(1);

            if(TodoBien == -1){
                alert("Todos los campos están bien");
            }
    
}