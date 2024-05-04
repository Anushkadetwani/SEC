let currentIndexes1 = 0;

function showSlides1(index) {
  const slider = document.querySelector(".slideres1");
  const slideWidth = document.querySelector(".slideses1").offsetWidth;

  currentIndexes1 = index;

  const transformValue = -slideWidth * currentIndexes1 + "px";
  slider.style.transform = "translateX(" + transformValue + ")";
}

function nextSlides1() {
  const totalSlideSets1 = document.querySelectorAll(".slideses1").length;

  if (currentIndexes1 < totalSlideSets1 - 6) {
    currentIndexes1++;
  }
  showSlides1(currentIndexes1);
}

function prevSlides1() {
  const totalSlideSets1 = document.querySelectorAll(".slideses1").length;

  if (currentIndexes1 > 0) {
    currentIndexes1--;
  }
  showSlides1(currentIndexes1);
}
