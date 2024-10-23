document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev-slide");
  const nextButton = document.querySelector(".next-slide");
  let currentIndex = 0;
  let slideInterval = setInterval(nextSlide, 5000); // Automatically change slides every 5 seconds

  // Functions to show the next and previous slides
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Event listeners for previous and next buttons
  prevButton.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  nextButton.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  // Reset the auto-slide interval when manual navigation is used
  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Initial call to show the first slide
  showSlide(currentIndex);
});
