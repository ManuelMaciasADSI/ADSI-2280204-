"use strict"

/*variable local */
function asignarEdad() {
    let edad = 5 + 3;
    console.log(edad);
}
 
asignarEdad();

/*variable global */
var nombre = "Manuel Fernando"
var apellido = "Macias Delgado"

function mostrarNombre() {
    console.log ("Nombres: " + nombre );
    console.log (" Apellidos: " + apellido);
}

mostrarNombre();