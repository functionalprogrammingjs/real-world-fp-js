## Real world FP

--

## Objetivos

- Fomentar el uso del paradigma funcional en todo tipo de proyectos que utilicen Javascript como lenguaje.
- Eliminar la resistencia general a FP.
- Crear una comunidad de FP activa.

--

## Por qué FP

- El estado es caos. FP aisla del caos, separándolo en un único lugar mas controlado.
- La lógica de negocio es caos. FP fomenta la abstracción y la reutilización, reduciendo las líneas de código
- La aplicaciones tienden al caos. FP facilita la legibilidad y el testing al hacer uso de entidades no acopladas entre si A.K.A funciones puras.

--

## Por qué FP en JS

- Porque es el lenguaje mas utilizado del mundo, es el lenguaje de la web entre otros entornos.
- Porque es un lenguaje funcional.

--

## Por qué FP

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/eetWam3nhoM/0.jpg)](https://youtu.be/eetWam3nhoM)

--

## Pilares

- Pure functions
- Composition
- Curry
- Higher Order functions

--

### Pure functions

Una función es pura si su valor de retorno está solo determinado por sus valores de entrada y si no produce efectos secundarios.

```javascript
const greet = name => `Hi, ${name}`

greet('Brianne') // 'Hi, Brianne'
```

En contraposición con lo siguiente:

```javascript
window.name = 'Brianne'

const greet = () => `Hi, ${window.name}`

greet() // "Hi, Brianne"
```

--

### Function Composition

El acto de poner dos funciones juntas para formar una tercera donde la salida de la primera es la entrada de la segunda.

```js
const compose = (f, g) => a => f(g(a)) // Definition
const floorAndToString = compose(
  val => val.toString(),
  Math.floor
) // Usage
floorAndToString(121.212121) // '121'
```

--

### Curry

El proceso de convertir una función que coge múltiples parámetros en una función que los coge de uno en uno.

Cada vez que se llama a la función solo acepta un argumento y devuelve una función que coge solo un argumento, hasta que todos los argumentos se han pasado.

```js
const sum = (a, b) => a + b

const curriedSum = a => b => a + b

curriedSum(40)(2) // 42.

const add2 = curriedSum(2) // (b) => 2 + b

add2(10) // 12
```

--

### Auto Currying

Transformar una función que coge múltiples parámetros en una que si se le pasa menos parametros, devuelve una función que toma el resto. Cuando la función coge el número correcto de párametros entonces se evalúa.

```js
lodash & Ramda have a curry function that works this way.

const add = (x, y) => x + y

const curriedAdd = R.curry(add)
curriedAdd(1, 2) // 3
curriedAdd(1) // (y) => 1 + y
curriedAdd(1)(2) // 3
```

--

### Higher-Order Functions (HOF)

Una función que coge como argumento una función y/o devuelve otra función.

```js
const filter = (predicate, xs) => xs.filter(predicate)
const is = type => x => Object(x) instanceof type
filter(is(Number), [0, '1', 2, null]) // [0, 2]
```

--

### Point-Free Style

Escribir funciones donde en la definición no se identifica de forma explícita sus parámetros. Este estilo normalmente necesita de currificación y de Higher Order functions. También se denomina programación tácita.

```js
// Given
const map = fn => list => list.map(fn)
const add = a => b => a + b

// Then

// Not points-free - `numbers` is an explicit argument
const incrementAll = numbers => map(add(1))(numbers)

// Points-free - The list is an implicit argument
const incrementAll2 = map(add(1))
```

--

## LIVE CODING

--

## REPASO

Has visto funciones puras?

--

## REPASO

Has visto composición?

--

## REPASO

Has visto currificación?

--

## REPASO

Has visto Higher Order functions?

--
