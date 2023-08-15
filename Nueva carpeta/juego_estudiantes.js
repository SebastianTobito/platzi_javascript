

function solution(estudiantes, deathCount, nuevo) {
  while (deathCount > 0) {
    estudiantes.pop();
    deathCount--;
  }
   estudiantes.push(nuevo);
   return estudiantes;
}
console.log(solution(["Nico", "Zule"], 0, "Santi"));
console.log(solution(["juan", "juanita", "Daniela"], 1, "julian"));
console.log(solution(["Nath", "Luisa", "Noru"], 2, "Cami"));