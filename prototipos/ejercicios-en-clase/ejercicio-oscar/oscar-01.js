let animal = {
  tipo : "''animal'' (heredado)",
  respirar() {
    return "''respirando''";
  }
}
let perro = {
  raza: "''canino''",
  ladrar() {
    return "''guau guau''";

  }
};
perro.__proto__ = animal;

console.log(perro.raza);      // "canino"
console.log(perro.tipo);      // "animal" (heredado)
console.log(perro.ladrar());  // "guau guau"
console.log(perro.respirar());