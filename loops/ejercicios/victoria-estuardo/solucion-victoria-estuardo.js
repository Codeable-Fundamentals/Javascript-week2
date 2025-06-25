// Ejercicio 1: Contar vocales en una palabra usando FOR
// Pedir palabra al usuario y contar cuántas vocales tiene
// Vocales: a, e, i, o, u (considerar mayúsculas y minúsculas)

// const readline = require('readline');
// // Configurar entrada por consola
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question("Ingresa una palabra: ", function(palabra) {
//   let contador = 0;
//   const vocales = "aeiouAEIOU";

//   for (let i = 0; i < palabra.length; i++) {
//     if (vocales.includes(palabra[i])) {
//       contador++;
//     }
//   }

//   console.log(`La palabra "${palabra}" tiene ${contador} vocal${contador === 1 ? '' : 'es'}.`);
//   rl.close();
// });


// Ejercicio 2: Verificar si un número es primo usando FOR
// Un número primo solo es divisible por 1 y por sí mismo

// const readline = require('readline');

// // Crear interfaz para entrada de datos
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Ingresa un número para verificar si es primo: ", function(input) {
//   const numero = parseInt(input);
//   let esPrimo = true;

//   if (numero <= 1) {
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
//     console.log(`${numero} es un número primo.`);
//   } else {
//     console.log(`${numero} NO es un número primo.`);
//   }

//   rl.close();
// });


// Ejercicio 3: Encontrar el número mayor usando FOR
// No uses Math.max(), hazlo con un bucle

// // Lista de números
// let numeros = [23, 45, 12, 67, 34, 89, 5, 78];
// // Suponemos que el primer número es el mayor al inicio
// let mayor = numeros[0];
// // Recorremos el arreglo desde el segundo elemento
// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] > mayor) {
//     mayor = numeros[i];
//   }
// }
// console.log(`El número mayor es: ${mayor}`);


// // Ejercicio 4: Verificar si una palabra es palíndromo usando FOR
// // Palíndromo se lee igual de izquierda a derecha y viceversa
// // Ejemplos: "radar", "level", "civic"

// const readline = require('readline');

// // Crear interfaz para entrada de usuario
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Ingresa una palabra para verificar si es un palíndromo: ", function(palabra) {
//   let esPalindromo = true;
//   const longitud = palabra.length;

//   for (let i = 0; i < longitud / 2; i++) {
//     if (palabra[i].toLowerCase() !== palabra[longitud - 1 - i].toLowerCase()) {
//       esPalindromo = false;
//       break;
//     }
//   }

//   if (esPalindromo) {
//     console.log(`"${palabra}" es un palíndromo.`);
//   } else {
//     console.log(`"${palabra}" NO es un palíndromo.`);
//   }

//   rl.close();
// });


// Ejercicio 5: Usuario debe adivinar número del 1 al 10
//let numeroSecreto = Math.floor(Math.random() * 10) + 1;
//console.log(numeroSecreto)

// const readline = require('readline');

// // Crear la interfaz para leer datos
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// rl.question("Adivina el número secreto (entre 1 y 10): ", function(respuesta) {
//   const numeroUsuario = +respuesta;

//   if (numeroUsuario === numeroSecreto) {
//     console.log("¡Felicidades! Adivinaste el número.");
//   } else {
//     console.log(`Incorrecto. El número era ${numeroSecreto}.`);
//   }

//   rl.close();
// });


// Ejercicio 6: Contar cuántos dígitos tiene un número
// Ejemplo: 12345 tiene 5 dígitos

// const readline = require('readline');

// // Crear interfaz para leer datos
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Ingresa un número: ", function(numero) {
//   // Eliminar posibles signos negativos
//   numero = numero.trim();
  
//   if (isNaN(numero) || numero === '') {
//     console.log("Entrada inválida. Ingresa solo números.");
//   } else {
//     const cantidadDigitos = numero.replace('-', '').length;
//     console.log(`El número tiene ${cantidadDigitos} dígito(s).`);
//   }

//   rl.close();
// });


// Ejercicio 7: Pedir email hasta que contenga "@"
const readline = require('readline');

// Crear interfaz para leer datos desde consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirEmail() {
  rl.question("Ingresa tu email: ", function(email) {
    if (email.includes("@")) {
      console.log("Email válido ingresado.");
      rl.close();
    } else {
      console.log("El email debe contener '@'. Intenta nuevamente.\n");
      pedirEmail(); // volver a preguntar
    }
  });
}

pedirEmail();

//entra por consola y la ruta