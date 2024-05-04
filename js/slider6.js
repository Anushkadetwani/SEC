let currentIndexes6 = 0;

function showSlides6(index) {
  const slider = document.querySelector(".slideres6");
  const slideWidth = document.querySelector(".slideses6").offsetWidth;

  currentIndexes6 = index;

  const transformValue = -slideWidth * currentIndexes6 + "px";
  slider.style.transform = "translateX(" + transformValue + ")";
}

function nextSlides6() {
  const totalSlideSets6 = document.querySelectorAll(".slideses6").length;

  if (currentIndexes6 < totalSlideSets6 - 6) {
    currentIndexes6++;
  }
  showSlides6(currentIndexes6);
}

function prevSlides6() {
  const totalSlideSets6 = document.querySelectorAll(".slideses6").length;

  if (currentIndexes6 > 0) {
    currentIndexes6--;
  }
  showSlides6(currentIndexes6);
}
