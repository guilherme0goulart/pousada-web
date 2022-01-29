const slides = document.querySelectorAll('[data-js="carousel__item"]');
const nextButton = document.querySelector('[data-js="carousel__button--next"]');
const prevButton = document.querySelector('[data-js="carousel__button--prev"]');

let currentSlideIndex = 0;
const ultimoSlide = slides.length - 1;

const manipularSlides = (slideCorreto) => {
  slides.forEach((slide) => slide.classList.remove("carousel__item--visible"));
  slides[slideCorreto].classList.add("carousel__item--visible");
};

nextButton.addEventListener("click", () => {
  const slideCorreto =
    currentSlideIndex === ultimoSlide
      ? (currentSlideIndex = 0)
      : ++currentSlideIndex;
  manipularSlides(slideCorreto);
});

prevButton.addEventListener("click", () => {
  const slideCorreto =
    currentSlideIndex === 0
      ? (currentSlideIndex = ultimoSlide)
      : --currentSlideIndex;
  manipularSlides(slideCorreto);
});

const timeOutInf = () => {
  setTimeout(() => {
    const slideCorreto =
      currentSlideIndex === ultimoSlide
        ? (currentSlideIndex = 0)
        : ++currentSlideIndex;
    manipularSlides(slideCorreto);
    timeOutInf();
  }, 7000);
};
timeOutInf();
