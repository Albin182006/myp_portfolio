
// // JAVASCRIPTE CODE
// <script>
// var swiper = new Swiper(".default-carousel", {
// loop: true,
// pagination: {
// el: ".swiper-pagination",
// clickable: true,
// },
// navigation: {
// nextEl: ".swiper-button-next",
// prevEl: ".swiper-button-prev",
// },
// });
// </script>
// W


// script.js
document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.querySelector('.typewriter-text');
  const textToType = "Hello, welcome to my website!"; // The text you want to display
  let index = 0;
  const typingSpeed = 100; // Adjust typing speed (in milliseconds)

  function typeWriter() {
      if (index < textToType.length) {
          textElement.textContent += textToType.charAt(index);
          index++;
          setTimeout(typeWriter, typingSpeed);
      } else {
          // Optionally, you can restart the typing effect by resetting the index and clearing the text
          // index = 0;
          // textElement.textContent = "";
          // setTimeout(typeWriter, typingSpeed);
      }
  }

  typeWriter();
});








document.querySelector('[aria-controls="mobile-menu"]').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const isExpanded = this.getAttribute('aria-expanded') === 'true';

  mobileMenu.classList.toggle('hidden');
  this.setAttribute('aria-expanded', !isExpanded);
  this.querySelector('svg.block').classList.toggle('hidden');
  this.querySelector('svg.hidden').classList.toggle('hidden');
});

document.getElementById('user-menu-button').addEventListener('click', function() {
  const userMenu = document.getElementById('user-menu');
  userMenu.classList.toggle('hidden');
});




const slideContainer = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentSlide = 0;

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
});


