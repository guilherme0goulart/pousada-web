const animacao = document.querySelectorAll("[data-anima]");
const anima = "animate";

function animaScroll() {
  const topoTela = window.pageYOffset + (window.innerHeight * 3) / 4;
  animacao.forEach(function (element) {
    if (topoTela > element.offsetTop) {
      element.classList.add(anima);
    } else {
      element.classList.remove(anima);
    }
  });
}
animaScroll();

if (animacao.length) {
  window.addEventListener("scroll", function () {
    animaScroll();
  });
}
