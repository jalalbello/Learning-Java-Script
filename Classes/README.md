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