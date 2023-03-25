### Asignaciones | Semana 2 | Clases 1,2,3 y 4

##### <u>CLASE 1</u>
<details>
<summary>
Calentamiento
</summary>
Hugo, Paco y Luis tienen una cantidad
desconocida de monedas cada uno.
Sabemos que Paco tiene el doble de
monedas que Hugo y que Luis tiene 10
monedas más que Paco.
Si los tres juntos tienen un total de 85
monedas.
¿Cuántas monedas tiene
cada uno?

```javascript
// Asignamos la cantidad de
monedas de Hugo, este valor es el
que tienes que resolver.
let hugo = 0;
// Calculamos la cantidad de
monedas de Paco y Luis en función
de Hugo
let paco = 2 * hugo;
let luis = paco + 10;
// Sumamos las cantidades de
monedas de los tres amigos
let total = hugo + paco + luis;
if (total === 85) {
 console.log("Hugo: " + hugo)
 console.log("Paco: " + paco)
 console.log("Luis: " + luis)
}
```

**Solución:**

Como el total debe ser igual a 85, podemos resolver la ecuación:

`hugo + 2*hugo + (2*hugo + 10) = 85`
Simplificando, tenemos:
`5*hugo + 10 = 85`
Despejando hugo, obtenemos:
`hugo = (85 - 10) / 5`

**Solución:**

```javascript
let hugo = (85 - 10) / 5; // hugo = 15
let paco = 2 * hugo; // paco = 30
let luis = paco + 10; // luis = 40
let total = hugo + paco + luis; // total = 85

console.log("Hugo: " + hugo); // output: "Hugo: 15"
console.log("Paco: " + paco); // output: "Paco: 30"
console.log("Luis: " + luis); // output: "Luis: 40"
```



</details>

<details>
<summary>
Verificar si un valor es un objeto.
</summary>
¿Cómo puedo implementar una expresión para verificar si un valor es un objeto?
Ejemplo:
```javascript
typeof obj === "objet"
```
**Solución**:

Se puede verificar si un valor es un objeto utilizando la función o método typeof.
```javascript
if (typeof valor === 'object' && valor !== null) {
  // valor es un objeto
} else {
  // valor no es un objeto
}
```
La primera parte de la condición verifica si valor es de tipo "**object**", lo que indica que es un objeto (ya que los objetos son uno de los tipos de datos fundamentales en la mayoría de los lenguajes de programación). La segunda parte de la condición verifica que `valor` no sea `null`, ya que `null` también tiene un tipo "**object**" en **JavaScript** y algunos otros lenguajes, pero no es técnicamente un objeto.

</details>

---
##### <u>CLASE 2</u>

<details>
<summary>
Escribir un objeto "humano" que te represente.
</summary>

Ejemplo:
```javascript
const human = {
name: "Guillermo",
blonde: true
};
```
**Solución:**

```javascript
const human = {
	name: "Daniel",
    age: 44,
    country: "Venezuela",
    weight: "70 kg",
    height: "1,68 m",
    language: "Spanish"
    };

```

</details>


<details>
<summary>
Una expresión para saber si valor es un array
</summary>
¿Cómo puedo implementar una expresión para verificar si un **valor** es una **array**?
Ejemplo:
```javascript
typeof arr ===  "objet"
```

**Solución:**

Se puede resolver usando el operador `instanceof` o la función `Array.isArray()`.
En general, se recomienda utilizar la función Array.isArray() en lugar de instanceof para verificar si un valor es un array en JavaScript, ya que Array.isArray() es más precisa y funciona correctamente incluso con arrays que han sido creados en diferentes contextos de JavaScript.

El operador `instanceof` devuelve **true** si el objeto que se está evaluando es una instancia de la clase especificada (Array en este caso) y **false** en caso contrario. Esta comprobación **sólo funcionará para arrays que han sido creados en el mismo contexto de JavaScript**, es decir, dentro del mismo marco de trabajo o en la misma ventana del navegador.

```javascript
if (Array.isArray(valor)) {
  // valor es un array
} else {
  // valor no es un array
}
```
Por otra arte, `typeof` es útil para verificar el tipo de muchos valores en JavaScript, pero **no** es una buena manera de verificar si un valor es un array. La razón de esto es que `typeof` devuelve el tipo de dato primitivo subyacente de un valor, pero los `arrays` son **un tipo de objeto** en JavaScript.

Cuando se usa `typeof` en un `array`, en lugar de devolver "**array**", devuelve "**object**", que es el tipo base para todos los objetos en JavaScript.

Ejemplo:

```javascript
console.log(typeof [1, 2, 3]); // output: "object"
```

</details>

---
##### <u>CLASE 3</u>

<details>
<summary>
Calentamiento
</summary>
1. Tomar el HTML de tu hoja de vida (index.html) y verificar
el [outline](https://validator.w3.org/#validate_by_input)
2. Marcar la opción de outline
3. Click en `Check`
4. Verifica que el outline de los encabezados tenga
sentido.
5. Corregir en caso de que tenga errores o no haga sentido.
</details>


<details>
<summary>
Cambiar a etiquetas semánticas
</summary>

**Ejercicio**

1. Cambiar las etiquetas de tu hoja de vida para hacer uso de etiquetas
semánticas.
2. Hacer fork del repositorio de la semana 2: *git@github.com:undefined-academy/semana-2.git*
3. Hacer un pull request con dichos cambios desde tu repositorio forked.
4. La estructura debería ser la siguiente:
```
.
└── student-cvs/
└── glrodasz-0666/
├── index.html
└── styles.css
```
**Solución:**

Ver archivo `index.html`
</details>

---
##### <u>CLASE 4</u>


<details>
<summary>
Calentamiento
</summary>
1. Ir a https://codepen.io/pen/
En la zona de HTML, escribir el siguiente control:
`<input type="datetime-local"
name="meeting">`
2. Hacer esto con todos los navegadores que tenga
instalados y explorar el control: Chrome, Edge, Firefox,
Safari, etc.
</details>

<details>
<summary>
Agregando formulario 
</summary>

**Ejercicio:**

En el mismo Pull Request de la semana-2, agregar para tu hoja de vida una sección o página nueva de contacto que haga uso de los formularios de HTML.

Debemos prevenir el comportamiento por defecto del envío de la información al servidor.

**Solución:**

Ver archivo `contacto.html`
</details>

<details>
<summary>
Prevenir el comportamiento por Default del navegador al enviar un formulario
</summary>

Para prevenir el comportamiento por defecto de un formulario al hacer *submit* en JavaScript, se puede utilizar el método `preventDefault()` y aplicarlo al evento `submit`.
Esto detendrá la acción por defecto del navegador al enviar el formulario y permitirá que se pueda realizar acciones personalizadas.

**Solución:**

**HTML**
```html
<form id="myForm">
  <input type="text" name="username">
  <button type="submit">Enviar</button>
</form>
```
**JAVASCRIPT**
```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  // Detenemos la acción por defecto del navegador
  event.preventDefault();

  // Realizamos acciones personalizadas aquí
  console.log('El formulario no se ha enviado');
});
```
El evento `submit` del formulario se escucha con el método `addEventListener()`. Dentro de la función de `callback`, llamamos al método `preventDefault()` del objeto **event** para detener la acción por defecto del navegador. 
</details>

