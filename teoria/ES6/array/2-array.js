const carrito = [];

//Productos
const producto = {
    nombre: 'Iphone 13',
    precio: 1200
};

const producto2 = {
    nombre: 'Notebook Gamer Asus',
    precio: 2000
};

const producto3 = {
    nombre: 'Teclado Gamer Razer',
    precio: 100
}

const producto4 = {
    nombre: 'Mouse Gamer Razer',
    precio: 100
}

const producto5 = {
    nombre: 'Macbook Pro',
    precio: 3000
}

//Podemos añadir elementos a nuestro areeglo "carrito"

//Funcion push 
console.log(carrito);
carrito.push(producto); //con push puedo agrgar un nuevo elemento al array
carrito.unshift(producto2); //Puedo añadir al principio del array
carrito.push(producto3);
console.log(carrito);
carrito.pop(); // con pop puedo eliminar el ultimo elemento del array
console.log(carrito);
carrito.shift();//Con shif eliminar el 1er elemento del array
carrito.push(producto4);
carrito.push(producto5);
console.log(carrito);

//"Splice" donde queremos comenzar a eliminar y cuantos elementos deseamos eliminar
carrito.splice(1, 1);
console.log(carrito);
// carrito = [];
console.log(carrito);
