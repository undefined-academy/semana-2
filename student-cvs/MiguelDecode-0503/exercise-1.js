// Hugo, Paco y Luis tienen una cantidad desconocida de monedas cada uno.

// Sabemos que Paco tiene el doble de monedas que Hugo y que Luis tiene 10 monedas más que Paco.

// Si los tres juntos tienen un total de 85 monedas.

// Cuántas monedas tiene cada uno?

let hugo;
let paco;
let luis;
let total = 85;

// Calculate the part of Hugo in function of the total amount of coins
const calculateHugo = (amount) => {
  // Total = hugo + paco + luis;
  // 85 = x + 2 * x + 2 * x + 10
  // 85 = x + 2x + 2x + 10
  // 85 - 10 = x + 2x + 2x
  // 75 = 5x
  // x = 75 / 5
  // x = 15

  hugo = (amount - 10) / 5;
  paco = hugo * 2;
  luis = paco + 10;

  console.log("Hugo: " + hugo);
  console.log("Paco: " + paco);
  console.log("Luis: " + luis);
};

// calculateHugo(total);

// CHECK IF A VARIABLE IS AN OBJECT

const checkIfIsObject = (obj) => {
  if (!(typeof obj === "object")) return false;
  if (!(obj instanceof Object)) return false;
  return true;
};

// console.log(checkIfIsObject(null));
// console.log(checkIfIsObject([1, 2, 3]));
// console.log(checkIfIsObject({ name: "Miguel", surname: "Decode" }));

