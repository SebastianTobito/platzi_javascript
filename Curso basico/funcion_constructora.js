function carro(marca, modelo, anio, color) {
   this.marca = marca;
   this.modelo = modelo;
   this.anio = anio;
   this.color = color;
};

let carroNuevo = new carro("Toyota", "Corolla", 2018, "Blanco");
let carroNuevo2 = new carro("Renaul", "Koleos", 2021, "Azul");
let carroNuevo3 = new carro("Ford", "Fiesta", 2023, "Verde");
console.log(carroNuevo);
console.log(carroNuevo2);
console.log(carroNuevo3);


function estudiante(nombre, apellido, grado, edad){
  this.nombre  = nombre;
  this.apellido = apellido;
  this.grado = grado;
  this.edad = edad;  
};

let nuevoEstudiante = new estudiante ("Juan", "Perez", 4, 9);
let nuevoEstudiante1 = new estudiante ("Camilo", "Lopez", 8, 14);
let nuevoEstudiante2 = new estudiante ("Laura", "Carter", 1, 6);

console.log(nuevoEstudiante);
console.log(nuevoEstudiante1);
console.log(nuevoEstudiante2);