# Exercise 1 - Week 2

## ¿Cómo puedo implementar una expresión para verificar si un valor es un objeto?

### Desarrollo:

// _Definimos el objeto_:

const **people** = { _name_: "cesar", _lastname_: "urbiña", _age_: 24, _country_: "Colombia" };

// Hago uso de operador **Object.prototype.toString.call()**, ahora, este tambien puede arrojar _true_ si verificamos un array ya que se define como un _object_, por lo que se agrega una condición extra con el operador lógico _AND_ (**&&**): _!Array.isArray(people)_ (_Esta comparación arrojará **true** si y solo si "Object.prototype.toString.call(**people**)" es **true** y la negación de "Array.isArray(people)" es **false**_)

const **esObjeto** = Object.prototype.toString.call(**people**) === '[object Object]' && !Array.isArray(**people**);

console.log(**esObjeto**); // _true_

# Exercise 2 - Week 2

## Parte 1

## Escribir un objeto "humano" que te represente.

### Desarrollo:

const **human** = { _name_: "cesar", _blonde_: false, _isMarried_: false, _isStudying_: true };

## Parte 2

## ¿Cómo puedo implementar una expresión para verificar si un valor es un array?

### Desarrollo:

// _definimos el array_:

const **fruits** = ["_Apple_", "_Banana_", "_Orange_"];

// Hago uso del método **Array.isArray()** y de la estructura de control **if-else** para la verificación:

**if** (Array.isArray(**fruits**)) { <br>
&nbsp;console.log('Es un array'); <br>
} **else** { <br>
&nbsp;console.log('No es un array'); <br>
}

# Exercise 3 - Week 2

## Parte 1

## Tomar el HTML de tu hoja de vida (index.html) y verificar el outline.

### Desarrollo:

**Outline:**

## Hello! My name is César

### &nbsp;&nbsp;My terminal

#### &nbsp;&nbsp;&nbsp;&nbsp;My most used terminal commands.

#### &nbsp;&nbsp;&nbsp;&nbsp;My favorite terminal aliases.

## Parte 2

## Cambiar las etiquetas de tu hoja de vida para hacer uso de etiquetas semánticas.

### Desarrollo:

**Por favor ver el archivo "index.html"**

# Exercise 4 - Week 2

## En el mismo Pull Request de la semana-2, agregar para tu hoja de vida una sección o página nueva de contacto que haga uso de los formularios de HTML.

### Desarrollo:

**Por favor ver el archivo "contact.html" y "stylesContact.css"**
