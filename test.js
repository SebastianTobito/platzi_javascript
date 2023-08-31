/* 
variables y operaciones
1. Qué es una variable y para qué sirve ?
Es dato o un espacio en la memoria que sirve para almacenar datos que luego podrán ser requeridos y utilizados
2. Cuál es la diferencia entre declarar e inicializar una variable?
Declarar es cuando creamos una variable y le damos un nombre e inicializar es cuando especificamos el tipo de dato y el valor 
3. Cuál es la diferencia entre sumar números y concatenar strings?
Sumar número es una operación matematica y concatenar es juntar dos strings en una cadena de texto
4. Cuál es el operador que permite sumar o concatenar?
 + */

//determinar el nombre y el tipo de dato para almacenar en varaibles la siguiente información

let nombre = "Sebas"; //string
let apellido = "Tobito"; //string
let nombreDeUsuarioPlatzi = "sebastobito"; //string
let edad = 30; //number
let correo = "sebastobi@mail"; //string
let mayorEdad = true; //boolean
let dineroAhorrado = 15000; //number
let deudas = 7500; //number

//Calcular e impirmir el nombre completo (nombre y apellido) y dinero real(dinero ahorrado menos deudas)

console.log(`Hola me llamo ${nombre} ${apellido}`);

console.log(dineroAhorrado - deudas);

/* Funciones
1. Qué es una función?
Es un conjunto de acciones que creamos para hacer diferentes operaciones que podemos llegar a útilizar varias veces,
esto a partir de recibir diferentes datos. Todo eso con el fin de acortar procedimientos y código
2. Cuándo me sirve usar una funcion en mi código?
Sirve para automatizar procedimientos que son repetitivos y reducir el código 
3. Cuál es la diferencia entre parámetros y argumentos de una función?
Los parámetros son las variables que voy a llamar para usar en la funcion y los argumentos son los valores que le damos a esas
varaibles que llamamos  */
//pasar el codigo a funcion

const name = "juan david";
const lastName = "castro";
const completeName = name + " " + lastName; 
const nickName = "juandc";

function presentacion(completeName, nickName) {
  return console.log(
    "Hola mi nombre es " + completeName + "pero llamame " + nickName
  );
}
presentacion(completeName, nickName);

/* Condicionales 
1. Qué es un condicional?
Es un bloque de codigo que permite validar si una condicion se cumple, si se cumple ejecuta un codigo, si no se cumple ejecuta
otro código diferente.
2. Qué tipos de condiconales existen y cuales son sus diferencias
if,switch y ternario
el if nos ayuda verificar si una condicion se cumple, si no ponemos else if para evaluar más condionces y else si al final 
no se cumple ninguna, el switch hace lo mismo pero agrupa cada condición en un caso y la evalua y el ternario evalua la condición en
una sola línea de código.
3. Puedo combinar funciones y condicionales? 
Sí, se pueden usar en caso de que se cumpla una condición se ejecute una función o un bloque de código.
*/
// ejecutar el siguente código usando if, else y else if

const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo se pueden tomar cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar todos los cursos durante un año"
    );
}

if (tipoDeSuscripcion === "Free") {
  console.log("Solo se pueden tomar cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos durante un año");
} else {
  console.log("Tú y alguien más pueden tomar todos los cursos durante un año");
}


/* Ciclos
1. Qué es un ciclo?
Es cuando hacemos que un procedimiento se ejecute repetidas veces mientras cumpla una condición
2.Qué tipos de ciclos existen en Javascript?
For, While
3.Qué es un ciclo infinito y por qué es un problema?
Es cuando el ciclo no para de repetirse y puede hacer que el programa falle y nunca se detenga
4.Puedo mezclar ciclos y condiocinales?
Sí pueden hacer un ciclo mientras o hasta que se cumpla una condición */

// Pasar el siguente for a while
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//while
let h = 0;
while (h< 5) {
    h++;
    console.log("El valor de h es " + h);    
};
let o = 10;
while (o >= 2){
console.log("El valor de o es " + o);
--o;
};
//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
//Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar

/*let resultado =prompt("Cuánto es 2+2");

while (resultado !=4){
  resultado++;
  resultado =prompt("Cuánto es 2+2"); 
};

if (resultado == 4) {
  alert("felicidades");
}
*/
/* Listas 
1. Qué es un array?
Es una cadena de varios elementos
2. Qué es un objeto?
Es un elemente que puede tener diferentes caracteristicas
3.Cuándo es mejor usar objetos o arrays?
Es mejor usar objetos cuando tenemos un elemento con varias caracteristicas y los arrays, es mejor usarlos cuando tenemos
varios elementos
4.Puedo mezclar arrays con objetos o incluso objetos con arrays?
Sí, podemos tener muchos objetos en un arrays*/

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let frutas = ["Fresa", "Mora", "Cereza", "Frambuesa"]


let primeraFruta = frutas.find(function (fruta) {
  return fruta[0]
});

console.log(primeraFruta);
// Crea una función que pueda recibir cualquier array como parámetro e 
//imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
let todasLasFrutas = frutas.map(function (fruta) {
  return fruta;
});
console.log(todasLasFrutas);
// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
let auto ={
  marca:"Renaul",
  color:"Rojo",
  modelo:"Koleos",
  detalleDelCarro: function() {console.log(`Carro ${this.marca} ${this.color} ${this.modelo} `); }
};
auto.detalleDelCarro();