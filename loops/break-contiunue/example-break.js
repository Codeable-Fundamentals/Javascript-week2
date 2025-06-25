// let texto = "Codeable";
// let letraObjetivo = "a";

// for (let i = 0; texto[i] !== undefined; i++) {
//   if (texto[i] === letraObjetivo) {
//     console.log(`¡Letra encontrada en la posición ${i}!`);
//     break;  // Termina el bucle inmediatamente
//   }
// }

let name = "GRECIA";

console.log("Posicion 0: ", name[0]);
console.log("Posicion 1: ", name[1]);
console.log("Posicion 2: ", name[2]);
console.log("Posicion 3: ", name[3]);
console.log("Posicion 4: ", name[4]);
console.log("Posicion 5: ", name[5]);
console.log("Posicion 12: ", name[12]);

let nuevo_arreglo = ["A", "B", "C", "D", "E"];
// console.log("Longitud del arreglo : ", nuevo_arreglo.length); // 5
// console.log("Posicion 0 en arreglo: ", nuevo_arreglo[0]);
// console.log("Posicion 1 en arreglo: ", nuevo_arreglo[1]);
// console.log("Posicion 2 en arreglo: ", nuevo_arreglo[2]);
// console.log("Posicion 3 en arreglo: ", nuevo_arreglo[3]);
// console.log("Posicion 4 en arreglo: ", nuevo_arreglo[4]);
// console.log("Posicion 100 en arreglo: ", nuevo_arreglo[100]);

for (let posicion = 0; posicion < nuevo_arreglo.length; posicion++) {
  console.log(`Posicion ${posicion} en arreglo : `, nuevo_arreglo[posicion]);
  if (nuevo_arreglo[posicion] === "C") {
    console.log("Enconmtre la letra c!!!");
    continue;
  }
}

console.log("------EJEMPLO CODEABLE ---------")

let texto = "Codeable";
let letraObjetivo = "a";
 
for (let i = 0; texto[i] !== undefined; i++) {
  if (texto[i] === letraObjetivo) {
    console.log(`¡Letra encontrada en la posición ${i}!`);
    break;  // Termina el bucle inmediatamente
  }
}