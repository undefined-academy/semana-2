// Check if a variable is an array:
let arrayVariable = ["Hello my name", "is Ismael"];

let objectVariable = {
  name: "Ismael",
  age: "28",
};

let normalVariable = "Hello World!";
let numberVariable = 10;

function isArray(param) {
  if (Array.isArray(param) && param !== null) {
    return console.log("The data type is an Array " + " ✅" + "\n");
  } else {
    return console.log("The data type is: " + typeof param + " ❌" + "\n");
  }
}

isArray(arrayVariable);
isArray(objectVariable);
isArray(normalVariable);
isArray(numberVariable);
