const object = {
  message: "Hello, World humans!",

  getMessage() {
    const message = "Hello, Earth!";

    console.log(this);

    return this.message; // "Hello, World humans!
  },
};

const object2 = {
  message: "Hola desde obj 2!",
  getMessage() {
    const message = "Hola desde dentro de la funcion";

    return this.message; // Hola desde obj 2!
  },
};

console.log(object.getMessage());
