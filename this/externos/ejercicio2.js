function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}

const cat = new Pet("Fluffy");
console.log("Gato y sus propiedades: ",cat)

console.log(cat.getName()); // What is logged? Fluffy

const { getName } = cat;
console.log(getName()); // What is logged? Fluffy
