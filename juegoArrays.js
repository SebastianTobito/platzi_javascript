

function solution(arraySecreto) {
if (typeof arraySecreto[0] === "number") {
    return console.log(true);
} else{
    return console.log(false);
}

}

solution(["Huevo", "Gallina", "Vaca"]);
solution([1, "Gallina", "Vaca"]);