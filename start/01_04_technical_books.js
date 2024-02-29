class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here

class TechnicalBook extends Book {

  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `The current version of this book is ${this.edition}`;
  }
}

const technicalBook1 = new TechnicalBook('Fluent Python', 'Luciano Ramalho', 12345, 10, 1.0);
const technicalBook2 = new TechnicalBook('You Don’t Know JS', 'Ryan Simpson', 12, 5, 2.0)

console.log(technicalBook1.availability);
technicalBook1.sell(5);
console.log(technicalBook1.availability);
technicalBook1.restock();
console.log(technicalBook1.availability);
technicalBook1.sell(10);
console.log(technicalBook1.availability);

console.log(technicalBook2.getEdition());