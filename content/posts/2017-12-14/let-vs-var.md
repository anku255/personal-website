---
title: let, const and var in Javascript
date: 2017-12-14
tags: ['Javascript']
---

<p class="intro">Recently, I started taking a course <a href="https://es6.io" target="_blank" >ES6 For Everyone </a> by Wes Bos to brush up my ES6. I will be posting about ES6 as I go through the course.
</p>

Today, I am going to talk about `let`, `const` and `var`. Before ES6, we only had `var` and variables declared using `var` are function scoped. Let's see an example:

```js
function setHeight() {
  var height = 100;
  console.log(height);
}

setHeight(); // logs 100
console.log(height); // gives a Reference Error saying height is not defined
```

Above, we can see that variables declared with `var` inside a function cannot be used outside a function. But what if I declare a variable inside a block (say if block).

```js
var age = 50;
if (age > 12) {
  var dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old!`);
}

console.log(dogYears); // logs 350!!!
```

So, variables declared with `var` inside a block can be accessed outside the block. The `dogYears` variable is not needed outside the `if` block and it should not be accessible outside it. To solve this problem, we can use either `let` or `const`.

```js
var age = 50;
if (age > 12) {
  let dogYears = age * 7; // notice the 'let'
  console.log(`You are ${dogYears} dog years old!`);
}

console.log(dogYears); // ReferenceError: dogYears is not defined
```

We can see that variables declared by `let` and `const` are block scoped. The only difference between `let` and `const` is that variables declared with `const` cannot be reassigned.

```js
let person = {
  name: 'Anku',
  age: 100
};

// Reassigning is allowed with 'let'
person = {
  name: 'Elliot',
  age: 36
};

const rectangle = {
  height: 10,
  width: 20
};

// Reassigning is not allowed with 'const'
// It will give an error
rectangle = {
  height: 40,
  width: 100
};
```

Although, variables declared with `const` cannot be reassigned but their properties can be changed. In other words, they are mutable.

```js
const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]

arr[0] = 100;
console.log(arr); // [100, 2, 3]
```

### var inside a for loop

We often run into problems when using a for loop with `var`. Let's start with simple code.

```js
for (var i = 0; i < 10; i++) {
  console.log(i); // logs from 1 to 9
}

console.log(i); // logs 10
```

Above, we encounter the same variable 'leaking' problem. `i` can be accessed outside the `for` loop. We can fix this using `let` instead of `var`. If you think that this was not a big deal then you have not run into a situation where you have to call an asynchronous function inside a for loop. Let's see an example with `setTimeout` function.

```js
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log('The value of i is ' + i);
  }, 1000); // runs after a second.
}

// Prints
// 'The value of i is 10'
// 10 times
```

This is not what we wanted. We had called `setTimeout` with different values of `i` so it must have printed different values. If we change `var` to `let`, we will get the desired result.

```js
for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log('The value of i is ' + i);
  }, 1000); // runs after a second.
}

// Prints
// The value of i is 0
// The value of i is 1
// The value of i is 2 and so on
```

### Temporal Dead Zone

```js
// age is not declared yet, but it won't give us an error.
console.log(age); // prints 'undefined'

var age = 100;

// same behaviour as
let height;
console.log(height); // undefined
```

Variables declared with `var` can be accessed even before they are declared. But, what happens when doing the same with `let`?

```js
console.log(age); // Ref Error: age is not defined
let age = 100;
```

Variables declared with `let` and `const` cannot be accessed before their declaration.This is called Temporal Dead Zone.

Now, that we know about `let`, `const`, and `var`, what should we use? Well, that does depend on your personal choice but I like to use `const` by default and when I need to reassign variables I use `let`. `var` should not be used in ES6.

This is it for this post. Thanks for reading. I will post more about ES6 in future.
