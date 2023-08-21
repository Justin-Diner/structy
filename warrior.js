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
      this.#allegiance();
    } 
  }

  #allegiance() {
    console.log("My allegiance is mine!")
  }
}

class Warrior extends Human {
  constructor(name) {
    super(name)
    this.weapon = "Sword"
  }

  attack = (person) => {
    console.log(`${this.name} attacks ${person.name} with his ${this.weapon}`)
    person.health = person.health - 10;
    console.log(`${person.name}'s health is now ${person.health}`)
  }
}

class Mage extends Human {
  constructor(name) {
    super(name)
    this.weapon = "Wand"
  }

  heal = () => {
    console.log(`${this.name} heals for 10 health`)
    this.health += 10; 
    console.log(`${this.name}'s health is now ${this.health}`)
  }
}

const john = new Warrior("John");
const sara = new Mage("Sara")
john.attack(sara);
sara.heal()

sara.health = 10;
john.attack(sara);

