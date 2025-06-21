let globalVar = 10;
 
function testScope(a) {
  let localVar = a + globalVar;
  return localVar;
}
 
console.log(testScope(5)); // 15


function suma(a, b, c) {
  return a + b + c;
}
 
console.log(suma(1, 2)); // NaN

