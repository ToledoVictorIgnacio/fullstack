
//Bienvenida a la app
alert("Bienvenido a la carga de Datos")

//inicializamos el array de productos
let productos = [];

//guardamos el producto del cliente en una variable
let producto = prompt("Ingresa el nombre del Producto")

//guardamos el producto en el array
productos.push(producto)

//Imprimimos los productos que el cliente ingresa enn la aplicacion
for(let index = 0; index < productos.length; index++){
    console.log(productos[index])
}