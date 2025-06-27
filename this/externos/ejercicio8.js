var length = 4;

//global.length = 10;

function callback() {
  //console.log("this???", this);
  //console.log("this.length", this.length);
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method(callback) {
    //console.log("Callback???", callback);
    //console.log("Callback??? 2", callback());
    callback();
  },
};

object.method(callback, 1, 2);
