class Human {
  constructor(name) {
    this.name = name; 
    this.health = 100; 
  }
  attack = (human) => {
    human.health -= 10; 
    console.log(this.deathCheck());
  }

  deathCheck = () => {
    if (this.health <= 0) {
      console.log(`${this.name} has Died!!!`)
    } 
  }
}

const john = new Human("John");
const sara = new Human("Sara")
sara.health = 1; 
john.attack(sara);
console.log(sara.deathCheck())


