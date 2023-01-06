class Package{
    constructor(weight, distance){
        this.weight = weight
        this.distance = distance
    }
  }
  
  class ShippingMethod{
    constructor(package, method){
        this.shippackage = package
        this.method = method
    }
    get price(){
        return this.calcPrice()
    }
    calcPrice(){
        return this.method(this.package)
    }
  }
  
  class GroundShippingMethod{
    constructor(package){
        this.package = package
    }
    get formula(){
        return this.calcFormula()
    } 
    calcFormula(){
        let fixedcost = 10;
        return fixedcost + ((this.package.weight / 10) *(this.package.distance *0.05))
    }
  }
  

const myPackage = new Package(10, 100)
console.log(myPackage)

const groundShippingMethod = new GroundShippingMethod(myPackage)
const shippingMethod = new ShippingMethod(myPackage, groundShippingMethod.calcFormula)
console.log(shippingMethod.price)
