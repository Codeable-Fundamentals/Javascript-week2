const object = {
  message: 'Hello, World!',
  logMessage: logMessage
};

function logMessage() {
  console.log(this.message); // "Hello, World!"
}

// How can you call logMessage function so that it logs "Hello, World!"
console.log(object.logMessage()); // "Hello, World!"