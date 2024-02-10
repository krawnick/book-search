class Enemy {
  health
  alive = true
  constructor(health) {
    this.health = health
  }

  takeHit(damage) {
    this.health = this.health - damage
    console.log('#ENEMY', this.health)
    if (this.health <= 0) {
      this.alive = false
      console.log('Enemy is DEAD')
    }
  }
}

class Sword {
  #damage
  constructor(damage) {
    this.#damage = damage
  }

  doHit(enemy) {
    enemy.takeHit(this.#damage)
  }
}

class Orc extends Enemy {
  constructor(health) {
    super(health)
  }

  takeHit(damage) {
    if (Math.random() > 0.5) {
      this.health = this.health - damage
    }
    console.log('#ORC', this.health)
    if (this.health <= 0) {
      this.alive = false
      console.log('Orc is DEAD')
    }
  }
}

const enemy = new Enemy(100)

const sword = new Sword(10)

const orc = new Orc(50)

let i = 0
while (enemy.alive && orc.alive) {
  i % 2 ? sword.doHit(orc) : sword.doHit(enemy)
  i++
}
