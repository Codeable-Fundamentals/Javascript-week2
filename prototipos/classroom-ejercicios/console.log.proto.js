// let obj = {};
// console.log("Que saldra ?", obj.__proto__);
// console.log("Que saldra ?", typeof obj.__proto__);


let spiderman = {};
spiderman.__proto__.identidad = "Peter Parker";
 
let batman = {};
let profesora = {};
 
console.log(spiderman.identidad); // "Peter Parker"
console.log(batman.identidad); // "Peter Parker" 😅
console.log("Caso Contaminado:", profesora.identidad)