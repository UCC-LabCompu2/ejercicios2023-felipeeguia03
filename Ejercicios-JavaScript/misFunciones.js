/**
 * Conversion de unidades de metros,yardas,pulgadas,pies
 * @method cambiarUnidades
 * @param {string} id - El Id de los inputs de metros, yardas,pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgdas
 * @return
 */
function cambiarUnidades(id, valor ){
    if (isNaN(valor)){
        alert("se ingreso un valor invalido");
        document.lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda.value = "";
    }else if (id=="metro"){
        document.lasunidades.unid_pulgada.value = 39.3701 * valor;
        document.lasunidades.unid_pie.value = 3.2804 * valor;
        document.lasunidades.unid_yarda.value = 1.0936 * valor;
    }else if (id=="pulgada"){
        document.lasunidades.unid_metro.value = 0.0254 * valor;
        document.lasunidades.unid_pie.value = 0.0833333 * valor;
        document.lasunidades.unid_yarda.value = 0.02777 * valor;
    }else if (id=="pie"){
        document.lasunidades.unid_metro.value = 0.3048 * valor;
        document.lasunidades.unid_pulgada.value = 12 * valor;
        document.lasunidades.unid_yarda.value = 0.3333 * valor;
    }else if (id=="yarda"){
        document.lasunidades.unid_metro.value = 0.9144 * valor;
        document.lasunidades.unid_pie.value = 3 * valor;
        document.lasunidades.unid_pulgada.value = 36 * valor;
    }

}

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillstyle= "#333899";
    ctx.fillRect(0,0,40,40);

}