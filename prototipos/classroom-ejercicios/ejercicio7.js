let humano = {
  corazon: true
};
 
let maryJean = {
  pelo: "rojo"
};
 
maryJean.__proto__ = humano
 
// * antes de asignación
 
maryJean.corazon = "ksdhjgbsd";
 
// ** después de asignación
 
console.log(humano.corazon); // ?
console.log(maryJean.corazon); // ?