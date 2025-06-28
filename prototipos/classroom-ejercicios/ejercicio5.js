let humano = {
  corazon: true,
};

let maryJean = {
  pelo: "rojo",
  __proto__: humano,
};


console.log(humano.pelo); // undefined
console.log(maryJean.pelo); // rojo

console.log(humano.corazon); // true
console.log(maryJean.corazon); // true

console.log(humano.cola); // undefined
console.log(maryJean.cola); // undefined
