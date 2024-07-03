
let email = "admin@gmail.com"
let password = "1234"

//recibimos datos del user
let emailUser = prompt("Introduce tu email: ");
let emailPassword = prompt("Introduce tu password: ");

console.log(window);

//comparar los datos del user con la database

if (email == emailUser && password == emailPassword) {
    window.location = "./index.html"
    //alert("BIENVENIDO A LA PLATAFORMA BANCARIA")
}

