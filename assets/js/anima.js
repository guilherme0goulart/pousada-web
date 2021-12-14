const animacao = document.querySelectorAll('[data-anima]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    animacao.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}
animeScroll();

if (animacao.length) {
    window.addEventListener('scroll', function () {
        animeScroll();
    });
}