class Human {
  constructor(name) {
    this.name = name; 
    this._health = 100; 
  }
  attack = (human) => {
    console.log(`${this.name} attacks!`)
    human.health -= 10; 
    this.deathCheck();
  }

  get health() {
    return this._health;
  }

  set health(newHealth) {
    this._health = newHealth; 
    this.deathCheck();
  }

  deathCheck = () => {
    if (this._health <= 0) {
      console.log(`${this.name} has Died!!!`)
    } 
  }
}

const john = new Human("John");
const sara = new Human("Sara")
sara.health = 1; 
john.attack(sara);
console.log(sara.health)



