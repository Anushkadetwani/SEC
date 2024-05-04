let currentIndexes4 = 0;

function showSlides4(index) {
  const slider = document.querySelector(".slideres4");
  const slideWidth = document.querySelector(".slideses4").offsetWidth;

  currentIndexes4 = index;

  const transformValue = -slideWidth * currentIndexes + "px";
  slider.style.transform = "translateX(" + transformValue + ")";
}

function nextSlides4() {
  const totalSlideSets4 = document.querySelectorAll(".slideses4").length;

  if (currentIndexes4 < totalSlideSets4 - 6) {
    currentIndexes4++;
  }
  showSlides4(currentIndexes4);
}

function prevSlides4() {
  const totalSlideSets4 = document.querySelectorAll(".slideses4").length;

  if (currentIndexes4 > 0) {
    currentIndexes4--;
  }
  showSlides(currentIndexes4);
}
