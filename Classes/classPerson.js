class Person{
    constructor(name, age, gender){
      this.name = name
      this.age = age
      this.gender = gender
    }
    sayHello = () =>{
      return(`Hello, my name is ${this.name} and I am ${this.gender}`)
    }
    growOlder = () =>{
      this.age++
    }
    getAge = () =>{
      return this.age
    }
  }
  
  const person = new Person('Alice', 25, 'female');
  console.log(person.sayHello()); // Output: "Hello, my name is Alice and I am a female."
  person.growOlder();
  console.log(person.getAge()); // outputs 26