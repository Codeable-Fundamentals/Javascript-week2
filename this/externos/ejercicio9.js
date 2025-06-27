// stand by:
// averiguar que esta pasando por dentro de JS
var length = 4;
function callback() {
  console.log("This: ", this);
  console.log("This. LENGTH: ", this.length);
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method() {
    //console.log("ARGS",arguments)
    //console.log("ARGS",typeof arguments)
    arguments[0]();
  },
};

object.method(callback, 1, 2);
