class Book {

  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get getAvailability() {
    if (this.numCopies === 0) {
      return 'out of stock';
    } else if (this.numCopies < 10) {
      return 'low stock';
    } else {
      return 'in stock';
    }
  }

  sell(numSold) {
    let copiesToSell = numSold ?? 1;
    if (this.numCopies < numSold) {
      return 'not enough copies';
    }
    this.numCopies -= numSold;
  }

  restock(numCopies) {
    const numCopiesToRestock = numCopies ?? 5;
    this.numCopies += numCopiesToRestock;
  }
}

const book1 = new Book('Harry Potter', 'JK Rowling', 12345, 10);

console.log(book1.getAvailability);
book1.sell(5);
console.log(book1.getAvailability);
book1.restock();
console.log(book1.getAvailability);
book1.sell(10);
console.log(book1.getAvailability);