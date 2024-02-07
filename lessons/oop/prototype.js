const Book = function (title, author) {
  this.author = author
  this.title = title
  this.isRead = false
}

Book.prototype.read = function () {
  this.isRead = true
}

const grokkingAlgorithms = new Book('Grokking Algorithms', 'Aditya Y. Bhargava')
grokkingAlgorithms.read()
console.log('grokkingAlgorithms', grokkingAlgorithms)
console.log('read', grokkingAlgorithms.hasOwnProperty('read'))
console.log('author', grokkingAlgorithms.hasOwnProperty('author'))

console.log('__proto__', grokkingAlgorithms.__proto__ === Book.prototype)
console.log(Book.prototype.isPrototypeOf(grokkingAlgorithms))
console.log(Book.prototype.isPrototypeOf(Book))

/* ____________________________________________________________________ */

console.log(Book.prototype.__proto__ == Object.prototype)
console.log(grokkingAlgorithms.__proto__ == Object.prototype)
console.log(grokkingAlgorithms.__proto__.__proto__ === Object.prototype)
