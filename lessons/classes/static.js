class Test {
  static a = 1
  static hello() {
    console.log('Hello')
  }
  static {
    let b = 5
    this.a = 5
  }
  bye() {
    console.log('Bye')
  }
}

const test = new Test()

Test.hello()
console.log(Test.a)

test.bye()

// const Test2 = function () {}
// Test2.hello = function () {
//   console.log('Hello')
// }

// Test2.hello()
