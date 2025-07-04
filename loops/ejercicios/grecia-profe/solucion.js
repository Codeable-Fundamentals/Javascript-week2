// Ejercicio: Contar vocales en una palabra usando FOR
// Pedir palabra al usuario y contar cuántas vocales tiene
// Vocales: a, e, i, o, u (considerar mayúsculas y minúsculas)
const promt = require("prompt-sync")();

const word = promt("Escribe una palabra: ");

let counter = 0;
for (let i = 0; i < word.length; i++) {
  const letra = word[i].toLowerCase(); // "A" -> "a"
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    counter++;
  }
}
console.log(`Tu palabra tiene: ${counter} vocales`);


// Ejercicio: Verificar si un número es primo usando FOR
// Le vamos a pedir al usuario , que solocque un numero y el programa nos debe devolver:

// - el numero  XX es primo !
// - el numero XX no es primo :c.
// Un número primo solo es divisible por 1 y por sí mismo
// aqui implementacion




// Ejercicio: Encontrar el número mayor usando FOR
let numeros = [23, 45, 12, 67, 34, 89, 5, 78];
// No uses Math.max(), hazlo con un bucle
//aqui implementacion

// Ejercicio: Verificar si una palabra es palíndromo usando FOR
// Palíndromo se lee igual de izquierda a derecha y viceversa
// Ejemplos: "radar", "level", "civic"
//aqui implementacion
