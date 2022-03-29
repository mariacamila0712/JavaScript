/** 
 * Const Se utiliza para definir una constante y su valor no puede cambiar, pero
 * hay ciertas excepciones con los objetos y los arreglos ( vector y array) **/

const LENGUAJE_PROGRAMACION = "Javascript";
//LENGUAJE_PROGRAMACION = "Python";
console.log(LENGUAJE_PROGRAMACION);

//const con arrays
const arrayNumero = [10,20,30, "Hola Mundo"];
console.log(arrayNumero.length);
console.log(arrayNumero[3]);
arrayNumero.push(700); //Agregar un nuevo elemento al array
console.log(arrayNumero);

//api nos otorga información un servidor []
//Un array se declara como constante cuando el servidor lo vaya a utilizar y nosotros mas adelante no


//Un objeto en JAvascript
const persona = {
    nombre: 'Maria',
    lenguaje: 'Javascript'
};

console.log(persona);
console.log(persona.nombre);
persona.nombre = 'Camila'; //cambiando la propiedad nombre
console.log(persona.lenguaje);
persona.apellido = 'Maza'; //Añadir una nueva propiedad al arreglo
console.log(persona);

//const > let > var

const op = 4 + 2 + "4";
console.log(op);