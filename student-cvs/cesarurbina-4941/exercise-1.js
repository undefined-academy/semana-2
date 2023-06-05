// definimos el objeto:
const people = {
  name: "cesar",
  lastname: "urbiña",
  age: 24,
  country: "Colombia",
};

// hago uso de operador Object.prototype.toString.call(), ahora, este tambien puede arrojar true si verificamos un array ya que se define como un object, por lo que se agrega una condición extra con el operador lógico AND (&&): !Array.isArray(people) (Esta comparación arrojará true si y solo si "Object.prototype.toString.call(people)" es true y la negación de "Array.isArray(people)" es false)
const esObjeto =
  Object.prototype.toString.call(people) === "[object Object]" &&
  !Array.isArray(people);

console.log(esObjeto); // true
