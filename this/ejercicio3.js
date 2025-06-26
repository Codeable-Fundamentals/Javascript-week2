function imprimeThis() {
  console.log(this); // Cuando declaramos la función no sabemos a quién apuntará `this`
}

const persona = {
  nombre: "Simon",
  imprimeThis: imprimeThis,
};

const auto = {
  marca: "Toyota",
  imprimeThis: imprimeThis,
};

const animal = {
  nombre: "perro",
  imprimeThis: imprimeThis,
};

const casa = {
  nombre: "de campo",
  material: "ladrillo", 
  imprimeThis: imprimeThis,
};
// Cuando ejecutamos las funciones se define `this`:

persona.imprimeThis(); // { nombre: "Simon", imprimeThis: function... }
auto.imprimeThis(); // { marca: "Toyota", imprimeThis: function... }
animal.imprimeThis();
