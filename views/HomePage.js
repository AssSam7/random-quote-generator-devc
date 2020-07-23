export default class HomePage {
  constructor() {
    // DOM elements
    this.mainContainer = document.querySelector(".main");
  }

  // Methods
  getLoaderHTML() {
    return `
    <div class="loader">
      <svg>
        <use xlink:href="img/sprites.svg#icon-spinner11"></use>
      </svg>
    </div>
  `;
  }

  getSingleQuoteHTML(quoteText, quoteAuthor, quoteGenre) {
    return `
    <div class="single-quote">
      <p class="quote">
        “ ${quoteText} ”
      </p>
      <div class="author__link" data-author="${quoteAuthor}">
        <div>
          <h2 class="heading-2 mb-1">${quoteAuthor}</h2>
          <p>${quoteGenre}</p>
        </div>
        <span class="right">&#8594;</span>
      </div>
    </div>
  `;
  }

  getMultipleQuotesHTML(quotes) {
    let texts = quotes.map((quote) => quote["quoteText"]);
    return `
    <div class="multiple-quotes">
        <div class="author">
          <h1>${quotes[0].quoteAuthor}</h1>
        </div>
        <div class="quotes">
          ${texts
            .map((text) => {
              return `<p class="quote mb-6">${text}</p>`;
            })
            .join("")}
        </div>
    </div>
    `;
  }

  showLoader() {
    this.mainContainer.insertAdjacentHTML("beforeend", this.getLoaderHTML());
  }

  hideLoader() {
    this.mainContainer.innerHTML = "";
  }

  clearMainContainer() {
    this.mainContainer.innerHTML = "";
  }

  renderSingleQuote(quoteText, quoteAuthor, quoteGenre) {
    this.hideLoader();
    this.mainContainer.insertAdjacentHTML(
      "beforeend",
      this.getSingleQuoteHTML(quoteText, quoteAuthor, quoteGenre)
    );
  }

  renderMultipleQuotes(quotes) {
    this.hideLoader();
    console.log(quotes);
    this.mainContainer.insertAdjacentHTML(
      "beforeend",
      this.getMultipleQuotesHTML(quotes)
    );
  }
}
