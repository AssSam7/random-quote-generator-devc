import HomePage from "../views/HomePage";
import Home from "../models/Home";

export default class HomeController {
  constructor() {
    this.homePage = new HomePage();
    this.homeModel = new Home();

    // DOM Elements
    this.randomBtn = document.querySelector(".btn__random");
  }

  // Methods
  init() {
    // Show the loader before the quote is generated
    this.homePage.showLoader();
    setTimeout(() => {
      // Call the Home Model for hitting the API and returning the promise
      this.homeModel
        .getRandomQuote()
        .then((response) => {
          // Storing the data
          this.quoteText = response.data.quote.quoteText;
          this.quoteAuthor = response.data.quote.quoteAuthor;
          this.quoteGenre = response.data.quote.quoteGenre;
          console.log(
            this.quoteText + "\n" + this.quoteAuthor + "\n" + this.quoteGenre
          );
          // Rendering the Single Quote from the view
          this.homePage.renderSingleQuote(
            this.quoteText,
            this.quoteAuthor,
            this.quoteGenre
          );
          this.authorLink = document.querySelector(".author__link");

          // Multiple Quotes by Author
          this.authorLink.addEventListener("click", (e) => {
            this.homePage.clearMainContainer();
            this.homePage.showLoader();
            setTimeout(() => {
              this.homeModel
                .getQuotesByAuthor(e.target.dataset.author)
                .then((response) => {
                  this.homePage.renderMultipleQuotes(response.data.quotes);
                })
                .catch(() => {});
            }, 2000);
          });
        })
        .catch(() => {
          console.log("Error while hitting the API");
        });
    }, 2000);
  }

  generateRandom() {
    this.homePage.clearMainContainer();
    this.homePage.showLoader();
    setTimeout(() => {
      this.homeModel
        .getRandomQuote()
        .then((response) => {
          this.quoteText = response.data.quote.quoteText;
          this.quoteAuthor = response.data.quote.quoteAuthor;
          this.quoteGenre = response.data.quote.quoteGenre;
          console.log(
            this.quoteText + "\n" + this.quoteAuthor + "\n" + this.quoteGenre
          );
          this.homePage.renderSingleQuote(
            this.quoteText,
            this.quoteAuthor,
            this.quoteGenre
          );
          this.authorLink = document.querySelector(".author__link");
          this.randomBtn.blur();

          // Multiple Quotes by Author
          this.authorLink.addEventListener("click", (e) => {
            this.homePage.clearMainContainer();
            this.homePage.showLoader();
            setTimeout(() => {
              this.homeModel
                .getQuotesByAuthor(e.target.dataset.author)
                .then((response) => {
                  this.homePage.renderMultipleQuotes(response.data.quotes);
                })
                .catch(() => {});
            }, 2000);
          });
        })
        .catch(() => {
          console.log("Error while hitting the API");
        });
    }, 2000);
  }
}
