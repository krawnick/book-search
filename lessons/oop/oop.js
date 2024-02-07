const User = function (email, password) {
  console.log(this)
  this.email = email
  this.password = password
  console.log(this)
}

const user1 = new User('a@a.ru', '123')

console.log(user1)

const user2 = {
  email: '123',
  password: '123',
}

const user3 = new Array(['123', '123'])

console.log(user2 instanceof Object)
console.log(user3)
