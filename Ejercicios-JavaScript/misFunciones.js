/**
 * Conversion de unidades de metros,yardas,pulgadas,pies
 * @method cambiarUnidades
 * @param {string} id - El Id de los inputs de metros, yardas,pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgdas
 * @return
 */
 function cambiarUnidades (id, valor )  {
    var met, pie, pul, yar;
    if(valor.includes(",")) {
        valor = valor.replace(",", ".")
    }
    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    }else if(id==="metro"){
        met = valor;
        pul = valor*39.3701;
        pie = valor*3.28084;
        yar = valor*1.09361;
    }else if(id==="pulgada"){
        met = 0.0254 * valor;
        pie = 0.0833333 * valor;
        yar = 0.02777 * valor;
        pul = valor;
    }
    else if(id==="pie"){
        met = 0.3048 * valor;
        pul = 12 * valor;
        yar = 0.3333 * valor;
        pie = valor;
    }else if(id==="yarda"){
        met = 0.9144 * valor;
        pie  = 3 * valor;
        pul = 36 * valor;
        yar = valor;
    }
    document.lasunidades.unid_metro.value = Math.round(met*100)/100;
    document.lasunidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasunidades.unid_pie.value = Math.round(pie);
    document.lasunidades.unid_yarda.value = Math.round(yar);
}
function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMo").style.display = 'block';
    } else if(valorMO=="val_ocultar"){
        document.getElementById("divMo").style.display = 'none';
    }
}

function convertirGR(id){
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI)/180
    }else if (id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function calcularSuma(){
     var num1,num2;
     num1 = document.getElementsByName("sum_num1")[0].value;
     num2 = document.getElementsByName("sum_num2")[0].value;
     document.getElementsByName("sum_total")[0].innerHTML= Number(num1) + Number(num2);
}
function calcularres(){
    var num1,num2;
    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML= Number(num1) - Number(num2);
}
function calcularMult(){
    var num1,num2;
    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML= Number(num1)  * Number(num2);
}
function calcularDiv(){
    var num1,num2;
    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML= Number(num1) / Number(num2);
}

function cargarweb(){
     var cant, unidad, urlComp;

     cant = document.getElementById("distancia").value;
     unidad = document.getElementsByName("unidades")[0].value;
     urlComp = "segundaWeb.html#" + cant + "#" + unidad;
     window.open(urlComp);
}
function cargarResultado(){
     var urlComp,can, un;

     urlComp = window.location.href.split("/")[5];
     can = urlComp.split("#")[1];
     un = urlComp.split("#")[2];
     document.getElementById("dist").value = can + " " + un;

}

function guardarlocalstorage(){
     let distancia,unidad;
     distancia = document.getElementById("distancia").value;
     unidad = document.getElementsByName("unidades")[0].value;
     localStorage.setItem("distanciaLS",distancia);
     localStorage.setItem("unidadesLS",unidad);
     window.open("2_web.html")
}
function cargarlocalstorage () {
     let cant, uni;
     cant = localStorage.getItem("distanciaLS");
     uni = localStorage.getItem("unidadesLS");

     document.getElementById("dist").value = cant + " " + uni;
}

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var ymax = canvas.height;
    var xmax = canvas.width
    var margen = 5;

    ctx.fillstyle= "#9b9ff1";
    ctx.fillRect(margen,ymax-40-margen,40,40);
    ctx.arc(xmax/2,ymax/2,20,0,2*Math.PI)
    ctx.stroke();
    ctx.fill;
}
