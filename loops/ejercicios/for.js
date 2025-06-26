// Ejercicio: Contar vocales en una palabra usando FOR
// Pedir palabra al usuario y contar cuántas vocales tiene
// Vocales: a, e, i, o, u (considerar mayúsculas y minúsculas)
const prompt = require("prompt-sync")();

function conteoVocales(){
  const word = prompt("Escribe una palabra: "); 

  let contar = 0
  for (let i=0;i<word.length; i++) {
      const letra = word[i].toLocaleLowerCase();
      console.log(letra)
      if(
        letra[i]=="a"||
        letra[i]=="e"||
        letra[i]=="i"||
        letra[i]=="o"||
        letra[i]=="u"
      ){
          contar++;
          console.log("sumo +1")
      }
  }
  console.log(`La word tiene ${contar} vocales`)
}
// Ejercicio: Verificar si un número es primo usando FOR
// Un número primo solo es divisible por 1 y por sí mismo


// Solicito el numero al usuario
function esPrimo(){
  const ingreso = prompt("Digita un numero: ");
  let Numero = Number(ingreso);
  if (isNaN(Numero) || Numero < 1) {
    console.log("Por favor, ingresa un número válido mayor a 0.");
  } else {
    let esPrimo = true;
    if (Numero === 1) {
      esPrimo = false;
    } else {
      for (let i = 2; i < Numero; i++) {
        if (Numero % i === 0) {
          esPrimo = false;
          break;
        }
      }
    }
    if (esPrimo) {
      console.log(`${Numero} es un número primo.`);
    } else {
      console.log(`${Numero} No es un número primo.`);
    }
  }
}


// Ejercicio: Encontrar el número mayor usando FOR
function mayor(){
let numeros = [23, 45, 12, 67, 34, 89, 5, 78];
//No uses Math.max(), hazlo con un bucle
let Mayor;
for (let x=0;x<numeros.length-1;x++){
    if (numeros[x]>numeros[x+1]){
      Mayor=numeros[x];
    }
}
console.log(`El numero mayor del arreglo es ${Mayor}`)
}
// Ejercicio: Verificar si una palabra es palíndromo usando FOR
// Palíndromo se lee igual de izquierda a derecha y viceversa
// Ejemplos: "radar", "level", "civic"
function Palindromo(){
  let palabra = prompt("Ingresa palabra a verificar: ")
  let medio = (palabra.length)/2
  console.log(medio)
  let cont=0;
  for (let x=0,y=palabra.length-1;x<medio;x++,y--){
    if (x===y){
      cont++;
    }
    if (cont){

    }
  }  
}


   
//while
function adivinaNumero(){
    
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let res = +prompt("Adivina el numero que tengo en mente: ")
    while (res !== numeroSecreto){
        res = +prompt("Fallaste, intentalo de nuevo: ")
    }
    console.log(`Acertaste el numero!`)
}

function contarDigitos(){
    let numero = +prompt("Ingresa un numero para contar sus digitos: ")
    let contador = 0;
    while (contador < numero.toString().length){
        contador++;
    }
    console.log(`El numero ingresado tiene ${contador} digitos`)
}

//do-while
function contieneArroba(){
  let email;
  let flag  = null;

  do { 
      email = prompt("Ingresa un email que tenga '@': "); 
      flag = email.includes("@");   
      console.log(flag)  
  } while (!flag)
}

//for functions
// conteoVocales();
// esPrimo();
// mayor();
Palindromo();

//while functions
//contarDigitos()
//adivinaNumero()

//do-while function
//contieneArroba()