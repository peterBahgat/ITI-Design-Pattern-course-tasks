// use the Strategy Pattern
class AttackStrategy {
    execute() {
      console.log("Switched to Attack Game Plan");
    }
  }
  
  class DefenseStrategy {
    execute() {
      console.log("Switched to Defense Game Plan");
    }
  }
  
  class MediumStrategy {
    execute() {
      console.log("Selected to Medium Game Plan");
    }
  }
  // Game class 
  // Usage
  const game = {
    currentStrategy: null,
  
    setStrategy(strategy) {
      this.currentStrategy = strategy;
    },
  
    changeGamePlan() {
      if (this.currentStrategy) {
        this.currentStrategy.execute();
      } else {
        console.log("No game plan selected."); 
      }
    },
  };
  
  // Change game plan during gamePlay
  game.setStrategy(new AttackStrategy());
  game.changeGamePlan();
  game.setStrategy(new DefenseStrategy());
  game.changeGamePlan();
  