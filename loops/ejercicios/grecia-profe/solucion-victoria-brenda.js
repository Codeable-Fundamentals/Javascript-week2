// Ejercicio: Contar vocales en una palabra usando FOR
// Pedir palabra al usuario y contar cuántas vocales tiene
// Vocales: a, e, i, o, u (considerar mayúsculas y minúsculas)
// const promt = require("prompt-sync")();

// const word = promt("Escribe una palabra: ");

// let counter = 0;
// for (let i = 0; i < word.length; i++) {
//   const letra = word[i].toLowerCase(); // "A" -> "a"
//   if (
//     letra === "a" ||
//     letra === "e" ||
//     letra === "i" ||
//     letra === "o" ||
//     letra === "u"
//   ) {
//     counter++;
//   }
// }
// console.log(`Tu palabra tiene: ${counter} vocales`);


// Ejercicio: Verificar si un número es primo usando FOR
// Le vamos a pedir al usuario , que solocque un numero y el programa nos debe devolver:
// - el numero  XX es primo !
// - el numero XX no es primo :c.
// Un número primo solo es divisible por 1 y por sí mismo
// aqui implementacion

// const readline = require('readline');
// // Crear interfaz para entrada de datos
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question("Ingresa un número: ", function(input) {
//   const numero = parseInt(input);
//   if (isNaN(numero) || numero < 1) {
//     console.log("Ingresa un número válido mayor a 0.");
//     rl.close();
//     return;
//   }
//   let esPrimo = true;
//   if (numero === 1) {
//     esPrimo = false;
//   } else {
//     for (let i = 2; i < numero; i++) {
//       if (numero % i === 0) {
//         esPrimo = false;
//         break;
//       }
//     }
//   }
//   if (esPrimo) {
//     console.log(`El número ${numero} es primo`);
//   } else {
//     console.log(`El número ${numero} no es primo`);
//   }
//   rl.close();
// });


// Ejercicio: Encontrar el número mayor usando FOR
// let numeros = [23, 45, 12, 67, 34, 89, 5, 78];
// No uses Math.max(), hazlo con un bucle
//aqui implementacion

let numeros = [23, 45, 12, 67, 34, 89, 5, 78];
let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}
console.log(`El número mayor es: ${mayor}`);

// Ejercicio: Verificar si una palabra es palíndromo usando FOR
// Palíndromo se lee igual de izquierda a derecha y viceversa
// Ejemplos: "radar", "level", "civic"
//aqui implementacion

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese una palabra: ", function(palabra) {
  let esPalindromo = true;
  let longitud = palabra.length;
  for (let i = 0; i < Math.floor(longitud / 2); i++) {
    if (palabra[i].toLowerCase() !== palabra[longitud - 1 - i].toLowerCase()) {
      esPalindromo = false;
      break;
    }
  }
  if (esPalindromo) {
    console.log(`La palabra "${palabra}" es un palíndromo.`);
  } else {
    console.log(`La palabra "${palabra}" no es un palíndromo.`);
  }

  rl.close();
});

