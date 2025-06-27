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
  preferenciadecomidas: "vegana",
  email: "test@test.com",
  phone: "99999999",
  get NombreCompleto() {
    return this.nombre + " " + this.apellido + "!";
  },
  get ObtenerEdad() {
    return this.age;
  },
  set actualizarEdad(nuevaEdad) {
    if (typeof nuevaEdad !== "number" || nuevaEdad > 100) {
      console.log("------------La edad neuva es invalida----------");
      return;
    }
    this.age = nuevaEdad;
  },
  set actualizarDatosDeContacto(emial) {
    this.email = emial;
  },
};

// persona2.actualizarDatosDeContacto="grecia@gmail.com" "634561893"


// console.log("Caso como propiedad: ", persona2.NombreCompleto);
// console.log("Caso como propiedad: ", persona2.ObtenerEdad);


// persona2.actualizarEdad = 134;
// console.log("Aculizando edad de persona 2 ....");
// console.log("Caso como propiedad: ", persona2.ObtenerEdad);


// console.log("Caso como propiedad: ", persona2.ObtenerEdad);


