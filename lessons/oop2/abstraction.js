class Film {
  #name
  #author
  rating
  #length

  constructor(name, author, length) {
    this.#name = name
    this.#author = author
    this.#length = length
  }

  get name() {
    return this.#name
  }
  get author() {
    return this.#author
  }
  get length() {
    return this.#length
  }
}

const film = new Film('Avatar', 'Cameron', 180)
console.log('film', film)
