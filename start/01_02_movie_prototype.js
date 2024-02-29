class Movie {

  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was 
      release in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }

}

const movieA = new Movie('Inception', 'Christopher Nolan', 'Sci-Fi/Thriller', '2010', '9.8');
const movieB = new Movie('Avatar', 'James Cameroon', 'Sci-Fi/Thriller', '2009', '9.7');

console.log(movieA.getOverview());
console.log(movieB.getOverview());