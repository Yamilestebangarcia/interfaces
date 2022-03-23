const menu = document.getElementById("menu");

document.addEventListener("click", (e) => {
  if (e.target.id === "hamburgesa") {
    menu.classList.toggle("desactivado");
  }
});
