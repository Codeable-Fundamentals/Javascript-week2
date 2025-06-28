// Ejercicio 1: Creando objetos con __proto__
// Crea dos objetos usando __proto__ para establecer herencia:

// Crea un objeto animal con una propiedad tipo: "animal" y un método respirar() que retorne "respirando"
// Crea un objeto perro que tenga como prototipo a animal
// Agrega al objeto perro una propiedad raza: "canino" y un método ladrar() que retorne "guau guau"
// Prueba accediendo a todas las propiedades y métodos desde perro

// Tu código aquí

const animal = {
  tipo: "animal",
  respirar() {
    return "respirando";
  },
};

const perro = {
  raza: "canino",
  ladrar() {
    return "guau guau";
  },
  // __proto__: animal, // otra forma
};

perro.__proto__ = animal;
// Casos de prueba - tu código debe producir estos resultados:
console.log(perro.raza); // Debe mostrar: "canino"
console.log(perro.tipo); // Debe mostrar: "animal"
console.log(perro.ladrar()); // Debe mostrar: "guau guau"
console.log(perro.respirar()); // Debe mostrar: "respirando"
