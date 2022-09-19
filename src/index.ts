type GenreType = {
  type: string;
  value: string;
}

interface IBook {
  name: string;
  genre: GenreType;
  pageAmount: number
}

class Book {
  name = ''
  genre = null
  pageAmount = 0

  constructor({ name, genre, pageAmount }: IBook) {
    this.name = name
    this.genre = genre
    this.pageAmount = pageAmount
  }
}

const books: Book[] = [
  new Book({
    name: 'Harry Potter',
    genre: {
      value: 'fantasy',
      type: 'new'
    },
    pageAmount: 980
  }),
  // new Book('Lord of the Ring', 'fantasy', 1001),
  // new Book('How to be productive', 'lifestyle', 500),
  // new Book('Game of Thrones', 'fantasy', 999)
]

function findSuitableBook(
  genreValue: string,
  pagesLimit: number,
  multipleRecommendations = true
): Book | Book[] | undefined {
  const findAlgorithm = (book: IBook) => {
    return book.genre.value === genreValue && book.pageAmount <= pagesLimit
  }

  if (multipleRecommendations) {
    return books.filter(findAlgorithm)
  } else {
    return books.find(findAlgorithm)
  }
}

const recommendedBook = findSuitableBook('fantasy', 1000)

if (recommendedBook instanceof Book) {
  console.log(recommendedBook.name)

}

console.log(';;')
console.log('q2122;')


