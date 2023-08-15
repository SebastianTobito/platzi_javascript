let carro = {
    marca:"Chevrolet",
    modelo: "Sail",
    anio: 2019,
    color: "Negro",
    detalleDelCarro: function() {console.log(`Carro ${this.modelo} ${this.anio}`); }
    //detalleDelCarro: function() {
      //  console.log(`Carro ${this.modelo} ${this.anio}`);
  //  }
};

//console.log(carro);
console.log(carro.marca);
console.log(carro.anio);
console.log(carro.detalleDelCarro());