let currentIndex = 0;

function showSlide(index) {
  const slider = document.querySelector(".slider");
  const slideWidth = document.querySelector(".slides").offsetWidth;

  currentIndex = index;

  const transformValue = -slideWidth * currentIndex + "px";
  slider.style.transform = "translateX(" + transformValue + ")";
}

function nextSlide() {
  const totalSlideSets = document.querySelectorAll(".slides").length;

  if (currentIndex < totalSlideSets - 6) {
    currentIndex++;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  const totalSlideSets = document.querySelectorAll(".slides").length;

  if (currentIndex > 0) {
    currentIndex--;
  }
  showSlide(currentIndex);
}
