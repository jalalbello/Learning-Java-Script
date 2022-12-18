There are two kinds of object properties.

All the ones we were working with previously were data properties

# Accessor property

They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

## Get and Set

```jsx
let obj = {
  get propName() {
    // getter, the code executed on getting/reading obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting/assigning obj.propName = value
  }
};
```

Example of using a getter

```jsx
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smit
```


## Destructuring assignment syntax (the square brackets [])

We want to asign the values returned by **split** to the name and surname properties of our objects

```jsx
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
```
The **split** is called on the value that is passed in to the set  full name accesor, and its split in two at the space char, returning an array with two elements: the first and last names of the user

> The destructuring assignment syntax (the square brackets []) is then used to, unpack the value from the array into (it can also unpack properties from objects) the properties of name and surname,


# Practical use of getters

```jsx
let user = {
    get name() {
      return this._name;
      // Return undefined if the name is not set
    },
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short, need at least 4 characters");
        return;
        // Prevent the name from being set if name is too long, it returns without setting a value
      }
      this._name = value;
      // Essential, without it does not work
    }
  };
```

In this code snippet we used "implicit" property creation, to create an use the _name property

It is prefixed with an underscore,  wich is a common convention using to indicate that the property is intended to be private

# Are classes just syntactic sugar ?

A function created by a class has a specefic label, so its not the same as factory functions for example

It also must be called with the **new** Keyword

A classes sets `enumerable` flag to `false`, thats good cuz if we `loop` over an object we don't want its class methods

Classes always use` strict`

# Strict

1. Strict is throwing `Errors` for behaviour that was `previously allowed` such as :
  <ul><li>It is not possible to use an undeclared variable in strict mode. In non-strict mode, JavaScript will create a new global variable if you use a variable that has not been declared.</li><li>The this value in a function is undefined if the function is called in a way that sets this to undefined, rather than the default global object.</li><li>It is not possible to delete a variable or object property in strict mode.</li><li>It is not possible to delete a function argument in strict mode.</li><li>It is not possible to use the eval() function to parse a string as JavaScript code in strict mode.</li><li>It is not possible to use the arguments.callee property in strict mode.</li><li>It is not possible to use the arguments.caller property in strict mode.</li></ul>

2. It is also disallowing certain syntax in strict mode:
<ul><li>The with statement is not allowed in strict mode. The with statement makes it easier to work with objects by creating a temporary scope for the object, but it can also make it difficult to understand the code and can cause performance problems.</li><li>It is not possible to use octal syntax (a leading zero followed by one or more digits) to specify numbers in strict mode. Octal syntax is disallowed because it can be confusing, as it is not widely used and can be easily mistaken for a decimal number.</li><li>It is not possible to use the eval() function to define variables or functions in strict mode.</li><li>It is not possible to use the arguments.caller and arguments.callee properties in strict mode. These properties can be used to access the caller and callee of a function, respectively, but their use can be confusing and can make it difficult to understand the code.</li></ul>

3. Makes it easy to write `secure` javascript, it can help avoid common pitfalls, such as accidentally creating a **global** variable, or using an **undefined** variable, and mae the code more efficient by eliminating some `unecessary` checks t hat are performed in non-strict mode.
4. Makes more `portable` code that is supported by more browsers

# Using this in classes

Using `this` without passing it in a `wrapper function`, or binding the method to the object

In javascript we have `bind()` but there is a more elegent way of doing it, we use an arrow function as the `method definition`, wich means its `this` value will be lexically bound to the surrounding context, the `this` value inside the `click` method will always be the objects that the method is called on, regardless of how the method is called or what object it is assigned to 

Example using code

1. passing it in a `wrapper function`

```jsx
class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    alert(this.value);
  }
}

let button = new Button("hello");
setTimeout(() => button.click(), 1000)
```

2. binding the method to the object with an `arrow function`

```jsx
class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000);
```

# Delearing a class

While you can use a function that u didn't declare yet due to `hoisting`, you must declare the class before calling it, like a cascade `class, call` in that **order**

# Extending a class

```jsx
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    return 'woof';
  }
}

const dog = new Dog('Fido', 'Labrador');
console.log(dog.name); // prints 'Fido'
console.log(dog.breed); // prints 'Labrador'
console.log(dog.speak()); // prints 'Fido makes a noise.'
console.log(dog.bark()); // prints 'woof'

```

When a class extends another class, it can add additional methods, and properties to the subclass, but it cannot change the basic properties or behavior of the super class, the subclass can only acccess and use the properties and methods definied in the super class, it is also possible for one **subclass** to be a **superclass** to another 

It is not possible to create an instance of the Dog class without passing a value for the `name` property. If you try to create an instance of the Dog class without passing a value for the name property, you will get an error because the Animal `constructor` is expecting a `name` argument.

# More on how to use getters and methods in a Javascript class

```jsx
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

# Generator methods

Its a special type of function in js, it can allow to pause an resume the execution of the code, its like a machine I can turn on and off whenever I wantn and it will pickup right where I left it

Syntax:
```jsx
function* generatorMethod() {
  yield 'Hello';
  yield 'World';
  return 'Done';
}

const generator = generatorMethod();

console.log(generator.next()); // { value: 'Hello', done: false }
console.log(generator.next()); // { value: 'World', done: false }
console.log(generator.next()); // { value: 'Done', done: true }
```

The `yield` keyword is what makes the generator method special, it pauses the exection and returns a value to the caller

Each time we call the `next` method, it will resume the generator from where it left off, and execute the next line of code

They are usefull for when we want to execute as series of tasks one at a time, rather than all at once, they can be helpfull when working with `asynchronous tasks` because I can use them to pause the generator, until the async task has been completed, and then resume the generator once the task is done

> Here is one being used in a class, altought it is `not need and can be repalce with a forEach function that loops over thearray`

```jsx
class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  // Method
  *getSides() {
    for (const side of this.sides) {
      yield side;
    }
  }
}
```

# Static method and properties example

```jsx
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

The static keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.


# Quote: Favor composition over inheritance

While **Both** can be used to **create** complex structures
In OOP, its better to use `composition` for code `reuse and flexibility`, while `inheritance` allows to use the creation of a subclass, and modifty the behaviour as need, this comes with a `hiearchy of classes` with the subclass being a more `specialized or extended version`of the class

## Composition example

In the example the `car` is composed of an `Engine` object and a `Transmission` object, **tarher** than inheriting from these classes. When the `start` method is called on the `Car` Object, it delegetes the task for starting the engine and shifting to the appropriate objects

This means I can modify the behavior of a complex object by simply

```jsx
class Transmission {
  shift(gear) {
    console.log(`Shifting to gear ${gear}`);
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
    this.transmission = new Transmission();
  }

  start() {
    this.engine.start();
    this.transmission.shift(2); // shift to higher gear
    console.log("Car started");
  }
}

const car = new Car();
car.start();

```