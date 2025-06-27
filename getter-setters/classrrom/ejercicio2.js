// Intenta crear un objeto cuentaBancaria que tiene un saldo de 1000.
// Utiliza getters y setters para asegurarte de que el saldo siempre se "muestre"
// con un signo de dólar por delante y nunca pueda tener un valor menor a 0.

const cuentaBancaria = {
  // usa getter y setter para la propiedad `saldo`
  saldo: 1000,
  get obtenerSaldo() {
    return `$ ${this.saldo}`;
  },
  set actulizarSaldo(monto) {
    if (typeof monto !== "number" || monto === NaN) {
      console.log("El monto tiene que ser un numero valido");
      return;
    }

    if (monto < 0) {
      console.log("El monto no puede ser negativo!!");
      return;
    }

    this.saldo = monto;
  },
};

console.log(cuentaBancaria.saldo); // "$1000"
cuentaBancaria.actulizarSaldo = 80;
 console.log(cuentaBancaria.saldo); // "$80"
cuentaBancaria.actulizarSaldo = -100; // no tiene efecto
console.log(cuentaBancaria.saldo); // "$80"
