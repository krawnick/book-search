const Book = function (title, author) {
  this.title = title
  this.author = author
}

Book.prototype.buy = function () {
  console.log('Buy book')
}

const AudioBook = function (title, author, lenMin) {
  Book.call(this, title, author)
  this.lenMin = lenMin
}

AudioBook.prototype = Object.create(Book.prototype)
AudioBook.prototype.constructor = AudioBook

AudioBook.prototype.log = function () {
  console.log(`${this.title} - ${this.lenMin}`)
}

const book = new AudioBook(
  'Grokking Algorithms',
  'Aditya Y. BhargavaAditya Y. Bhargava',
  20 * 60
)

console.log('book', book)

book.log()
book.buy()
