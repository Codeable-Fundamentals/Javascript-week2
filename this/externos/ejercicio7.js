const object = {
  who: "World",

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    // es un arrow function
    console.log("this dentro de la funcion : ", this);
    this.who = NaN;
    return `Goodbye, ${this.who}!`;
  },
};

console.log(object.greet()); // What is logged?
console.log(object.farewell()); // What is logged?
