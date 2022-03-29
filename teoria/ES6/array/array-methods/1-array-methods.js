/*
* EL método map() crea un nuevo array, el array resultante tiene una modificación por cada elemento
*/

const numeros = [10, 20, 30, 40];

// const resultadoMap = numeros.map( function( element ) {
//   return element * 2;
// });

const resultadoMap = numeros.map(element => element*2); // arrow function simplificar-

console.log(resultadoMap);

/** Familiarizandonos con el JSX */

// Seria escribir html en javascript
const usuarios = [
  {id: 1, name: 'Pedro'}, 
  {id: 2, name: 'Juan'}, 
  {id: 3, name: 'Diego'}
]; 

console.log(usuarios);
// longitud es de 3

// const resultadoJsx = usuarios.map( function(usuario) {
//   return `<li>${usuario.name}</li>`
// });

const resultadoJsx = usuarios.map(usuario =>`<li>${usuario.name}</li>`);
console.log(resultadoJsx);


// const > let > var