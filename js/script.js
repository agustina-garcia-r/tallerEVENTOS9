// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

const arrayfiltrado = strangeArray.filter((word) => typeof word === "string");

console.log(arrayfiltrado);

// const arrayfiltradoyordenado = arrayfiltrado.sort();
const arrayfiltradoyordenado = arrayfiltrado.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

console.log(arrayfiltradoyordenado);

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(arrayfiltradoyordenado) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  arrayfiltradoyordenado.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  showList(arrayfiltradoyordenado)
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
});
