console.log(miNombre);
var miNombre = "Diego"
   
// declarativas 

function laFuncion() {
    return 3;
}


//expresadas

let miFunction = function (a,b) {
    return a+b;
}

console.log(laFuncion());
console.log(miFunction(3,5));


function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Diego");


function sumar(c,d) {
    var resultado = c+d;
     return resultado;
}
console.log(sumar(7,4));

var contador = 1

contador += 2
contador -= 1
contador *= 5
contador /= 2

console.log(contador)

function solution(secreto) {
    return (secreto > 5)
  }
  console.log(solution(1));
  console.log(solution(5));
  console.log(solution(10));