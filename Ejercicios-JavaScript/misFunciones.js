/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function cambiarUnidades(id, value ){
    if (isNaN(valor)){
        alert("se ingreso un valor invalido");
    }
}

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillstyle= "#333899";
    ctx.fillRect(0,0,40,40);

}