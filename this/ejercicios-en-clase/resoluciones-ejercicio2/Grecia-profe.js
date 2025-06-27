// SOLUCIÓN COMPLETA: Calculadora con Historial

const calculadora = {
  historial: [],

  sumar: function (a, b) {
    // Calcular el resultado
    const resultado = a + b;

    // Guardar en historial usando 'this' para acceder al array
    this.historial.push(`${a} + ${b} = ${resultado}`);

    // Retornar el resultado
    return resultado;
  },

  restar: function (a, b) {
    const resultado = a - b;
    // 'this' se refiere al objeto calculadora
    this.historial.push(`${a} - ${b} = ${resultado}`);
    return resultado;
  },

  multiplicar: function (a, b) {
    const resultado = a * b;
    // Usamos 'this' para acceder a la propiedad historial
    this.historial.push(`${a} × ${b} = ${resultado}`);
    return resultado;
  },

  dividir: function (a, b) {
    // Verificar división por cero
    if (b === 0) {
      const mensaje = "Error: División por cero";
      this.historial.push(mensaje);
      return mensaje;
    }

    const resultado = a / b;
    this.historial.push(`${a} ÷ ${b} = ${resultado}`);
    return resultado;
  },

  mostrarHistorial: function () {
    // Verificar si hay operaciones en el historial
    if (this.historial.length === 0) {
      console.log("Historial vacío");
      return;
    }

    console.log("Historial de operaciones:");
    // 'this' nos permite acceder al array historial
    for (let i = 0; i < this.historial.length; i++) {
      console.log(`${i + 1}. ${this.historial[i]}`);
    }
  },

  limpiarHistorial: function () {
    // 'this' nos permite modificar la propiedad historial
    this.historial = [];
    console.log("Historial limpio");
  },
};

// PRUEBAS - Demostrando cómo funciona 'this'
console.log("=== PRUEBAS DE LA CALCULADORA ===\n");

// Cuando llamamos calculadora.sumar(), 'this' dentro del método se refiere a 'calculadora'
console.log("Resultado de 5 + 3:", calculadora.sumar(5, 3));
console.log("Resultado de 10 - 4:", calculadora.restar(10, 4));
console.log("Resultado de 3 × 7:", calculadora.multiplicar(3, 7));
console.log("Resultado de 15 ÷ 3:", calculadora.dividir(15, 3));

console.log("\n");
calculadora.mostrarHistorial();

console.log("\n");
calculadora.limpiarHistorial();
calculadora.mostrarHistorial();
