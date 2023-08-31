let articulos = [
  {
    nombre: "bicicleta",
    costo: 1500
  },
  {
    nombre: "televisor",
    costo: 1000
  },
  {
    nombre: "libro",
    costo: 700
  },
  {
    nombre: "celular",
    costo: 900
  },
  {
    nombre: "computador",
    costo: 1800
  },
  {
    nombre: "teclado",
    costo: 500
  },
  {
    nombre: "audifonos",
    costo: 400
  },
];

let articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo<= 900
});

let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre 
});

let encontrarArticulo= articulos.find(function(articulo){
  return articulo.nombre === "televisor"
});

console.log("-------forEach--------");
articulos.forEach(function(articulo){
   console.log(articulo.costo);
})

let articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 300
})

console.log("-------Array de objetos--------");
console.log(articulos);
console.log("-------Filter--------");
console.log(articulosFiltrados);
console.log("-------Map--------");
console.log(nombreArticulos);
console.log("-------Find--------");
console.log(encontrarArticulo);
console.log("-------Some--------");
console.log(articulosBaratos);