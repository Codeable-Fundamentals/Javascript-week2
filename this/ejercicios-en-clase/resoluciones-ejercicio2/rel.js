// Ejercicio 4: Calculadora con Historial

// DESCRIPCIÓN:
// Crea una calculadora que mantenga un historial de operaciones.

// LO QUE TIENES QUE HACER:
// - Crea un objeto 'calculadora' con una propiedad 'historial' (array vacío)
// - Implementa métodos: sumar, restar, multiplicar, dividir
// - Cada método debe recibir dos números y guardar la operación en el historial
// - Agrega un método mostrarHistorial() que imprima todas las operaciones
// - Agrega un método limpiarHistorial() que vacíe el historial

const calculadora = {
  historial: [],

  sumar: function (a, b) {
    // Calcula el resultado
    // Guarda en historial: "5 + 3 = 8"
    // Retorna el resultado
    result = a + b;
    this.historial.push(`${a} + ${b} = ${result}`);
    return result;
  },

  restar: function (a, b) {
    result = a - b;
    this.historial.push(`${a} - ${b} = ${result}`);
    return result;
  },

  multiplicar: function (a, b) {
    result = a * b;
    this.historial.push(`${a} × ${b} = ${result}`);
    return result;
  },

  dividir: function (a, b) {
    if (b === 0) {
      console.error("Error: División por cero no permitida.");
      return null;
    }
    result = a / b;
    this.historial.push(`${a} ÷ ${b} = ${result}`);
    return result;
  },

  mostrarHistorial: function () {
    if (this.historial.length === 0) {
      console.log("Historial vacío.");
      return;
    }
    console.log("Historial de operaciones:");
    this.historial.forEach((resultado, index) => {
      console.log(`${index + 1}. ${resultado}`);
    });
  },

  limpiarHistorial: function () {
    this.historial = [];
    console.log("Historial limpio");
  },
};

// PRUEBAS - Ejecuta esto para verificar tu solución:
console.log(calculadora.sumar(5, 3));
console.log(calculadora.restar(10, 4));
console.log(calculadora.multiplicar(3, 7));
console.log(calculadora.dividir(15, 3));
calculadora.mostrarHistorial();
// calculadora.limpiarHistorial();
// calculadora.mostrarHistorial();

// RESULTADO ESPERADO:
// 8
// 6
// 21
// 5
// Historial de operaciones:
// 1. 5 + 3 = 8
// 2. 10 - 4 = 6
// 3. 3 × 7 = 21
// 4. 15 ÷ 3 = 5
// Historial limpio
