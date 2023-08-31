let opcion1 = "papel";
let opcion2 = "tijera";
let opcion3 = "piedra";

function juego(jugador, compu) {
  if (jugador != compu) {
    if (jugador === opcion3 && compu === opcion2) {
      console.log("piedra le gana a tijera, gana usuario");
    } else if (jugador === opcion2 && compu === opcion3) {
      console.log("piedra le gana a tijera, gana compu");
    } else if (jugador === opcion2 && compu === opcion1) {
      console.log("Tijera le gana a papel, gana usuario");
    } else if (jugador === opcion1 && compu === opcion2) {
      console.log("Tijera le gana a papel, gana compu");
    } else if (jugador === opcion1 && compu === opcion3) {
      console.log("Papel le gana a piedra, gana usuario");
    } else if (jugador === opcion3 && compu === opcion1) {
      console.log("Papel le gana a piedra, gana compu");
    }
  } else {
    console.log("empate");
  }
}

juego();
