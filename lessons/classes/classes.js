const Book = function (title, author) {
  this.author = author
  this.title = title
  this.isRead = false
}

Book.prototype.read = function () {
  this.isRead = true
}

class BookClass {
  isRead = false
  constructor(title, author) {
    this.author = author
    this.title = title
  }

  read() {
    this.isRead = true
  }
}

const grokkingAlgorithms = new BookClass(
  'Grokking Algorithms',
  'Aditya Y. Bhargava'
)
grokkingAlgorithms.read()

console.log('grokkingAlgorithms', grokkingAlgorithms)
console.log(grokkingAlgorithms instanceof BookClass)
