// solid principles - Liskov substitution principle
class Bird {
  fly() {
    console.log('The bird is flying.');
  }
  makeBirdFly() {
    this.fly();
  }
}

class Sparrow extends Bird {
  fly() {
    console.log('The sparrow is flying.');
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostriches can't fly.");
  }
}

const sparrow = new Sparrow();
const ostrich = new Ostrich();

sparrow.makeBirdFly();
// ostrich.makeBirdFly();
