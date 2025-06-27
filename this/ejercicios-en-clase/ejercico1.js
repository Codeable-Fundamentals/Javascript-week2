// Ejercicio 1: Crear un Objeto Usuario
// Descripción: Crea un objeto llamado usuario que contenga información personal y métodos para interactuar con ella.
// Lo que tienes que hacer:

const { serialize } = require("v8");

// Crea un objeto usuario con las propiedades: nombre, email, edad
// Agrega un método saludar() que imprima: "Hola, soy [nombre] y mi email es [email]"
// Agrega un método cumplirAnios() que incremente la edad en 1 y muestre: "[nombre] ahora tiene [edad] años"
// Agrega un método cambiarEmail(nuevoEmail) que actualice el email


// Código base:
const usuario = {
    // Completa aquí
    nombre: "Javier",
    apellido: "Cano",
    edad: 25,
    pais: "Peru",
    email: "Correo@amz.com",
    presentar(){
        console.log(`Los datos del usuario son:`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Pais: ${this.pais}`);
    },
    saludar(){
        console.log(`Hola soy ${this.nombre} y mi email es: ${this.email}`);
    },
    cumplirAnios(){
        this.edad++;
        console.log(`${this.nombre} ahora tiene ${this.edad} años`);
    },
    cambiarEmail(correoNuevo){
        this.email = correoNuevo;
        console.log(`El nuevo email es: ${this.email}`);
    }
};

// Pruebas
usuario.saludar();
usuario.cumplirAnios();
usuario.cambiarEmail("nuevo@email.com");
usuario.presentar();

// Hola, soy Juan y mi email es juan@email.com
// Juan ahora tiene 26 años
// Hola, soy Juan y mi email es nuevo@email.com

