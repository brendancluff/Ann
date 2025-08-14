// ------------------- Slideshow -------------------
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to next slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  // Remove active state from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show current slide and activate corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  // Change slide every 7 seconds
  setTimeout(showSlides, 7000);
}

// Manual slide control
function currentSlide(n) {
  slideIndex = n - 1; // Adjust so showSlides increments correctly
  showSlides();
}

// ------------------- Play/Pause Music -------------------
const playButton = document.getElementById('playAudio');
const memorialAudio = document.getElementById('memorialAudio');

playButton.addEventListener('click', function() {
  if (memorialAudio.paused) {
    memorialAudio.play();
    playButton.textContent = "Pause Music";
  } else {
    memorialAudio.pause();
    playButton.textContent = "Play Music";
  }
});

