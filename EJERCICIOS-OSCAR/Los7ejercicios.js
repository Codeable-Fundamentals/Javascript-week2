console.log("--------EJERCICIOS CON FOR--------\n")
//-------------------------------------------------------------------------------------------------

// Ejercicio 1: Contar vocales en una palabra usando FOR
// Pedir palabra al usuario y contar cuántas vocales tiene
// Vocales: a, e, i, o, u (considerar mayúsculas y minúsculas)

function Ejercicio1(){let palabra = "oscar"; 
let indicadorDeVocales = 0;

for (let vocal = 0; vocal < palabra.length; vocal++) {
    let letra = palabra[vocal];

    switch (letra) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            indicadorDeVocales++;
            break;

    }
}

console.log("La palabra tiene " + indicadorDeVocales + " vocales.");}

//------------
//Ejercicio1()
//------------

//-------------------------------------------------------------------------------------------------

// Ejercicio 2: Verificar si un número es primo usando FOR
// Un número primo solo es divisible por 1 y por sí mismo

function Ejercicio2(){console.log("\n|----------OPCION 1----------|\n")
    
for(let numero = 0 ; numero <= 2; numero++) {
    if((((numero / numero) === 1) && ((numero / 1) === numero) && numero !== 1) && numero % 2 !== 0 && numero % 3 !== 0) {
    console.log(numero ,"es primo")
    }else if(numero === 2 || numero === 3 && numero !== 1 && numero !== 0 && numero % 2 !== 0){
    console.log(numero ,"es primo")
    }else{
    console.log(numero ,"no es primo")
    }
}

console.log("\n|----------OPCION 2----------|\n")

for(let numero = 0 ; numero <= 2; numero++) {
    if((((numero / numero) === 1) && ((numero / 1) === numero) && numero !== 1) && numero % 2 !== 0 && numero % 3 !== 0) {
    console.log(numero ,"es primo")
    }else{
        switch (numero) {
            case 2:
            case 3:
                console.log(numero, "es primo")
                break
            default:
                console.log(numero, "no es primo")
                break
        }
    }
}}

//------------
// Ejercicio2()
//------------

//-------------------------------------------------------------------------------------------------

// Ejercicio 3: Encontrar el número mayor usando FOR
function Ejercicio3(){let numeros = [23, 45, 12, 67, 34, 89, 5, 78];
// No uses Math.max(), hazlo con un bucle
let indicadorNumerico = numeros[0]
for(valor = 0; valor < numeros.length; valor++ ){
    let number = numeros[valor]
    
    switch(number > indicadorNumerico) {
    case true:
    indicadorNumerico = number;
    break
    case false:
    break
    }
}

console.log("\nEl número mayor es: " + indicadorNumerico);}

//------------
// Ejercicio3()
//------------

//-------------------------------------------------------------------------------------------------

// Ejercicio 4: Verificar si una palabra es palíndromo usando FOR
// Palíndromo se lee igual de izquierda a derecha y viceversa
// Ejemplos: "radar", "level", "civic"

function Ejercicio4() {

let word = "oscar"
let wordPolindro = true;

for(let p = 0; p <= word.length/2; p++){
    switch(word[p] === word[word.length-1-p]){
        case true:
            break;
        case false:
            wordPolindro = false
        p = word.length;
            break
    }
}
if(wordPolindro) {
        console.log("Es una palabra polindrona")
    }else{
        console.log("no es una palabra polindrona")
    }
}

//------------
// Ejercicio4()
//------------

//-------------------------------------------------------------------------------------------------

// Ejercicio 5: Usuario debe adivinar número del 1 al 10
function Ejercicio5() {let numeroSecreto = Math.floor(Math.random() * 10) + 2;
let usuario = 12

console.log(numeroSecreto)

if (usuario === numeroSecreto) {
    while(usuario === numeroSecreto){
        console.log(`Genial!!, adivinaste el numero secreto es ${numeroSecreto} y número es `)
        break;
    }
}else{
    console.log("Rayos casi, tu número fue", usuario, " el número secreto era", numeroSecreto)
}}


//------------
// Ejercicio5()
//------------

//-------------------------------------------------------------------------------------------------

// Ejercicio 6: Contar cuántos dígitos tiene un número
// Ejemplo: 12345 tiene 5 dígitos

function Ejercicio6() {let numero = 125548;
let digitos = 1;

if (numero === 0) {
    digitos = 1; 
} else {
    while (numero % 10 !== numero) {
        numero = numero / 10  ;
        digitos++;
    }
}

console.log("Es una palabra con " + digitos + " numeros")
}

//------------
// Ejercicio6()
//------------

//-------------------------------------------------------------------------------------------------

// Ejercicio 7: Pedir email hasta que contenga "@"
// tip: pueden buscar como pedir inputs, desde la consola o "terminal" al usuario

function Ejercicio7() {let letra = true

do{
    const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuál es tu correo? ", 
    function(correo) {
    if ( correo.includes("@") ) {
        console.log("Tu correo es:", correo);
        rl.close();
    } else {
        console.log("Correo no válido. Intenta otra vez.\n");
        rl.close();
    }
});
break;

}while(letra);
}

//------------
// Ejercicio7()
//------------

//-------------------------------------------------------------------------------------------------
