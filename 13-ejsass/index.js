//libreria de node con protocolo http
const http = require('http');

//libreria nativa de node que trabaja con archivos
const fs = require('fs');

const servidor = http.createServer((peticion, respuesta)=>{


    console.log('URL: ', peticion.url);

    console.log('====================================');
    console.log('====================================');
    
    
    console.log('Metodo: ', peticion.method );


    console.log('====================================');
    console.log('====================================');

    console.log(process.env);

    const url = peticion.url;

/*     if(url === '/'){
        respuesta.end('bienvenido a la aplicacion');
    } if (url === '/productos') {
        respuesta.end('<h1>Estas en la seccion de productos</h1>')
    } else{
        respuesta.end('error 404');
    } */
        
        switch (url) {
            case '/':

            fs.readFile('./index.html', 'utf8', (err, data) =>{
                if(err) throw err;
                console.log(data);
                respuesta.end(data);
            });
                break;
            case '/productos':

                fs.readFile('./productos.html', 'utf8', (err, data) =>{
                    if(err) throw err;
                    console.log(data);
                    respuesta.end(data);
                });
                break;
            default:
                respuesta.end('error 404');
                break;
        }
    
        
    
});


servidor.listen(5000, () =>{
    console.log('servidor en linea en el puerto 5000');
});


