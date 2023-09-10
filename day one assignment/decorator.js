// example
class Coffee {
    cost() {
      return 5;
    }
  }
  
  class MilkDecorator {
    constructor(coffee) {
      this._coffee = coffee;
    }
  
    cost() {
      return this._coffee.cost() + 2;
    }
  }
  
  class SugarDecorator {
    constructor(coffee) {
      this._coffee = coffee;
    }
  
    cost() {
      return this._coffee.cost() + 1;
    }
  }
  
  // Usage
  const simpleCoffee = new Coffee();
  console.log("Cost of simple coffee:", simpleCoffee.cost());
  
  const coffeeWithMilk = new MilkDecorator(simpleCoffee);
  console.log("Cost of coffee with milk:", coffeeWithMilk.cost());
  
  const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
  console.log("Cost of coffee with milk and sugar:", coffeeWithMilkAndSugar.cost());
  