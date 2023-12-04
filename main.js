const header = document.querySelector("header");
const hambugerMenu = document.querySelector(".hamburger");
const links = document.querySelectorAll("header nav>ul>*");

hambugerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

links.forEach((link) =>
  link.addEventListener("click", () => header.classList.remove("active"))
);
