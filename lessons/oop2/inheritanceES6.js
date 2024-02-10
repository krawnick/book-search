class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
  }
  buy() {
    console.log('Buy book')
  }
}

class AudioBook extends Book {
  constructor(title, author, lenMin) {
    super(title, author)
    this.lenMin = lenMin
  }
  log() {
    console.log(`${this.title} - ${this.lenMin}`)
  }
}

const book = new AudioBook(
  'Grokking Algorithms',
  'Aditya Y. BhargavaAditya Y. Bhargava',
  20 * 60
)

console.log('book', book)

book.log()
book.buy()
