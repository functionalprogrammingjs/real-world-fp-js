## Real world FP

--

## Objectivos

- Fomentar el uso del paradigma funcional en todo tipo de proyectos que utilicen Javascript como lenguaje
- Eliminar la resistencia general a FP
- Crear una comunidad de FP activa

--

## Por qué FP: Minimizar el caos

- El estado es caos. FP aisla del caos, separándolo en un único lugar mas controlado.
- Cada linea de código aumenta el caos. FP fomenta la abstracción y la reutilización, reduciendo las lines de código.
- La complejidad es caos. FP facilita el la labor de testing al hacer uso de funciones puras.

--

## Por qué FP en JS

- Por qué es el lenguaje mas utilizado del mundo, es el lenguaje de la web.
- Por qué es un lenguaje funcional aunque muchos no lo crean.

--

## Por qué FP

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/eetWam3nhoM/0.jpg)](https://youtu.be/eetWam3nhoM)

--

## Pilares

- Pure functions
- Composition
- Curry
- Higher Order Functions

--

### Pure functions

Una función es pura si su valor de retorno está solo determinado por sus parametros de entrada y no produce efectos secundarios.

```javascript
const greet = name => `Hi, ${name}`

greet('Brianne') // 'Hi, Brianne'
```

As opposed to each of the following:

```javascript
window.name = 'Brianne'

const greet = () => `Hi, ${window.name}`

greet() // "Hi, Brianne"
```

--

### Function Composition

The act of putting two functions together to form a third function where the output of one function is the input of the other.

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

The process of converting a function that takes multiple arguments into a function that takes them one at a time.

Each time the function is called it only accepts one argument and returns a function that takes one argument until all arguments are passed.

```js
const sum = (a, b) => a + b

const curriedSum = a => b => a + b

curriedSum(40)(2) // 42.

const add2 = curriedSum(2) // (b) => 2 + b

add2(10) // 12
```

--

### Auto Currying

Transforming a function that takes multiple arguments into one that if given less than its correct number of arguments returns a function that takes the rest. When the function gets the correct number of arguments it is then evaluated.

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

A function which takes a function as an argument and/or returns a function.

```js
const filter = (predicate, xs) => xs.filter(predicate)
const is = type => x => Object(x) instanceof type
filter(is(Number), [0, '1', 2, null]) // [0, 2]
```

--

### Point-Free Style

Writing functions where the definition does not explicitly identify the arguments used. This style usually requires currying or other Higher-Order functions. A.K.A Tacit programming.

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

### POINT-FREE STYLE

incrementAll identifies and uses the parameter numbers, so it is not points-free. incrementAll2 is written just by combining functions and values, making no mention of its arguments. It is points-free.

Points-free function definitions look just like normal assignments without function or =>.

--

## LIVE CODING

--

## PILARES

--

## PILARES

### funciones puras

```js
const enhance = compose(
  withState('count', 'updateCountStateWith', 0),
  withHandlers({
    increment: ({ updateCountStateWith }) => updateCountStateWith(inc),
    decrement: ({ updateCountStateWith }) => updateCountStateWith(dec)
  }),
  lifeCycle({
    componentDidMount: async component => {
      await delay(3000)
      component.props.updateCountStateWith(inc)
    }
  }),
  branch(({ count }) => count <= 0, Spinner)
)
```

--

## PILARES

### compose

```js
const enhance = compose(
  withState('count', 'updateCountStateWith', 0),
  withHandlers({
    increment: ({ updateCountStateWith }) => updateCountStateWith(inc),
    decrement: ({ updateCountStateWith }) => updateCountStateWith(dec)
  }),
  lifeCycle({
    componentDidMount: async component => {
      await delay(3000)
      component.props.updateCountStateWith(inc)
    }
  }),
  branch(({ count }) => count <= 0, Spinner)
)
```

--

## PILARES

### curry

```js
const enhance = compose(
  withState('count', 'updateCountStateWith', 0),
  withHandlers({
    increment: ({ updateCountStateWith }) => updateCountStateWith(inc),
    decrement: ({ updateCountStateWith }) => updateCountStateWith(dec)
  }),
  lifeCycle({
    componentDidMount: async component => {
      await delay(3000)
      component.props.updateCountStateWith(inc)
    }
  }),
  branch(({ count }) => count <= 0, Spinner)
)
```

--

## PILARES

### HOF

```js
const enhance = compose(
  withState('count', 'updateCountStateWith', 0),
  withHandlers({
    increment: ({ updateCountStateWith }) => updateCountStateWith(inc),
    decrement: ({ updateCountStateWith }) => updateCountStateWith(dec)
  }),
  lifeCycle({
    componentDidMount: async component => {
      await delay(3000)
      component.props.updateCountStateWith(inc)
    }
  }),
  branch(({ count }) => count <= 0, Spinner)
)
```

--

## QUESTIONS

--

## QUE ESPERAMOS DE TI

---

## Example Vertical

You can change separator in file `reveal-md.json`

See [reveal-md](https://github.com/webpro/reveal-md) info

--

## Example 2

Example 5

--

Example 6

--
Example 7

---
