console.log("HELLO WORLD!");
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//// SELECTING LINKS
const productLink = document.querySelectorAll(".nav__link-product");
const featuresLink = document.querySelectorAll(".nav__link-features");
const aboutLink = document.querySelectorAll(".nav__link-about");
const contactLink = document.querySelectorAll(".nav__link-contact");
const signupBtn = document.querySelectorAll(".sign-up");
const homeLink = document.querySelectorAll(".nav__link-home");

const navLinks = document.querySelectorAll(".nav__link");

//////// SELECTING BUTTONS
const btnTryForFree = document.querySelector(".btn-free");
const btnLearnMore = document.querySelectorAll(".nav__link-btn");

////// SELECTING SECTIONS
const header = document.getElementById("header");
const hero = document.querySelector(".hero");
const sectionNumbers = document.getElementById("numbers");
const sectionCrypto = document.getElementById("crypto");
const sectionFeatures = document.getElementById("features");
const sectionCta = document.querySelector(".cta");
const footerBottom = document.getElementById("footer");

navLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    console.log(id);
  })
);

btnTryForFree.addEventListener("click", function (e) {
  sectionCta.scrollIntoView({
    behavior: "smooth",
  });
});

// Reavealing The Sections
const sectionObserver = new intersection();
