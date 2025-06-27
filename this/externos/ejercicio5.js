const object = {
  message: "Hello, World!",

  logMessage() {
    console.log("This: ", this);
    console.log("aqui:", this.message); // What is logged?
    return this.message; // "Hello, World!"
  },
};

console.log("----- console.log(object.logMessage()) -----");
console.log(object.logMessage());

console.log("----- setTimeout(object.logMessage, 1000) -----");
setTimeout(object.logMessage, 1000);

