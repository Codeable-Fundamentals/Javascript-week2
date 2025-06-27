const persona = {
  nombre: "Simon",
  apellido: "Grau",
  obtenerNombreCompleto() {
    return this.nombre + " " + this.apellido + "!";
  },
};

console.log("Caso como metodo (funcion): ", persona.obtenerNombreCompleto());

const persona2 = {
  nombre: "Simon",
  apellido: "Grau",
  get NombreCompleto() {
    return this.nombre + " " + this.apellido + "!";
  },
};

console.log("Caso como propiedad: ", persona2.NombreCompleto);
