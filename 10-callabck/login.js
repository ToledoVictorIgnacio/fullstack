console.log(document);

document.getElementById("email")

//console.log(document.getElementById("email"));

let email
let password

let emailDatos = "pepe@gmail.com"
let passwordDatos= "12345678"

const loginUser = () =>{
    email = document.getElementById("email").value
    password = document.getElementById("password").value

    if (email == "" || password == "") {
        alert("Complete los campos")
        return;
    }

    if (email == emailDatos && password == passwordDatos) {
    alert("Usuario logueado")
        }else{
            alert("Usuario no Logeado")
        }
}



console.log(email);
console.log(password);
