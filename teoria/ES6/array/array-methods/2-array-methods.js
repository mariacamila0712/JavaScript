/*
* El método reduce es un acumulador, es decir toma una cantidad de datos y nos retorna
* el resultado acumulado
*/

const carrito = [
    { nombre: 'Notebook MSI', precio: 1600},
    { nombre: 'Mouse Razer', precio: 150},
    { nombre: 'Aufinos Razer', precio: 200},
    { nombre: 'Monitor LG', precio: 300}
  ];
  
  const resultadoReduce = carrito.reduce((total, producto) => total + producto.precio, 0);
  console.log(resultadoReduce);