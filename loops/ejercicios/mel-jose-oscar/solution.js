// Ejercicio 1: Contar vocales en una palabra usando FOR
// Pedir palabra al usuario y contar cuántas vocales tiene
// Vocales: a, e, i, o, u (considerar mayúsculas y minúsculas)

function contarVocales(palabra) {
  let contadorVocales = 0;
  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i].toLowerCase();

    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      contadorVocales++;
    }
  }
  return contadorVocales;
}

console.log(" **********EJERCICIO 1 : ***********");
let palabraUsuario = "javaScript";
let palabraUsuario2 = "hola mundo";
console.log(
  ` "${palabraUsuario}" tiene : ${contarVocales(palabraUsuario)} vocales`
); //3
console.log(
  ` "${palabraUsuario2}" tiene : ${contarVocales(palabraUsuario2)} vocales`
); //4

// Ejercicio 2: Verificar si un número es primo usando FOR
// Un número primo solo es divisible por 1 y por sí mismo
// IMP => Definición oficial de número primo:
// Es un número entero mayor que 1 que solo tiene dos divisores positivos distintos: 1 y él mismo.

const prompt = require("prompt-sync")();

function esNumeroPrimo(numero) {
  let contadorDivisores = 0;
  if (numero > 1) {
    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        contadorDivisores++;
      }
    }
  }

  return contadorDivisores === 2;
}

function ejercicio2() {
  console.log("********** EJERCICIO 2 ***********");

  let cantidad = parseInt(prompt("¿Cuántos números deseas verificar?: "));

  for (let i = 1; i <= cantidad; i++) {
    let numero = parseInt(prompt(`Ingresa el número #${i}: `));

    if (isNaN(numero)) {
      console.log(" Entrada inválida. Debes ingresar un número.");
      i--; //
      continue;
    }

    const resultado = esNumeroPrimo(numero) ? "✅ es primo" : " NO es primo";

    console.log(`El número ${numero} ${resultado}`);
  }

  console.log("¡Programa terminado!");
}

ejercicio2();

// Ejercicio 3: Encontrar el número mayor usando FOR
let numeros = [23, 45, 12, 67, 34, 89, 5, 78];
// No uses Math.max(), hazlo con un bucle

function encontrarMayor(numeros) {
  let numeroMayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
      numeroMayor = numeros[i];
    }
  }
  return numeroMayor;
}

console.log("********** EJERCICIO 3 : ***********");
console.log(`El número mayor en el arreglo es: ${encontrarMayor(numeros)}`);

// Ejercicio 4: Verificar si una palabra es palíndromo usando FOR
// Palíndromo se lee igual de izquierda a derecha y viceversa
// Ejemplos: "radar", "level", "civic"

function esPalindromo(palabra) {
  let palabraLimpia = palabra.toLowerCase();
  let longitud = palabraLimpia.length;
  let mitad = parseInt(longitud / 2);
  let esPalindromo = true;

  for (let i = 0; i < mitad && esPalindromo; i++) {
    let letraIzquierda = palabraLimpia[i];
    let letraDerecha = palabraLimpia[longitud - 1 - i];

    if (letraIzquierda !== letraDerecha) {
      esPalindromo = false;
    }
  }

  return esPalindromo;
}

console.log("********** EJERCICIO 4 : ***********");

let palabra1 = "Radar";
let palabra2 = "oso";
let palabra3 = "Hola";

console.log(
  `¿"${palabra1}" es palíndromo? ${esPalindromo(palabra1) ? "Sí" : "No"}`
); //Si
console.log(
  `¿"${palabra2}" es palíndromo? ${esPalindromo(palabra2) ? "Sí" : "No"}`
); // Si
console.log(
  `¿"${palabra3}" es palíndromo? ${esPalindromo(palabra3) ? "Sí" : "No"}`
); // No

// Ejercicio 5: Usuario debe adivinar número del 1 al 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

// SOLUCIÓN 1
/* function adivinarNumero(intento) {
  return intento === numeroSecreto;
}

console.log("********** EJERCICIO 5 : ***********");
let intento1 = 3;
let intento2 = 7;
let intento3 = numeroSecreto; // Acierto

console.log(`Número secreto: ${numeroSecreto}`);

console.log(
  `Intento con ${intento1}: ${
    adivinarNumero(intento1) ? " Correcto" : " Incorrecto"
  }`
);
console.log(
  `Intento con ${intento2}: ${
    adivinarNumero(intento2) ? " Correcto" : " Incorrecto"
  }`
);
console.log(
  `Intento con ${intento3}: ${
    adivinarNumero(intento3) ? " Correcto" : " Incorrecto"
  }`
); */

// SOLUCIÓN 2
function adivinarNumero(intentos) {
  let contador = 0;
  let respuesta = false;
  while (contador < intentos.length) {
    if (intentos[contador] === numeroSecreto) {
      respuesta = true;
    }
    contador++;
  }
  return respuesta;
}

console.log("********** EJERCICIO 5 : ***********");
let intentos = [3, 7, numeroSecreto];

console.log(`Número secreto: ${numeroSecreto}`);

console.log(`Intento con ${intentos[0]}: ${adivinarNumero(intentos[0])}`);
console.log(`Intento con ${intentos[1]}: ${adivinarNumero(intentos[1])}`);
console.log(`Intento con ${intentos[2]}: ${adivinarNumero(intentos)}`);

// Ejercicio 6: Contar cuántos dígitos tiene un número
// Ejemplo: 12345 tiene 5 dígitos

function contarDigitos(numero) {
  let contador = 0;
  let numerosArray = numero.toString().split("").map(Number); //convertir # en un array
  while (contador < numerosArray.length) {
    contador++;
  }
  return contador;
}

console.log("********** EJERCICIO 6 : ***********");
let numero = 12345;

console.log(` El número : ${numero} tiene ${contarDigitos(numero)} dígitos`);

// Ejercicio 7: Pedir email hasta que contenga "@"
// tip: pueden buscar como pedir inputs, desde la consola o "terminal" al usuario

console.log("********** EJERCICIO 7 ***********");
function ejercicio7() {
  let email;
  let esValido = false;

  do {
    email = prompt("Ingresa un email: ");

    if (email.includes("@")) {
      console.log(`✅ Email válido: ${email}`);
      esValido = true;
    } else {
      console.log(" El email debe contener '@'. Intenta nuevamente.");
    }
  } while (!esValido);

  console.log("¡Programa terminado!");
}

ejercicio7();
