# Creating an object with javascript prototype

```jsx
// Create a new student object
const student = Object.create(Object.prototype, {
  name: {
    value: 'John Doe',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  grade: {
    value: 'A',
    writable: true,
    enumerable: true,
    configurable: true,
  }
});
```
> In this example, we use the Object.create method to create a new object and set its prototype to Object.prototype. This means that the student object will inherit properties and methods from the Object.prototype object.

Next, we use the Object.create method's second argument to define the name and grade properties of the student object. We specify the property values and set the writable, enumerable, and configurable flags to true for each property. This allows us to modify the properties later on if needed.

Both of these examples will create a student object with a name property set to "John Doe" and a grade property set to "A". You can use either approach depending on your specific needs.




## Adding a method to an object with Object.defineProperty

```jsx
Object.defineProperty(student, 'info', {
  value() {
    return `The student ${this.name} is in grade ${this.grade}`;
  },
  writable: true,
  enumerable: true,
  configurable: true,
});
```

