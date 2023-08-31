function auto(marca, modelo, anio, color) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.color = color;
}
let autos = [];

for (autos; autos < 7; autos++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var anio = prompt("Ingresa el año del auto");
    let color = prompt("Ingrese el color del auto")

    autos.push(new auto (marca, modelo, anio, color));
}


for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
  }

