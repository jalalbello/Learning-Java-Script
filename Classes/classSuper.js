//! the super keyword can only be used in a subclass (a class that extends another class)

class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // calls the constructor of the Animal class, it is necessary otherwise it doesn't inherit the name
      this.breed = breed;
    }
  }
  
  const dog = new Dog('Fido', 'Labrador');
  console.log(dog.name); // prints 'Fido'
  console.log(dog.breed); // prints 'Labrador'