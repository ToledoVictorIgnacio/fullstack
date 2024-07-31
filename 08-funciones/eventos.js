//sin funciones
let nombre = prompt("Ingrese su Nombre: ")
alert("Bienvenido AAAdministrador " + nombre + " a la seccion de eventos")
console.log("Bienvenido AAAdministrador " + nombre + " a la seccion de eventos");

//con funcion

function saludarAdmin() {
    let codigo = prompt("Ingrese su Código")
    alert("Bienvenido Administrador a la seccion de eventos")
    console.log("El codigo de acceso es " + codigo);
    console.log("Bienvenido Administrador a la seccion de eventos");
}

//saludarAdmin() //llamado de la funcion

const titulo = () =>{
    alert("Hiciste click en el título de la pagina")
    console.log("Hiciste click en el título de la pagina");
}