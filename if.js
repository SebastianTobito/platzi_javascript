// reglas para validar si algo es verdadero o falso

//if

if ( false ) {
  console.log("Hola");
}
else {
    console.log("soy falso");
}
// ejemplo 
 
let edad = 16;

if(edad === 18){
    console.log("puedes votar, disfruta tu primera vez");
} else if (edad < 18){
   console.log("No puedes votar");
}else{
    console.log("Puedes votar de nuevo");
}

// ternario 

//condition ? true : false;

let numero = 2;

let resultado = numero === 1 ? "Si soy un 1" : "Nos soy 1"

console.log(resultado);
