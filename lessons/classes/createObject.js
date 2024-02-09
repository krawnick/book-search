const User = {
  init(email, password) {
    this.email = email
    this.password = password
  },
  log() {
    console.log('log', this.email)
    console.log('log', this.password)
  },
}

const user = Object.create(User)
user.init('abc@d.ru', 'qwerty')
// console.log(user.__proto__ === User)
console.log('user', user)
user.log()

const admin = Object.create(user)
console.log('admin', admin)

admin.log()
// console.log(admin instanceof Object)
