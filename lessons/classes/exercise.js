class User {
  #login
  #password

  #reversePassword(password) {
    return password.split('').reverse().join('')
  }

  #checkPassword(checkPass) {
    return this.#password === this.#reversePassword(checkPass)
  }

  constructor(login, password) {
    this.#login = login
    this.#password = this.#reversePassword(password)
  }

  get login() {
    return this.#login
  }

  set changeLogin(newLogin) {
    this.#login = newLogin
  }

  changePassword(oldPass, newPass) {
    if (this.#checkPassword(oldPass)) {
      this.#password = this.#reversePassword(newPass)
      console.log('Пароль успешно изменен')
      return true
    } else {
      console.log('Старый пароль введен неверно')
      return false
    }
  }
}

const user1 = new User('Nick', 'qwerty')
user1.changeLogin = 'Shoti'
user1.changePassword('qwerty', '123456')
// user1.changePassword('123456', 'qwerty')
console.log(user1.login)
console.log(user1)
