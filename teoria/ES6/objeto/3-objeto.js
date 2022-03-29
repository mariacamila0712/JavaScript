const producto = {
    id: 5414141,
    nombre: 'Iphone 13',
    precio: 1000,
    disponible: true
};

console.log(producto);

//como podemos cambiar  una propiedad de un objeto
producto.disponible = false;
console.log(producto);

//eliminar una propiedad del objeto
delete producto.id;
console.log(producto);