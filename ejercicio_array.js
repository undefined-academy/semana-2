/* Segundo ejercicio. Clase 2, semana 2. 

¿Cómo puedo implementar una expresión para verificar su un valor es un array? 

function: 
    arrayVerify(myVar): La función utiliza condicionales para verificar el tipo de myVar y regresa un mensaje si es un array. 

params: 
    myVar: La variable que sospechamos que puede o no ser un array

returns: 
    boolean: Un booleano true or false que nos dice si myVvar es o no es un array.

*/

// Método 1: Utilizando Array.isArray()

function arrayVerify(myVar){
    return Array.isArray(myVar);
}

console.log(arrayVerify([1, 2, 3, 4, 5]));
console.log(arrayVerify({name: "Victor", age: 28}));
console.log(arrayVerify("This is not an array"));


// Método 2: Utilizando instanceof Array

function arrayVerify(myVar){
    return myVar instanceof Array;
}

console.log(arrayVerify([1, 2, 3, 4, 5]));
console.log(arrayVerify({name: "Victor", age: 28}));
console.log(arrayVerify("This is not an array"));