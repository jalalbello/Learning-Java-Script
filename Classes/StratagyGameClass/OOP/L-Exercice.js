class Vehicle {
  startEngine() {
    throw new Error('The startEngine method must be implemented in a derived class');
  }
}

class Car extends Vehicle {
  constructor(fuelType){
    this.fuelType = fuelType
  }
  startEngine() {
    return 'The car engine has started';
  }
}

class ElectricCar extends Vehicle {
  constructor(batteryType){
    this.batteryType = batteryType
  }
  startEngine() {
    return 'The electric car engine has started';
  }
}

// notes
// to follow the Liskov Substitution Principle, the Car and ElectricCar classes must have a startEngine method that behaves the same as the Vehicle class.