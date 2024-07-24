
//POO
// Java, PHP, C, C++, C#, Python, Ruby, TS
class Auto{

    // atributos
    color = ""
    marca = ""
    modelo = ""
    puertas = ""

    //constructor
    constructor(color, marca, modelo, puertas){
        this.color = color
        this.marca = marca
        this.modelo = modelo
        this.puertas = puertas
    }

    //metodos
    encender(){
        console.log("El auto se ha encendido");
    }

    apagar(){
        console.log("El auto se ha apagado");
    }
    acelerar(){
        console.log("El auto ha acelerado");
    }
}

//Instanciar una clase en un objeto

let miAuto = new Auto("rojo", "toyota", "corolla", 4)

miAuto.acelerar()

let tuAuto = {
    color: "verde",
    marca: "ford",
    modelo: "fiesta",
    puertas: 2,
    encender:function(){
        console.log("El auto se ha encendido");
    },
    apagar(){
        console.log("El auto se ha apagado");
    },
    acelerar(){
        console.log("El auto ha acelerado");
    }
}

tuAuto.acelerar()
console.log(typeof tuAuto);

//bases de datos
//JSON = JavaScript Object 

let personaTres = {
    nombre: "Carlos",
    apellido: "Soler",
    edad: 25,
    direccion: "Calle 321",
    casado: true,
    calificacion: 9.5,
    pais:"Argentina",
}

console.log(typeof personaTres);