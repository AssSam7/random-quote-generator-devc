import axios from "axios";

export default class Home {
  constructor() {
    this.randomApiURL =
      "https://quote-garden.herokuapp.com/api/v2/quotes/random";
    this.quotesByAuthorApiURL =
      "https://quote-garden.herokuapp.com/api/v2/authors/";
  }

  // Methods

  // Random Quote
  getRandomQuote() {
    return axios.get(this.randomApiURL);
  }

  // All Quotes based on Author
  getQuotesByAuthor(author) {
    console.log(this.quotesByAuthorApiURL + author + "?page=1&limit=10");
    return axios.get(this.quotesByAuthorApiURL + author + "?page=1&limit=10");
  }
}
