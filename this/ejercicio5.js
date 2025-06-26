// function arrancar() {
//   console.log(`vamos a arrancar al carro a ${this.tipo}`);
// }

const arrancar = () => {
  console.log(`vamos a arrancar al carro a ${this.tipo}`);
};

const auto_1 = {
  tipo: "Gas",
  arrancar: arrancar,
};

const auto_2 = {
  tipo: "Electrico",
  arrancar: arrancar,
};

auto_1.arrancar();
auto_2.arrancar();
