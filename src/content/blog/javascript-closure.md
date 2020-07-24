# JavaScript Closure

| **Resources:**                                                                       |
| ------------------------------------------------------------------------------------ |
| [MDN Closure Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) |

## What is a "closure"?

A **closure** is the combination of a function enclosed with references to its surrounding state (_lexical environment_). It gives you access to an outer function's scope or environment from an inner function.

Consider the following code snippet:

```js
function outerFunction() {
  let innerVar = "I'm inside outerFunction"
  function innerFunction() {
    console.log(`${innerVar}, but I can be accessed from innerFunction too!`)
  }
  innerFunction()
}

outerFunction()

// > "I'm inside outerFunction, but I can be accessed from innerFunction too!"
```

### Lexical Scope/Environment

In the above code snippet, `outerFunction` creates a variable called `innerVar`, and a function called `innerFunction`. The `innerFunction` function is **enclosed** inside, and is only available within, `outerFunction`. `innerFunction` has no local variables of its own, but is able to access `innerVar` because they are both within the _lexical scope_ of `outerFunction`.

### Closure

In the initial code snippet, we called `innerFunction` immediately after declaring it. But what if we `return` the inner function instead?

```js
function outside() {
  let myName = "Pixi"
  function inside() {
    alert(myName)
  }
  return inside
}

let insideOutside = outside()
insideOutside()
```

If we run this code, we'll get an alert with my name. _But why?_

The reason this works is because functions in JavaScript from **closures**. A closure is a combination of a function and the _lexical scope_ within which the function was declared.

`insideOutside` becomes a reference to an instance of our `inside` function when `outside` is run. This instance of `inside` maintains a reference to its _lexical scope_, which allows it to maintain its reference to the `myName` variable.

### Passing Arguments

We can use closures to our advantage in creating enclosed functions that accept arguments.

```js
// we create a function that accepts one argument, and returns a function that also accepts one argument, and utilizes both arguments...
function makeMultiplier(x) {
  return function (y) {
    return x * y
  }
}

// we can call the outer function and assign it to a variable
let multiplyBy2 = makeMultiplier(2)
let multiplyBy5 = makeMultiplier(5)
console.log(multiplyBy2(3)) // 6
console.log(multiplyBy5(3)) // 15

// we can also use argument chaining to call both functions at once
console.log(makeMultiplier(2)(3)) // 6
console.log(makeMultiplier(5)(3)) // 15
```

Our new `makeMultiplier` function gives us the ability to **create more functions** and then use those functions later.

When we create `multiplyBy2`, the reference to `x = 2` becomes a part of the functions _lexical scope_. We can then use this function to multiply other numbers by 2. The same is true for `multiplyBy5`.

When we use argument chaining, we simply call the inner function immediately by passing an argument to `makeMultiplier` and immediately passing an argument to the function which is returns.

## Want to learn more about scope in JavaScript?

Check out [my previous post on scope and hoisting](https://dev.to/thecodepixi/hoist-your-vars-variable-hoisting-in-javascript-2f42) and let me know if you still have any questions! It might inspire a future blog post!

xx - Emily / TheCodePixi
