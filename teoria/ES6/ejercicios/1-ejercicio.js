// Ejercicio Fizz y Buzz

/**
 * FIZZ y BUZZ si un número es  múltiplo de 3 imprimez FIZZ,
 * si el numero es múltiplo de 5 imprimes BUZZ
 * y si el numero es múltiplo de 3 y 5 (15, 30, 45), debes imprimer FIZZ BUZZ
 * 
 * El rango de numeros a utilizar es de 1 a 100 
 * utilize un for loop
 * para poder encontrar el multiplo de un numero utilizamos el modulo ("%")
 *  3%2 != 0  4%2 == 0
 */
 for(let i=1; i<=100;i++) {
    //console.log(i)
    if(( i % 3 == 0) && ( i % 5 == 0)) {
      // FIZZ BUZZ
      // console.log(i + ' FIZZ BUZZ');
      console.log(`${i} FIZZ BUZZ`);
    } else if( i % 3 == 0) {
      console.log(`${i} FIZZ`)
    } else if( i % 5 == 0) {
      console.log(`${i} BUZZ`)
    }
  }