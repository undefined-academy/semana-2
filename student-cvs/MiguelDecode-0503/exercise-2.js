// Write and object human that represent you.

const me = {
  name: "Miguel",
  surname: "Decode",
  country: "spain",
};

// CHECK IF A VARIABLE IS AN ARRAY

const checkIfIsArray = (arr) => {
  if (!(arr instanceof Array)) return false;
  return true;
};

console.log(checkIfIsArray(null));
console.log(checkIfIsArray("Miguel"));
console.log(checkIfIsArray(39));
console.log(checkIfIsArray({ name: "Miguel", surname: "Decode" }));

console.log(checkIfIsArray([1, 2, 3]));
