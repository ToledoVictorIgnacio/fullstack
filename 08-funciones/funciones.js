

//Funciones: estructura de codigo que ejecutan una tarea especifica y puede ser reutilizada en diferentes partes del codigo

//son variables globales

let password
let email

console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");

console.log("================================================");

//estructura de una funcion
//function saludoInicial() {

function saludoInicial() {
    console.log("Hola Mundo desde una Funcion");
}

//las funciones no se ejecutan hasta que son llamadas / invocadas
saludoInicial()



console.log("================================================");

saludoInicial()
saludoInicial()
saludoInicial()
saludoInicial()

console.log("===================================================");

//function con parametros / argumentos / info que necesita la funcion

function sumar(numeroUno, numeroDos) {
    
    let resultado = numeroUno + numeroDos;

    console.log(numeroUno);
    console.log(numeroDos);
    
    console.log("el resultado de la suma es: " + resultado);
}

//variables locales: son las que viven dentro de la funcion y no pueden ser accedidos desde afuera de la funcion
sumar(10, 20)
console.log("===================================================");

function sumarDos(x, y, p) {
    
    let resultado = x + y + p;

    console.log(x);
    console.log(y);
    
    console.log("el resultado de la suma es: " + resultado);
}

sumarDos(100, 50)

//console.log(x, y); error porque son variables locales

console.log("===================================================");

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

console.log("===================================================");

//console.log(index); error porque es una variable local

//arrow function = funcion flecha

const restar = (numeroUno, numeroDos) => {

    let resultado = numeroUno - numeroDos

    console.log(numeroUno);
    console.log(numeroDos);

    console.log("el resultado de la resta es: " + resultado);
}

restar(100, 50)

function sumarDos(x, y) {
    
    let resultado = x + y;

    console.log(x);
    console.log(y);
    
    console.log("el resultado de la suma es: " + resultado);
}

sumarDos(100, 50)

console.log("===================================================");