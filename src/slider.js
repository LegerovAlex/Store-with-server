const img = document.querySelectorAll(".slider-line__img");
const sliderLine = document.querySelector(".slider-line");
const sliderWrapper = document.querySelector(".slider-wrapper");
const buttonNext = document.querySelector(".slider-btn__next");
const buttonPrev = document.querySelector(".slider-btn__prev");
const dots = document.querySelectorAll(".slider-dot");
let count = 0;
let width = 0;
let index = 0;

function init() {
  let width = sliderWrapper.offsetWidth;
  sliderLine.style.width = width * img.length + "px";
  img.forEach((elem) => {
    elem.style.width = width + "px";
    elem.style.height = "auto";
  });
}

window.addEventListener("resize", init);

init();

const thisSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove("active");
  }
  dots[index].classList.add("active");
};

buttonNext.addEventListener("click", nextSlide);

function nextSlide() {
  count++;
  index++;
  if ((count >= img.length, index >= img.length)) {
    count = 0;
    index = 0;
  }
  rollSlider();
  thisSlide(index);
}

function rollSlider() {
  let width = sliderWrapper.offsetWidth;
  sliderLine.style.left = -count * width + "px";
}

buttonPrev.addEventListener("click", PrevSlide);

function PrevSlide() {
  count--;
  index--;
  if ((count < 0, index < 0)) {
    count = img.length - 1;
    index = img.length - 1;
  }
  rollSlider();
  thisSlide(index);
}

dots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    let width = sliderWrapper.offsetWidth;
    count = width * dotIndex;
    sliderLine.style.left = -count + "px";
    index = dotIndex;

    thisSlide(index);
  });
});
