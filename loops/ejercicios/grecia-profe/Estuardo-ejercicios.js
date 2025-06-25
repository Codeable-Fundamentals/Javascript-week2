const prompt = require("prompt-sync")();
// Ejercicio 2: Verificar si un número es primo usando FOR
// Un número primo solo es divisible por 1 y por sí mismo
// function esPrimo() {
//   let respuesta = +prompt("Ingrese un número: ");
//   for (let i = 2; i < respuesta**(1/2); i++ ) {
//     if (respuesta % i === 0) {
//       return `El número ${respuesta} no es primo`
//     }
//   }
//   return `El número ${respuesta} es primo`
// }
// console.log(esPrimo())

// Ejercicio 3: Encontrar el número mayor usando FOR
// let numeros = [23, 45, 12, 67, 34, 89, 5, 78];
// // No uses Math.max(), hazlo con un bucle
// function numeroMayor() {
//   let mayor = numeros[0];
//   for (let i = 1; i < numeros.length; i++) {
//     if (mayor < numeros[i]) {
//       mayor = numeros[i];
//     }
//   }
//   return `El número mayor es ${mayor}`;
// }
// console.log(numeroMayor());

// // Ejercicio 4: Verificar si una palabra es palíndromo usando FOR
// // Palíndromo se lee igual de izquierda a derecha y viceversa
// // Ejemplos: "radar", "level", "civic"
// function esPalindromo() {
//   let
//     palabra = prompt("Ingrese una palabra: "),
//     mensajePalindromo = `La palabra ${palabra} es palíndromo`;
//   for (i = 0; i <= palabra.length/2; i++) {
//     if (palabra[i] !== palabra[palabra.length-1-i]) {
//       mensajePalindromo = `La palabra ${palabra} no es palíndromo`;
//     }
//   }
//   return mensajePalindromo;
// }
// console.log(esPalindromo())

// // Ejercicio 5: Usuario debe adivinar número del 1 al 10
// let
//   numeroSecreto = Math.floor(Math.random() * 10) + 1,
//   numeroUsuario = +prompt("Adivine un número del 1 al 10: ");
// while (numeroUsuario !== numeroSecreto) {
//   numeroUsuario = +prompt("Intente adivinar de nuevo: ")
// }
// console.log("Usted ha adivinado el número:");
// console.log(numeroSecreto)

// // Ejercicio 6: Contar cuántos dígitos tiene un número
// // Ejemplo: 12345 tiene 5 dígitos
// let
//   numero = prompt("Ingrese un número:"),
//   numeroPositivo = Math.abs(numero).toString(),
//   contador = 0;
// while (typeof numeroPositivo[contador] !== "undefined") {
//   contador++;
// }
// console.log(`El número ${numero} tiene ${contador} dígitos`