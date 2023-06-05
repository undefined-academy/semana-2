// Escribir un objeto "humano" que te represente:
const human = {
  name: "cesar",
  blonde: false,
  isMarried: false,
  isStudying: true,
};

// ¿Cómo puedo implementar una expresión para verificar si un valor es un array?

// definimos el array:

const fruits = ["Apple", "Banana", "Orange"];

// Hago uso del método Array.isArray() y de la estructura de control if-else para la verificación:

if (Array.isArray(fruits)) {
  console.log("Es un array");
} else {
  console.log("No es un array");
}
