class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
  }
  info() {
    console.log(`${this.title} - ${this.author}`)
  }
}

const book1 = new Book(
  'Grokking Algorithms',
  'Aditya Y. BhargavaAditya Y. Bhargava'
)

book1.info()

class EBook extends Book {
  constructor(title, author, pages) {
    super(title, author)
    this.pages = pages
  }
  info() {
    console.log(`${this.title} - ${this.author} - ${this.pages}`)
  }
}

const book2 = new EBook(
  'Grokking Algorithms',
  'Aditya Y. BhargavaAditya Y. Bhargava',
  192
)

book2.info()
