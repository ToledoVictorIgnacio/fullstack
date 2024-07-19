/* Un bucle es un ciclo que repite una pequeña estructura de codigo */

console.log("imprimo el archivo de js")

//variable de arreglo o array
let pepe = "pepe"
let pepes = "pepe"
let pepess = "pepe"

//index          0       1       2         3        4      5      6       7         8         9
let alumnos = ["Juan", "Pepe", "Marta", "Pedro", "Luis", "Ana", "Rosa", "Maria", "Carlos", "Jorge"]
let productos = ["Coca", "Fanta", "Sprite", "Pepsi", "Mirinda", "7up", "Manzanita", "Jumex", "Boing", "Del valle"]

console.log(alumnos); //imprimimos el array
console.log(productos);

console.log(alumnos[0])
console.log(alumnos[1])
console.log(alumnos[2])
console.log(productos[6])

//funcion de contar los elementos de un array
console.log(alumnos.length);

//Info
//1. Variable Local
//2. Condición
//3. Incremento

//Ejemplo de bucle
for(let index = 0 ; index < 10 ; index++) {
    console.log("imprime el archivo");
    console.log(index);
}

console.log("==========================================================");

//Imprimo el array de alumnos uno por uno
for(let index = 0 ; index < alumnos.length ; index ++) {
    console.log(alumnos[index]);
    console.log(index);
}

console.log("==========================================================");

//Imprimo el array de alumnos de tres en tres
for(let index = 0 ; index < alumnos.length ; index += 3) {
    console.log(alumnos[index]);
    console.log(index);
}

console.log("==========================================================");

//los arreglos tienen algunas funciones por defecto
//agregar elementos al final del array
alumnos.push("javier")

for (let index = 0; index < alumnos.length; index++) {
    console.log(alumnos[index]);
    
}

console.log("==========================================================");

//index           0       1       2      3     4          5    6       7
let persona = [123456, "juan", "perez", 25, "Calle 123", true, 9.5, "Mexico"]

//objetos literales de JS

let personaDos = {
    nombre: "Carlos",
    apellido: "Soler",
    edad: 25,
    direccion: "Calle 321",
    casado: true,
    calificacion: 9.5,
    pais:"Argentina",
}

console.log(persona.nombre);
console.log(personaDos.pais);

console.log(persona);
console.log(personaDos);

let empleadoEmpresa = [personaDos]

let empleadosEmpresa = [
    {
        nombre: "Carlos",
        apellido: "Soler",
        edad: 25,
        direccion: "Calle 321",
        casado: true,
        calificacion: 9.5,
        pais:"Argentina",
    }, 
    {
        nombre: "Pedro",
        apellido: "Soler",
        edad: 25,
        direccion: "Calle 321",
        casado: true,
        calificacion: 9.5,
        pais:"Argentina",
    },
    {
        nombre: "Santiago",
        apellido: "Soler",
        edad: 25,
        direccion: "Calle 321",
        casado: true,
        calificacion: 9.5,
        pais:"Argentina",
    },
    {
        nombre: "Alex",
        apellido: "Soler",
        edad: 25,
        direccion: "Calle 321",
        casado: true,
        calificacion: 9.5,
        pais:"Argentina",
    }
]

console.log(empleadoEmpresa);
console.log(empleadosEmpresa[0].nombre);

for (let index = 0; index < empleadosEmpresa.length; index++) {
    console.log(empleadosEmpresa[index].nombre);
    
}