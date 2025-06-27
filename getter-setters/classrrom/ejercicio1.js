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
  age: 12,
  get NombreCompleto() {
    return this.nombre + " " + this.apellido + "!";
  },
  get ObtenerEdad() {
    return this.age;
  },
  set actualizarEdad(nuevaEdad) {
    this.age = nuevaEdad;
  },
};

console.log("Caso como propiedad: ", persona2.NombreCompleto);
console.log("Caso como propiedad: ", persona2.ObtenerEdad);

persona2.actualizarEdad = 25;
console.log("Aculizando edad de persona 2 ....");
console.log("Caso como propiedad: ", persona2.ObtenerEdad);
