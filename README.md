# Semana-2

## Ejercicios Bootcamp Semana-2:

### Ejercicio de calentamiento - Ejercicio 01:

1) En el ejercicio de calentamiento definimos el valor de Hugo (let hugo = 15) y solo se imprime en pantalla lo que poseen cada uno si el valor total entre los 3 es 85
2) En el ejercicio 01 hay que demostrar que `typeof obj === "object"` para ello cree una function que queda definida asi `function idObjeto(obj) {
    return typeof obj === "object" && obj !== null;
}`
3) Le agrego la condicionante de `&& obj !== null;` para que la funcion retorne si `obj` es un objeto (true) o no (false)
4) Mando a imprimir en pantalla `console.log(idObjeto(obj)` para que muestre el resultado.

### Ejercicio de calentamiento - Ejercicio 02:

1) En el ejercicio de calentamiento simplemente define un objeto `human` que tiene caracteristicas de mi persona (nombre, edad, estatura, sexo etc..) mi objeto quedo de esta manera:  
`const human = {
    name: "Wilmer",
    edad: 30,
    sexo: "Masculino",
    estatura: 1.78,
}` 
2) En el ejercicio 02 me encontre que al intentar realizarlo con `typeof arr === "object"` no iba a funcionar debido a que solo funciona para los objetos, por ende cuando definia una function de esta manera `function idArray(arr){typeof arr === "object && arr !== null` siempre retornaba false o la consola daba error cuando mandaba a imprimir el resultado de la funcion en pantalla.
3) Por ello me di la tarea de buscar en google un poco sobre los arrays y encontre que para demostrar si un array es true o false habia que mandar a llamar a `Array.isArray()`
4) Sustitui `Array.isArray()` por `typeof` y mande a llamar a mi funcion en pantalla.

### Ejercicio de calentamiento - Ejercicio 03:

1) Verifique el Outline de mi HTML haciendo un _Copy & Paste_ en [https://validator.w3.org/nu/#textarea](url) 
2) Realice las correcciones que me indico y valide que todo tuviera sentido semantico
3) Agregue las etiquetas semanticas vistas en clase en los apartados de mi hoja de vida _(index.html)_ tal como `header`, `article`, `section` y `footer`
4) Hice fork del repositorio de semana-2 de Undefined Academy
5) Clone el fork en mi carpeta local y añadi mi _index.html_ en repositorio local
6) Al modificar la direccion del repositorio remoto para enviar mis cambios, surgieron inconvenientes para poder hacer `git push` me indicaba que habia conflictos entre la rama local y la del repositorio remoto.
7) Solvente dicho conflicto con el comando `git merge origin/semana-02`
8) Realice `git pull`, luego `git commit -m "Ejercicio 03 - Semana 02"` y finalmente `git push`
9) Realice mi Pull Request.

### Ejercicio 04:

1) Cree un formulario con la estructura vista en clase.
2) Encontre en Google una function que me deshabilita el boton por default

=======
# ⛺ Semana 2

> 🏕️ [Base de conocimientos.](https://undefinedshell.notion.site/Semana-2-c178367ef97549049ffb313d7b098b59)

Ejercicios de la segunda semana.

## 🏋Clase 1 [EJERCICIOS]

### 🔥 Calentamiento

Hugo, Paco y Luis tienen una cantidad desconocida de monedas cada uno.

Sabemos que Paco tiene el doble de monedas que Hugo y que Luis tiene 10 monedas más que Paco.

Si los tres juntos tienen un total de 85 monedas.

**¿Cuántas monedas tiene cada uno?**

```javascript
// Asignamos la cantidad de monedas de Hugo, este valor es el que tienes que resolver. 
let hugo = 0;
// Calculamos la cantidad de monedas de Paco y Luis en función de Hugo.
let paco = 2 * hugo;
let luis = paco + 10;

// Sumamos las cantidades de monedas de los tres amigos 
let total = hugo + paco + luis;

if (total === 85) {
    console.log("Hugo: " + hugo)
    console.log("Paco: " + paco)
    console.log("Luis: " + luis)
}
```

### 💻 Ejercicio

¿Cómo puedo implementar una expresión para verificar si un valor es un objeto?

Ejemplo: `typeof obj === "object"`

## 🏋Clase 2 [EJERCICIOS]

### 🔥 Calentamiento

Escribir un objeto "humano" que te represente.

Ejemplo:

```javascript
const human = {
    name: "Guillermo",
    blonde: true
};
```

### 💻 Ejercicio

¿Cómo puedo implementar una expresión para verificar si un valor es un array?

Ejemplo: `typeof arr === "object"`

## 🏋Clase 3 [EJERCICIOS]

### 🔥 Calentamiento

1. Tomar el HTML de tu hoja de vida (`index.html`) y verificar el outline en [https://validator.w3.org/nu/](https://validator.w3.org/nu/)
2. Marcar la opción de `outline`
3. Click en `Check`
4. Verifica que el outline de los encabezados tenga sentido.
5. Corregir en caso de que tenga errores o no haga sentido.

### 💻 Ejercicio

1. Cambiar las etiquetas de tu hoja de vida para hacer uso de etiquetas semánticas.
2. Hacer fork del repositorio de la semana 2: `git@github.com:undefined-academy/semana-2.git`
3. Hacer un pull request con dichos cambios desde tu repositorio forked.
4. La estructura debería ser la siguiente:

```markdown
├── student-cvs/
│   ├── glrodasz-0666/
│   │   ├── index.html
│   │   ├── styles.css
```

## 🏋Clase 4 [EJERCICIOS]

### 🔥 Calentamiento

1. Ir a [https://codepen.io/pen/](https://codepen.io/pen/)
2. En la zona de HTML, escribir el siguiente control: `<input type="datetime-local"name="meeting">`
3. Hacer esto con todos los navegadores que tenga instalados y explorar el control: Chrome, Edge, Firefox,Safari, etc

### 💻 Ejercicio

- En el mismo Pull Request de la semana-2, agregar para tu hoja de vida una sección o página nueva de contacto que haga uso de los formularios de HTML.

- 🍎  Debemos prevenir el comportamiento por defecto del envío de la información al servidor.
