// SOLUCIÓN COMPLETA: Ejercicio 1 - Crear un Objeto Usuario

const usuario = {
   // Propiedades del objeto
   nombre: "Juan",
   email: "juan@email.com",
   edad: 25,
   
   // Método que usa 'this' para acceder a las propiedades del objeto
   saludar: function() {
       console.log(`Hola, soy ${this.nombre} y mi email es ${this.email}`);
   },
   
   // Método que modifica una propiedad usando 'this'
   cumplirAnios: function() {
       this.edad = this.edad + 1;  // o también: this.edad++;
       console.log(`${this.nombre} ahora tiene ${this.edad} años`);
   },
   
   // Método que recibe un parámetro y actualiza una propiedad
   cambiarEmail: function(nuevoEmail) {
       this.email = nuevoEmail;
   }
};

// PRUEBAS
usuario.saludar();                          // Hola, soy Juan y mi email es juan@email.com
usuario.cumplirAnios();                     // Juan ahora tiene 26 años
usuario.cambiarEmail("nuevo@email.com");
usuario.saludar();                          // Hola, soy Juan y mi email es nuevo@email.com

// PUNTOS CLAVE SOBRE 'this':
// 1. 'this.nombre' se refiere a la propiedad 'nombre' del objeto 'usuario'
// 2. 'this.email' se refiere a la propiedad 'email' del objeto 'usuario'
// 3. 'this.edad' nos permite leer Y modificar la edad del objeto
// 4. Cuando llamamos usuario.saludar(), 'this' dentro del método = usuario
// 5. 'this' nos permite acceder y modificar las propiedades desde los métodos