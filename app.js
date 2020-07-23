import HomeController from "./controllers/homeController";

// DOM Elements
const btnRandom = document.querySelector(".btn__random");

const home = new HomeController();

document.addEventListener("DOMContentLoaded", () => {
  home.init();
});

btnRandom.addEventListener("click", () => {
  home.generateRandom();
});
