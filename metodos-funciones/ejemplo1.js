const calculadora = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
};

let result = calculadora.sumar(2, 3);

let result2 = calculadora.sumar(5, 6);

console.log(result);
console.log(result2);

function horaDeDormir(hora) {
  if (hora > 10) {
    return "estoy durmiendo";
  }
  return "aun estoy depierto";
}

const persona = {
  dormir: horaDeDormir,
};

let resp = persona.dormir(11)
console.log("Ya es hora de dormir ?", resp)

let resp2 = horaDeDormir(9)
console.log("Ya es hora de dormir? ", resp2)