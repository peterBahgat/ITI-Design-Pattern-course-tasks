// using the Singleton design pattern to ensure there's only one instance of the CEO object

class CEO {
    constructor(name, age, address) {
      if (CEO.instance) {
        return CEO.instance;
      }
      this.name = name;
      this.age = age;
      this.address = address;
      CEO.instance = this;
    }
  
    introduce() {
      console.log(`Hi, I'm ${this.name}, the CEO. I'm ${this.age} years old and live at ${this.address}.`);
    }
  }
  
  // Usage
  const ceoX = new CEO("John Doe", 45, "123 Main St");
  const ceoY = new CEO("Alice Smith", 40, "456 Elm St");
  
  ceoX.introduce(); // Output: "Hi, I'm John Doe, the CEO. I'm 45 years old and live at 123 Main St."
  ceoY.introduce(); // Output: "Hi, I'm John Doe, the CEO. I'm 45 years old and live at 123 Main St."
  