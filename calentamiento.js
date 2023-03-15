/* Primer ejercicio de calentamiento en JavaScript
author: Víctor Bocanegra
date: 14/03/2023

El objetivo del ejercicio es determinar una cantidad de monedas según el siguiente enunciado: Hugo, Paco y Luis tienen una cantidad desconocida de monedas cada uno.
Sabemos que Paco tiene el doble de monedas que Hugo y que Luis tiene 10 monedas más que Paco. Si los tres juntos tienen un total de 85 monedas. ¿Cuántas monedas tienecada uno?
 
Resolvemos el ejercicio con un ciclo While, que aumenta la variable Hugo hasta que se cumpla con la igualdad total === 85
*/

// Asignamos la cantidad de monedas de Hugo, este valor es el que tienes que resolver.
let hugo = 0;
// El trigger que usaremos para detener el while
let myBool = false;

// Con este while loop, incrementamos el valor en 1 hasta que se cumpla la igualdad. 
while (myBool === false) {


    // Calculamos la cantidad de monedas de Paco y Luis en función de Hugo
    let paco = 2 * hugo;
    let luis = paco + 10;


    // Sumamos las cantidades de monedas de los tres amigos 
    let total = hugo + paco + luis;
    if (total === 85) {
        console.log("Hugo " + hugo);
        console.log("Paco " + paco);
        console.log("Luis: " + luis);
        myBool = true;

    }
    hugo += 1;
}