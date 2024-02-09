class Car {
  #vin = 6
  speed

  constructor() {
    // this.#test2 = 5
    this.test3 = 5
  }
  #changeVin() {
    console.log('changed')
  }
  test() {
    // Проверка
    this.#changeVin()
  }
  static #field = 3
  static {
    this.#field = 5
  }
}

const car = new Car()

car.test()
