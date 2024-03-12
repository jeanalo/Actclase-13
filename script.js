const numeros = [3, 1, 1, 10, 5, 7, 2];

let suma = 0;
let Mayornumber = numeros [0];
let Menornumber = numeros [0];

for (laPosicion of numeros){
suma = suma + laPosicion;
if (laPosicion > Mayornumber){
    Mayornumber = laPosicion;
}

if (laPosicion < Menornumber) {
    Menornumber = laPosicion;
}
}

console.log(suma, Menornumber,Mayornumber);

const parrafino = document.querySelector ("#parrafino");
console.log(parrafino);
parrafino.innerHTML = "La suma total es " +  suma + " El Numero menor es " + Menornumber+ " Y el Numero mayor es " + Mayornumber;

parrafino.classList.add("parrafino--color", "parrafino--size");