let quien = ["mi perro", "mi bebé", "el tío", "un vecino"];
let accion = ["comió", "rompió", "aplastó", "quemó"];
let objeto = ["mi tarea", "mi casa", "el auto"];
let cuando = [
  "mientras dormía",
  "en la madrugada",
  "cuando hacía ejercicio",
  "durante el almuerzo",
  "mientras estaba rezando"
];

function obtenerElementoAleatorio(array) {
  let indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio]; // Corregido aquí
}

function excusaRandom() {
  const randomQuien = obtenerElementoAleatorio(quien);
  const randomAccion = obtenerElementoAleatorio(accion);
  const randomObjeto = obtenerElementoAleatorio(objeto);
  const randomCuando = obtenerElementoAleatorio(cuando);

  return `${randomQuien} ${randomAccion} ${randomObjeto} ${randomCuando}.`;
}

window.onload = function() {
  const randomExcusa = excusaRandom();
  document.getElementById("excusa").innerText = randomExcusa;
};
