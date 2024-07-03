//operadores relacionales en javascript
// >mayor que
let uno = 150;
let dos = 500;

let mayor = uno > dos;
console.log("El numero " + uno + " es mayor que " + dos + ": " + mayor)


let menor = uno < dos;
console.log("El numero " + uno + " es menor que " + dos + ": " + menor)


let igual = uno = dos;
console.log("El numero " + uno + " es igual que " + dos + ": " + igual)


let distinto = uno != dos;
console.log("El numero " + uno + " es distinto que " + dos + ": " + distinto)


//combinaciones

let mayorIgual = uno >= dos 
console.log("El numero " + uno + " es mayor o igual que " + dos + ": " + mayorIgual)


let menorIgual = uno <= dos
console.log("El numero " + uno + " es menor o igual que " + dos + ": " + menorIgual)


let identicoTodo = uno === dos //valor, tipo de dato, clon
console.log("El numero " + uno + " es identico que " + dos + ": " + identicoTodo)

//condicionales
// () condicion que evalua el si logico
// {} bloque de codigo que se ejecuta si la condicion se cumple
// la condicion se cumple con un booleano: true/false 
// si es true se ejecuta el bloque de codigo
// si es false no se ejecuta el bloque de codigo
let octavos = true;
if (octavos) {
    console.log("El partido de octavos de final se juega el  4 de Julio");
}

console.log("=====================")

let edad = 18
let inscripto = true
let argentino = true

if (edad >= 18) {
    console.log("1. puede votar");
}

console.log("====================");

if (edad >= 18) {
    if(inscripto){
        console.log("2. Puede votar")
    }
}

console.log("==================");

//IF anidados

if (edad >= 18) {
    if(inscripto){
        if (argentino) {
            console.log("3. Puede votar")
        }
    }
}

console.log("==================")

//operadores logicos  && (and)  || (or)  ! (not)
//   1                2            3
if (edad >= 18 && inscripto && argentino) {
    console.log("4. puede votar");
}


console.log("============================")

let email = "pepe@gmail.com"
let password = "1234"

//                 true                       true
if (email == "pepe@gmail.com" && password == "1234") {
    console.log("5. Bienvenido a la plataforma");
}

console.log("============================")

let emailUno = "pepe@gmail.com"
let passwordUno = "1234567"

// con que uno de los dos sea true se ejecuta el bloque de codigo
if (email == "pepe@gmail.com" || password == "1234") {
    console.log("6. Bienvenido a la plataforma");
}

console.log("============================")

let club = "true"
console.log(club);

if (!club) {
    console.log("7. genial con tu club");
}
console.log(!club);