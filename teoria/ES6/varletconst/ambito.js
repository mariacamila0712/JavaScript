/** AMBITO DE VARIABLES let y var **/

var edad = 20;

if(true){
    var edadVar = 40;
    console.log("edad: " + edad); //40
}

console.log("edad: " + edadVar); // ? 40 es fatal!

//Con let tambien se puede crear variables globales de manera correcta

let alturaGlobal = 400;
if(true){
    console.log("Esto es lo que viene del ámbito global " + alturaGlobal);
    let alturaIf = 20;
    console.log("altura: " + alturaIf); // ? = 20
}
//console.log("altura: " + alturaIf);//? = 400 ; no puedo imprimir esta variable no existe en el ambito global.
console.log("altura: " + alturaGlobal);//? = 400