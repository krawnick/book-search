// class Weapon {
//   strike() {}

//   shoot() {}
// }

// class Rifle extends Weapon {
//   strike() {}
//   shoot() {}
// }

// class Sword extends Weapon {
//   strike() {}
//   shoot() {} // ????????
// }

class Weapon {
  cost
  dealDamage() {}
}

class Rifle extends Weapon {
  shoot() {
    this.dealDamage()
  }
}

class Sword extends Weapon {
  strike() {
    this.dealDamage()
  }
}
