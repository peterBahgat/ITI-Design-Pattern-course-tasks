class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDescription() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  // specific methods and properties for cars
}

class Truck extends Vehicle {
  // specific methods and properties for trucks
}

class CarShop {
  constructor() {
    this.vehicles = []; // Store vehicles in the car shop
  }

  addVehicle(vehicle) {
    this.vehicles.push(vehicle); // Add a vehicle to the car shop's inventory
  }

  listInventory() {
    console.log('Car Shop Inventory:');
    this.vehicles.forEach((vehicle, index) => {
      console.log(`${index + 1}. ${vehicle.getDescription()}`);
    });
  }
}

class VehicleFactory {
  createVehicle(type, make, model) {
    switch (type) {
      case 'car':
        return new Car(make, model);
      case 'truck':
        return new Truck(make, model);
      default:
        throw new Error('Invalid vehicle type');
    }
  }
}

// Usage
const vehicleFactory = new VehicleFactory();
const carShop = new CarShop();

const car1 = vehicleFactory.createVehicle('car', 'Toyota', 'Camry');
const car2 = vehicleFactory.createVehicle('car', 'Honda', 'Civic');
const truck = vehicleFactory.createVehicle('truck', 'Ford', 'F-150');

carShop.addVehicle(car1);
carShop.addVehicle(car2);
carShop.addVehicle(truck);

carShop.listInventory();
