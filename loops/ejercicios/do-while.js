
// Ejercicio: Pedir email hasta que contenga "@"
const prompt = require("prompt-sync")();
let email;
let flag  = null;
do { 
    email = prompt("Ingresa un email que tenga '@': "); 
    flag = email.includes("@");   
    console.log(flag)  
} while (!flag)
console.log(`El email ingresado es valido.`)
    

// Ejercicio 7: Pedir email hasta que contenga "@"
// tip: pueden buscar como pedir inputs, desde la consola o "terminal" al usuario
// function Ejercicio7() {
//     let letra = true
// do{
//     const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("¿Cuál es tu correo? ", 
//     function(correo) {
//     if ( correo.includes("@") ) {
//         console.log("Tu correo es:", correo);
//         rl.close();
//     } else {
//         console.log("Correo no válido. Intenta otra vez.\n");
//         rl.close();
//     }
// });
// break;
// }while(letra);}
