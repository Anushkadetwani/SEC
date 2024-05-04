let currentIndexes7 = 0;

function showSlides7(index) {
  const slider = document.querySelector(".slideres7");
  const slideWidth = document.querySelector(".slideses7").offsetWidth;

  currentIndexes7 = index;

  const transformValue = -slideWidth * currentIndexes7 + "px";
  slider.style.transform = "translateX(" + transformValue + ")";
}

function nextSlides7() {
  const totalSlideSets7 = document.querySelectorAll(".slideses7").length;

  if (currentIndexes7 < totalSlideSets7 - 6) {
    currentIndexes7++;
  }
  showSlides7(currentIndexes7);
}

function prevSlides7() {
  const totalSlideSets7 = document.querySelectorAll(".slideses7").length;

  if (currentIndexes7 > 0) {
    currentIndexes7--;
  }
  showSlides7(currentIndexes7);
}
