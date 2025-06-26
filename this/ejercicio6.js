function imprimeThis() {
  console.log(this);
}
 
imprimeThis(); // ??


const persona = {
  nombre: "Simon",
  apellido: "Grau",
  obtenerNombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
}
 
console.log(persona.obtenerNombreCompleto()); // Imprime: Simon Grau