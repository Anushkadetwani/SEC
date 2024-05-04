let currentIndexes5 = 0;

function showSlides5(index) {
  const slider = document.querySelector(".slideres5");
  const slideWidth = document.querySelector(".slideses5").offsetWidth;

  currentIndexes5 = index;

  const transformValue = -slideWidth * currentIndexes5 + "px";
  slider.style.transform = "translateX(" + transformValue + ")";
}

function nextSlides5() {
  const totalSlideSets5 = document.querySelectorAll(".slideses5").length;

  if (currentIndexes5 < totalSlideSets5 - 6) {
    currentIndexes5++;
  }
  showSlides5(currentIndexes5);
}

function prevSlides5() {
  const totalSlideSets5 = document.querySelectorAll(".slideses5").length;

  if (currentIndexes5 > 0) {
    currentIndexes5--;
  }
  showSlides5(currentIndexes5);
}
