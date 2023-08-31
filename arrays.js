/*  ARRAYS
estructura de datos que permite almacenar un serie de datos localizados por indices y separados por comas, tipo objeto
*/

let frutas = ["Manzana", "Pera", "Limon", "Lulo", "Banano", "Cereza"];

console.log(frutas);

// typeof es un metodo que me dice de que tipo es mi variable
console.log("---Typeof---");
console.log(typeof frutas[1]);
// length es un metodo que me dice cuantos elementos tiene mi array
console.log("---Length---");
console.log(frutas.length);
console.log(frutas[5]);

//push le agrea un elemento al final
console.log("---Push---");
let masFrutas = frutas.push("Uvas")
console.log(frutas);
console.log(masFrutas);
console.log(frutas[6]);

// pop le borra el último elemento 
console.log("---Pop---");
let ultimo = frutas.pop();
console.log(frutas);
console.log(frutas[6]);

// unshift agrega un elemento al principio
console.log("---UnShift---");
let nuevaLongitud = frutas.unshift("Frambuesa");
console.log(nuevaLongitud);
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[6]);

// shift sirve para borrar el primer elemento

console.log("---Shift---");
let borrarFruta = frutas.shift("Frambuesa");
console.log(frutas);
console.log(borrarFruta);
console.log(frutas[6]);
console.log(frutas[0]);

// Indexof nos dice la posición del elemento en el array 
console.log("---InfexOf---");
let posicionFrutas = frutas.indexOf("Banano");
console.log(posicionFrutas);

//mutar un elemento a otro
console.log("---cambiar un elemento---");
frutas[2]= "Lima"; 

console.log(frutas);