let deportistas = ["futbolistas", "tenistas", "rugbista", "atletas", "patinadores"];

function nombrarDeportistas(deportistas) {
    console.log(`Bienvenidos  ${deportistas}`);
}
while (deportistas.length > 0) {
    console.log(deportistas);
    let deportista = deportistas.shift();
    nombrarDeportistas(deportista);
}