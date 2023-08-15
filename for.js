// for o loops son ciclos que se repetin mientras se cumpla una condición 

let estudiantes =["Juan", "Maria", "Sergio", "Andrea", "Camilo"]

function saludarEstudiantes(estudiantes) {
    console.log(`Hola, ${estudiantes}`);
}

/*
Puede usarse index o simplemente i para abreviar (poner i es lo más común)
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

for(i = 0; i< estudiantes.length; i++){
   saludarEstudiantes(estudiantes [i]);
}


for (let estudiante of estudiantes){
  saludarEstudiantes(estudiante);
}