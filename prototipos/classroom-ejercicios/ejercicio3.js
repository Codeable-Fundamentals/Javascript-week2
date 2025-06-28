let humano = {
  especie: "Homo sapiens",
  raza: "Humano",
};

let mujer = {
  utero: true,
  embarazo: true,
};

let hombre = {
  fuerza: true,
  bellos: true,
};

mujer.__proto__ = humano;
hombre.__proto__ = humano;

console.log(mujer.raza)

