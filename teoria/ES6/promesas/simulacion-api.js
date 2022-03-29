// Una simulación del Api

function apiSimulator(){
    return new Promise(function(resolve,reject){
        let resultadoJson = true;
        if(resultadoJson){
            const producto = {
                nombre: 'Iphone',
                color: ' Space gray'
            }
            resolve(producto);
        }else{
            reject("error 500"); // Que no pudo retornar el objeto del producto
        }
    });
}

apiSimulator().then(function(producto){
    console.log(producto);
}).catch(function(err){
    console.log(err);
});

// transformar en una funcion anonima y usar el operador ternario 