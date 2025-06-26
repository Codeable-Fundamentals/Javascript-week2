console.log("que es this?", this);

//console.log("Global 1 : ",global)

global.name = "jwaewgdfjhgsfhg";

//console.log("Global 2: ",global)

// function saludar() {
//   console.log(`Hola ${this.name}!`);
// }

const saludar = () => {
  console.log(`Hola ${this.name}!`);
};

saludar();
