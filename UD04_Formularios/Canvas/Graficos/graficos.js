
/*Variables*/

/*Input select*/
let opt;

/*Claves*/
let clave1;
let clave2;
let clave3;
let clave4;

/*Valores*/
let valor1;
let valor2;
let valor3;
let valor4;
//let valorTotal;

/*Canvas*/

/*Texto tarta*/
let angulo;

/*Dibujar puntos*/
function puntos(pincel,cuadro,vt,datos){

    // grid del grafico
    for (let x = 0.5; x < 500; x += 10) {
        pincel.moveTo(x, 0);
        pincel.lineTo(x, 500);
    }

    for (let y = 0.5; y < 500; y += 10) {
        pincel.moveTo(0, y);
        pincel.lineTo(500, y);
    }
    
    pincel.strokeStyle = "#eee";
    pincel.stroke();


    //Eje del grafico
    pincel.beginPath();

    pincel.moveTo(0, 500);
    pincel.lineTo(475, 500);
    pincel.moveTo(0, 500);
    pincel.lineTo(0, 25);

    pincel.strokeStyle = "#000";
    pincel.stroke();
    pincel.closePath();

    //Texto grid
    pincel.strokeStyle = "#black";
    pincel.stroke();
    pincel.font = "bold 12px sans-serif";
    pincel.fillText("X", 490, 500);
    pincel.fillText("Y", 8, 20);

    //Datos
    let x = 50;


    pincel.beginPath();
    pincel.moveTo(0,500);
    pincel.strokeStyle = "green";
    
    datos.forEach(dato => {
               
        pincel.lineTo(x,cuadro.height-dato.valor);

        pincel.font = '30px serif';
        pincel.fillText(dato.valor,x-20,cuadro.height-dato.valor-30); 

        pincel.moveTo(x,cuadro.height-dato.valor);
        pincel.stroke();

        x+=100;
    });

}


/*Dibujar barras*/
function barras(pincel,cuadro,vt,datos){

    let width = 50;
    let x = 50;

    datos.forEach(dato => {
        //Dibuja la barra
        pincel.fillStyle = dato.color;
        let calcularAltura = Math.round(cuadro.width*dato.valor/(vt+20));
        pincel.fillRect(x,cuadro.height-calcularAltura,width,dato.valor);        

        //Añade el texto
        pincel.font = '30px serif';
        pincel.fillText(dato.valor,x,cuadro.height-calcularAltura-30);

        x += width+10;
    });
}


/*Dibujar circulo*/
function tarta(pincel,cuadro,vt,datos){

    var X = cuadro.width / 2
    var Y = cuadro.height / 2;

    let ap = 0;   

    datos.forEach(dato => {
        //Dibuja porciones
        pincel.fillStyle=dato.color;
        pincel.beginPath();
        pincel.lineTo(X,Y);
        let af = (2 * Math.PI * dato.valor) / vt;
        pincel.arc(X, Y, 100, ap, ap+af);
        pincel.fill();        

        //Añadimos las etiquetas
        pincel.beginPath();
        pincel.font = "20px Helvetica, Calibri";
        pincel.textAlign = "center";
        pincel.fillStyle=dato.color;    
        angulo = (ap + af) / 1;

        let etiquetaY = Math.sin(angulo) * 1.5 * 100;
        let etiquetaX = Math.cos(angulo) * 1.5 * 100;

        pincel.fillText(dato.valor, etiquetaX+X, etiquetaY+Y);
        pincel.closePath();

        ap += af;
    });
    
}

function buildGrafico(){
    console.info(" * Construyendo grafico ");

    //Seleccionamos el lienzo
    const lienzo = document.querySelector("canvas");
    
    //Seleccionamos el pincel
    let ctx = lienzo.getContext("2d");

    //Claves
    clave1 = document.querySelectorAll("input")[0].value;
    clave2 = document.querySelectorAll("input")[2].value;
    clave3 = document.querySelectorAll("input")[4].value;
    clave4 = document.querySelectorAll("input")[6].value;    

    //Valores
    valor1 = parseInt(document.querySelectorAll("input")[1].value);
    valor2 = parseInt(document.querySelectorAll("input")[3].value);
    valor3 = parseInt(document.querySelectorAll("input")[5].value);
    valor4 = parseInt(document.querySelectorAll("input")[7].value);

    //Datos general
    const datos = [
        {clave:clave1,valor:valor1,color:"blue"},
        {clave:clave2,valor:valor2,color:"red"},
        {clave:clave3,valor:valor3,color:"green"},
        {clave:clave4,valor:valor4,color:"yellow"}
    ];

    //valor total
    const valorTotal = datos.reduce((suma,{valor})=>suma+valor,0);    

    //Limpiamos el lienzo
    ctx.clearRect(0, 0, 500, 500);    

    //Según el tipo de gráfico seleccionaremos un metodo o otro
    if(opt == "Grafico de tartas"){        
        tarta(ctx,lienzo,valorTotal,datos);
    }else if(opt=="Grafico de barras"){
        barras(ctx,lienzo,valorTotal,datos);
    }else if(opt=="Grafico de puntos"){
        puntos(ctx,lienzo,valorTotal,datos);
    }
}

function tipoGrafico(){
    opt = this.value;
}

function loadListeners(){
    document.querySelector("input[name='grafiqueame']").addEventListener("click",buildGrafico);
    document.querySelector("select").addEventListener("click",tipoGrafico);
}


function init(){
    console.log(" * Init ");
    loadListeners();
}

window.onload=init;