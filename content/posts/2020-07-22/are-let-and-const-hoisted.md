---
title: Are let and const hoisted?
date: 2020-07-22
tags: ['Javascript']
---

<p class="intro">In this post I will be talking about hoisting, temporal dead zone and how hoisting works with let and const.</p>


## What is hoisting? 

The JavaScript engine before parses the code before executing and during the parsing phase it shifts all the **variable declaration** to the top of the scope. This behaviour of JS engine is called **hoisting**.

### Variable Hoisting 

Consider the following code snippet - 

```js
console.log(greeting); // undefined

var greeting = "Hello";
```

We can see that the `greeting` variable can be accessed before its declared. This happens because the JS engine modifies our code snippet into something like this - 

```js
var greeting;
console.log(greeting); // undefined

var greeting = "Hello";
```

### Function Hoisting

The formal function declarations in JavaScript are also hoisted to the top of the scope. For example: 

```js
greeting(); // Hello

function greeting() {
  console.log("Hello");
}
```

**Note:** The important distinction between **variable hoisting** and **function hoisting** is that a `var` variable is hoisted and then auto-initalized to `undefined` whereas a function declaration is hoisted and **initialized to its function value**. 

### Function declaration vs Function expression

*Function hoisting* only applies to formal `function` declarations and not to `function` expression assignments. Consider:

```js
greeting(); // TypeError: greeting is not a function

console.log(greeting); // undefined

var greeting = function greeting() {
  console.log("Hello!");
};
```

Above, we can see that the `greeting` variable was hoisted but it was not initialzed with the function reference. The engine throws us a `TypeError: greeting is not a function` and not `ReferenceError: greeting is not defined`. The function expression assignments behave very much like **variable hoisting**.


## What about let and const?

So far, I have only talked about `var` and formal `function` declarations. What about the `let` and `const`. Let's see the following code snippet - 

```js
console.log(greeting); // cannot access 'greeting' before initialization

let greeting = "Hello";
```

We get a new kind of error, its not a `ReferenceError`, the engine knows about `greeting` but doesn't allow us to use it before its initialized. The JS engine doesn't allow us to access the variables declared with `let` and `const` before they are declared. This is called **Temporal Dead Zone**.


Let's consider this snippet - 

```js
let greeting;

console.log(greeting); // undefined

greeting = "Hello";
```

Above, we can see that we are able to access `greeting` variable as soon as it was declared.


## So, let and const are not hoisted?

After seeing the above two code snippets, I was pretty convinced too that `let` and `const` are not hoisted. But they actually are. We can prove this with the help of a few more examples - 


```js
console.log(typeof iDontExist); // undefined
console.log(typeof greeting); // cannot access 'greeting' before initialization

let greeting = "hello";
```

If the `greeting` variable was not hoisted, we would expect `typeof greeting` to be `undefined` similar to `typeof iDontExist`. This proves that the JS engine knows about our `greeting` variable but still doesn't allow us to access it just yet due to **Temporal Dead Zone**.


Let's see another example - 

```js
let x = 'outer value';
console.log(x); // outer value

 {
  // start TDZ for x
  console.log(x); // cannot access 'x' before initialization
  let x = 'inner value'; // declaration ends TDZ for x
 }
```

Accessing the variable `x` in the inner scope still causes the TDZ error. If the `let x = 'inner value';` was not hoisted then on line 6, it would have logged `outer value`.


## Conclusion

- The `var` declarations are hoisted and initialized with `undefined`.
- The formal function declarations are hoisted and initialized with their function reference.
- `let` and `const` variables are hoisted too but they cannot be accessed before their declarations. This is called Temporal Dead Zone.
