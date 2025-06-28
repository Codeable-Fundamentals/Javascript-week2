let ser_vivo = {
  tiene_celulas: "obvio! tengo celulas!",
};

let humano = {
  corazon: true,
  numExtremidades: 4,
};

let maryJean = {
  pelo: "rojo",
};

console.log("Sin __proto__: ", maryJean.numExtremidades); // undefined

/* __proto__ no es un propdiedad */
/* sino un setter de una propiedad oculta llamada [[Prototype]] */
humano.__proto__ = ser_vivo;
maryJean.__proto__ = humano;

console.log("Con __proto__: ", maryJean.numExtremidades);
console.log("Con __proto__: ", maryJean.tiene_celulas);
