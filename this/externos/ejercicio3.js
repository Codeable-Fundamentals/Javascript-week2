const persona = {
  name: "Valeria",
  lastname: "delgado",
  edad: 21,
  email: "greciadm2596@gmail.com",
  isWomen: true,
  getFullName() {
    return `${this.name} ${this.lastname}`;
  },
};

console.log(persona["name"]); // Valeria
console.log(persona.name); // Valeria

const {  getFullName } = persona; // desestructuracion 
console.log("la nueva forma: ", persona.getFullName()) // Valeria
