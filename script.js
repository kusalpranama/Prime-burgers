// Smooth scrolling for hero button
document.querySelector('.hero-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#menu').scrollIntoView({
        behavior: 'smooth'
    });
});
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
  });