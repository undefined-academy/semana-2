// Check if a variable is an object:
let objectVariable = {
  name: "Ismael",
  age: "28",
};

let normalVariable = "Hello World!";
let numberVariable = 10;

function isObject(param) {
  if (typeof param === "object" && param !== null) {
    return console.log("The data type is: " + typeof param + " ✅" + "\n");
  } else {
    return console.log("The data type is: " + typeof param + " ❌" + "\n");
  }
}

isObject(objectVariable);
isObject(normalVariable);
isObject(numberVariable);
