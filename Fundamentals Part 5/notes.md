# Fundamentals Part 5

## Objects

### Literals and properties

Objects are used to store keyed collections, of various data and more complex entities.

An object can be created with figure brackets {} with a lost of optional properties

Property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

```js
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```
Property values are accessible using the dot notation: 

alert( user.name ); // John

The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;

To remove a property, we can use the delete operator:

delete user.age;

We can also use multiword property names, but then they must be quoted:

```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};
```

when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.

<br><br><br>
### **Property value shorthand**

In real code, we often use existing variables as values for property names.

```js
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```
We can use both normal properties and shorthands in the same object:
```js
name = 'john'
let user = {
name,  // same as name:name
age: 30
};
alert(user.name); // John
```

### **Property names limitations**
We can use special keywords like **for and let**, there are no limitations on property names. 

They can be any strings or symbols (a special type for identifiers, to be covered later).

Other types are automatically converted to strings.

For instance, a number 0 becomes a string "0" when used as a property key:
```js
let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)
```

### **Property existence test, “in” operator**

Reading a non-existing property just returns undefined

```js

Syntax:

"key" in object
--------------------------------------------------------------------
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

We use in cuz for when an object property exists, but stores undefined:
```js
let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!
```

Situations like this happen very rarely, because undefined should not be explicitly assigned. We mostly use **null** for “unknown” or “empty” values. So the in operator is an exotic guest in the code.

### The "for..in" loop


```js
SYNTAX : 
for (key in object) {
  // executes the body for each key among object properties
}
```

*Example* Outputting all properties of an obj 

```js
output all properties of user:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```

### Object orders

Object properties are ordered asscending if they are integers

Else they are ordered by creation

If we want an integer to be orderd by *creation date*, we do the following

```js
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
```


## Object functions 

```js
let person = {
    age: 25,
    name: ['Jalal', 'Bellouchi'],
    bio: function(){
        console.log(`Hi my name is ${this.name[0]} ${this.name[1]} and I'm ${this.age} years old` );
    },
    introduceSelf: function(){
        console.log(`Hi my name is ${this.name[0]}`);
    },
    // ! Using arrow function instead of anon function seems to not work
}
```

## When must use bracket notation

We want to use bracked notation when the variable is defined at runtime, or when we have spaces in our key

```js
let user = {};
// set
user["likes birds"] = true;
// get
alert(user["likes birds"]); // true

---------------

const input = prompt('Get name or age?')
console.log(person[input])
```

## What is "this"?

This refers to the current object 

## Introducing constructors

Using object literals is fine when we need to create on object, but for more complex and real life solutions we use constructors, we do not want to write the code for every object we create

First version of contructors are just functions that return a new object

```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}.`);
  }
  return obj;
}
```

But since we have to init the object, and then return it, lets use the contructor, its the best solution 

We could re write the previous function like thiss 

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}.`);
  }
}
```

To call Person() as a **constructor**, we use new:

```js
const frankie = new Person('Frankie');
```

$$