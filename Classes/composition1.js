/* Sure! Here is a challenge for you to create an object with composition in JavaScript:

    Define a Car class that has the following properties: make, model, year, and engine. The engine property should be an instance of an Engine class, which you will define in the next step.

    Define an Engine class that has the following properties: cylinders and horsepower.

    In the Car class, define a method called start that prints out the following message: "Starting car with [number of cylinders] cylinder engine with [horsepower] horsepower."

    Create an instance of the Car class and set the appropriate values for the properties.

    Call the start method on your Car instance to test that it works as expected. */

class Car {
    constructor(make, model, year, engine){
      this.make = make
      this.model = model
      this.year = year
      this.engine = engine
    }
    start = () =>{
      console.log(`Starting car with ${this.engine.cylinders} cylinder engine with ${this.engine.horsepower} horsepower.`);
    }
  }
  
  class Engine {
    constructor(cylinders, horsepower){
      this.cylinders = cylinders
      this.horsepower = horsepower
    }
  }
  
  const engine = new Engine(4, 200);
  const car = new Car('Toyota', 'Camry', 2020, engine);
  car.start();