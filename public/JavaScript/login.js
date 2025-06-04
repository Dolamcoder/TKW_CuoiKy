const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider(index) {
  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  bullets[index - 1].classList.add("active");
}

// Manual click on bullets
bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    moveSlider(bullet.dataset.value);
  });
});

// Automatic sliding every 8 seconds
let currentIndex = 1;
const totalSlides = bullets.length;

function autoSlide() {
  currentIndex = (currentIndex % totalSlides) + 1; // Loop back to 1 after the last slide
  moveSlider(currentIndex);
}

let slideInterval = setInterval(autoSlide, 3500); // Slide every 8 seconds

// Optional: Pause auto-slide on hover and resume on mouse leave
const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});
carousel.addEventListener("mouseleave", () => {
  slideInterval = setInterval(autoSlide, 8000);
});