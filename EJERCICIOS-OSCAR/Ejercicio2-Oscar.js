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