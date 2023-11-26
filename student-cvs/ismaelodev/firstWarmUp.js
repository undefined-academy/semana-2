// We assign the number of Hugo coins, this value is the one you have to solve:
let hugo = 15;
// We calculate the number of coins of Paco and Luis based on Hugo:
let paco = 2 * hugo;
let luis = paco + 10;

// We add the amounts of coins of the three friends
let total = hugo + paco + luis;

if (total === 85) {
  console.log("Hugo: " + hugo);
  console.log("Paco: " + paco);
  console.log("Luis: " + luis);
}
