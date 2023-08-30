let opcion1 = "papel";
let opcion2 = "tijera";
let opcion3 = "piedra";

function juego(jugador, compu) {
  switch (true) {
    case jugador === opcion3 && compu === opcion2:
      console.log("piedra le gana a tijera, gana usuario");
      break;
    case jugador === opcion2 && compu === opcion3:
      console.log("piedra le gana a tijera, gana compu");
      break;
    case jugador === opcion2 && compu === opcion1:
      console.log("Tijera le gana a papel, gana usuario");
      break;
    case jugador === opcion1 && compu === opcion2:
      console.log("Tijera le gana a papel, gana compu");
      break;
    case jugador === opcion1 && compu === opcion3:
      console.log("Papel le gana a piedra, gana usuario");
      break;
    case jugador === opcion3 && compu === opcion1:
      console.log("Papel le gana a piedra, gana compu");
      break;
    default:
      console.log("Empate");
  }
}
juego(opcion1, opcion2);

function solution(article) {
  if (article === "computadora") {
    console.log("Con mi computadora puedo programar usando JavaScript");
  } else if (article === "celular") {
    console.log("En mi celular puedo aprender usando la app de Platzi");
  } else if (article === "cable") {
    console.log("¡Hay un cable en mi bota!");
  } else {
    console.log("Artículo no encontrado");
  }
}

solution("computadora");
solution("celular");
solution("cable");
solution("ornitorrinco");
