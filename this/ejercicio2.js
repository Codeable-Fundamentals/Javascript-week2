const persona = {
  nombre: "Simon",
  imprimeThis() {
    console.log(this);
  },
};

persona.imprimeThis(); //??

// respuesta : { nombre: 'Simon', imprimeThis: [Function: imprimeThis] }

//  apuntará al objeto que invocó el contexto de ejecución.(This)
