let spiderman = {
  poder: "telaraña",
};

let persona = {
  identidad: "Peter Parker",
};

let profesora  = {};

//spiderman.__proto__ = persona;
persona.__proto__ = spiderman;

console.log(spiderman.identidad); // undefined ---> "Peter Parker"
console.log(persona.poder); // undefined ---> "Peter Parker"
console.log("Caso sin contaminar:", profesora.identidad)
