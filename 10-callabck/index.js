/* let alumnos = ["juan", "pedro", "pepe", "agusto", "carla" ,"santiago"]

console.log(alumnos.length); */




let password = "12345678"
/* let email = prompt("Ingrese su email") */

console.log(password.length);

//Eemplo de validacion nativa de JS

function validarPassword() {

    if (password.length >= 8 && typeof String) {
        if (password == 123456) {
        console.log("Hola admin");
        }
        console.log("Contraseña valida");
    }else{
        console.log("Tu contraseña tiene " + password.length + "caracteres y no es valida");
        location.reload()
    }   
}


validarPassword()


function validarPass(pass) {

    if (password.length >= 8 && typeof String) {
        if (password == 123456) {
        console.log("Hola admin");
        }
        console.log("Contraseña valida");
    }else{
        console.log("Tu contraseña tiene " + password.length + "caracteres y no es valida");
        location.reload()
    }   
}

validarPass(password)

/* console.log(pass); */
