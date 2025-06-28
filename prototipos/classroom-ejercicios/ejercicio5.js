let pelicula = {
  esPersonaje: true,
};

let servivo = {
  respira: true,
};

let humano = {
  corazon: true,
};

let maryJean = {
  pelo: "rojo",
  /* Esto no se puede hacer*/
  // __proto__: humano,
  //__proto__: servivo,
};

maryJean.__proto__ = pelicula;
// maryJean.__proto__ = humano;
maryJean.__proto__ = servivo;

console.log("maryJean.respira: ", maryJean.respira); // ??
console.log("maryJean.esPersonaje: ", maryJean.esPersonaje); // ??

console.log("humano.pelo :", humano.pelo); // undefined
console.log("maryJean.pelo: ", maryJean.pelo); // rojo

console.log("humano.corazon: ", humano.corazon); // true
console.log("maryJean.corazon: ", maryJean.corazon); // true

console.log("humano.cola: ", humano.cola); // undefined
console.log("maryJean.cola: ", maryJean.cola); // undefined
