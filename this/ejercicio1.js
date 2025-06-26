function saludar() {
  console.log("Este es el valor de this: ", this);
  return `Hola, mi nombre es ${this.nombre}`;
}

const persona1 = {
  nombre: "Simon",
  saludar: saludar,
  edad: 28, 
  tipo_de_cabello: "rulos"
};

const persona2 = {
  nombre: "Micaela",
  saludar: saludar,
};

let resp1 = persona1.saludar(); // Imprime: "Hola, mi nombre es Simon"
let resp2 = persona2.saludar(); // Imprime: "Hola, mi nombre es Micaela"

console.log(resp1);
console.log(resp2)
