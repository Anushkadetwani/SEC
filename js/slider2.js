let currentIndexes = 0;

function showSlides(index) {
  const slider = document.querySelector(".slideres");
  const slideWidth = document.querySelector(".slideses").offsetWidth;

  currentIndexes = index;

  const transformValue = -slideWidth * currentIndexes + "px";
  slider.style.transform = "translateX(" + transformValue + ")";
}

function nextSlides() {
  const totalSlideSets = document.querySelectorAll(".slideses").length;

  if (currentIndexes < totalSlideSets - 6) {
    currentIndexes++;
  }
  showSlides(currentIndexes);
}

function prevSlides() {
  const totalSlideSets = document.querySelectorAll(".slideses").length;

  if (currentIndexes > 0) {
    currentIndexes--;
  }
  showSlides(currentIndexes);
}
