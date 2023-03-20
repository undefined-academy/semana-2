/* Ejercicio 1 en JavaScript: Implementar una expresión para verificar si un valor es un objeto

Tomar en cuenta que: 
typeof(null) -> object

function: verifyType(myVar):
params: 
    myVar: a variable that is passed to the function, the user inputs the value
returns: the type of the parameter passed to the function
*/

function verifyType(myVar){
    if (typeof(myVar) === 'object' && myVar !== null){
        return "This variable is an object.";
    }
    return "This variable is a primitive";

}

let myVar = "one";
console.log(verifyType(myVar));
myVar = "1";
console.log(verifyType(myVar));
myVar = 1;
console.log(verifyType(myVar));
myVar = true;
console.log(verifyType(myVar));
myVar = [1, 2];
console.log(verifyType(myVar));
myVar = {"myVar" : 1}
console.log(verifyType(myVar));
myVar = null;
console.log(verifyType(myVar));

