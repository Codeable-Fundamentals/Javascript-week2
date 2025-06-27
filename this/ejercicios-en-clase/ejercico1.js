// Ejercicio 1: Crear un Objeto Usuario
// Descripción: Crea un objeto llamado usuario que contenga información personal y métodos para interactuar con ella.
// Lo que tienes que hacer:

// Crea un objeto usuario con las propiedades: nombre, email, edad
// Agrega un método saludar() que imprima: "Hola, soy [nombre] y mi email es [email]"
// Agrega un método cumplirAnios() que incremente la edad en 1 y muestre: "[nombre] ahora tiene [edad] años"
// Agrega un método cambiarEmail(nuevoEmail) que actualice el email

// Código base:
const usuario = {
    // Completa aquí
    nombre: "oscar",
    email: "correodeoscar097@gmail.com",
    edad: 25,
    saludar() {
        console.log(`Hola, soy ${this.nombre} y mi email es ${this.email}`);
    },
    cumplirAños() {
        console.log(`${this.nombre} ahora tiene ${this.edad+1} años`);
    },
    cambiarEmail(nuevoEmail){
        this.email = nuevoEmail;
    }
};


// Pruebas
usuario.saludar();
usuario.cumplirAños();
usuario.cambiarEmail("nuevo@email.com");
usuario.saludar();


// Hola, soy Juan y mi email es juan@email.com
// Juan ahora tiene 26 años
// Hola, soy Juan y mi email es nuevo@email.com