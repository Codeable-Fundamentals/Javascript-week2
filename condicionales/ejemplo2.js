let tipo_de_comida = "marisco";

const inicio = performance.now();

if (tipo_de_comida === "china") {
  console.log("Vamos al chifa!");
} else if (tipo_de_comida === "pollo ala brasa") {
  console.log("Vamos a la polleria ROCKYS!");
} else if (tipo_de_comida === "pollo") {
  console.log("Vamos a la pollada!");
} else if (tipo_de_comida === "mariscos") {
  console.log("Vamos a la cevicheria");
} else if (tipo_de_comida === "arepa") {
  console.log("Vamos a la areperia");
} else {
  console.log("Hoy no quedamos en casa , por que ahi hay comida :c ");
}
const fin = performance.now();
console.log("Usando el Else if : ", fin - inicio);

const inicio2 = performance.now();
// sea mejor el uso de swich case
switch (tipo_de_comida) {
  case "china":
    console.log("Vamos al chifa!");
    break;
  case "pollo a la brasa":
    console.log("Vamos a apolleria");
    break;
  case "pollo":
    console.log("Vamos a la pollada");
    break;
  case "mariscos":
    console.log("Vamos a la cevicheria");
    break;
  case "arepa":
    console.log("Vamos a la areperia");
    break;
  default:
    console.log("Hoy no quedamos en casa , por que ahi hay comida :c");
}
const fin2 = performance.now();

console.log("Usando el Switch : ", fin2 - inicio2);
