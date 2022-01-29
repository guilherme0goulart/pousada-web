const lista = document.querySelectorAll(".menu__item");

function linkAtivo() {
  lista.forEach(
    (item) => item.classList.remove("active"),
    this.classList.add("active")
  );
}
lista.forEach((item) => item.addEventListener("click", linkAtivo));
