let humano = {
  corazon: true,
  pelo: "natural",
};

let maryJean = {
  pelo: "rojo",
};

maryJean.__proto__ = humano;

console.log(humano.pelo); // "natural"
console.log(maryJean.pelo); // "rojo"

console.log(humano.hasOwnProperty('pelo')); // true
console.log(maryJean.hasOwnProperty('pelo')); // true