// Ejercicio: Usuario debe adivinar número del 1 al 10
const prompt = require("prompt-sync")();
function adivinaNumero(){
    
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let res = +prompt("Adivina el numero que tengo en mente: ")
    while (res !== numeroSecreto){
        res = +prompt("Fallaste, intentalo de nuevo: ")
    }
    console.log(`Acertaste el numero!`)
}
// Ejercicio: Contar cuántos dígitos tiene un número
// Ejemplo: 12345 tiene 5 dígitos
function contarDigitos(){
    let numero = +prompt("Ingresa un numero para contar sus digitos: ")
    let contador = 0;
    while (contador < numero.toString().length){
        contador++;
    }
    console.log(`El numero ingresado tiene ${contador} digitos`)
}
//contarDigitos()
//adivinaNumero()