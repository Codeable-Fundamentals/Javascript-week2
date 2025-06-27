let persona = {
  nombre: "Sarah",
  pais: "Nigeria",
  trabajo: "Desarrollador",
  identidad: {
    tipo_de_documento: "DNI",
    numero: "123456789",
    fecha_de_nacimiento: "1990-01-01",
  },
  saludar: function () {
    return `Hola, mi nombre es ${this.nombre}`;
  },
};

// Desestructuración
let { nombre, pais, trabajo, identidad, saludar } = persona;

// console.log(typeof nombre, nombre); // "Sarah"
// console.log(typeof pais, pais); // "Nigeria"
// console.log(typeof trabajo, trabajo); // "Desarrollador"
// console.log(typeof identidad, identidad); // Object
// console.log(typeof saludar, saludar()); // "Hola, mi nombre es Sarah"
console.log({ nombre, pais, trabajo, identidad, saludar: saludar() });
