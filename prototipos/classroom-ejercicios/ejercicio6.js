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
