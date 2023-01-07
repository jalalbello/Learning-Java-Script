

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this._age = age;
    this.gender = gender;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0 || value > 120) {
      throw new RangeError('Age must be between 0 and 120');
      // Built in error type in javascript, can also be used for when we pass too many arguments
    }
    this._age = value;
  }

  sayHello = () => {
    return `Hello, my name is ${this.name} and I am ${this.gender}`;
  }

  growOlder = () => {
    this.age++;
  }

  getAge = () => {
    return this.age;
  }
}

const person = new Person('Alice', 25, 'female');
try {
  person.age = 200; // this will throw a RangeError
} catch (e) {
  if (e instanceof RangeError) {
    // handle the RangeError
    console.error(e.message);
  } else {
    // handle other errors
    console.error(e);
  }
} finally {
  // code to be executed regardless of whether an error was thrown or not
}

The code is printing the error message to the console in mozilla firefox, without the console.log()
