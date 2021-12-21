document.addEventListener("DOMContentLoaded", (e) => {
  document.documentElement.setAttribute("data-theme", "light");
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-theme") || e.target.matches(".btn-theme *")) {
    let currentTheme = document.documentElement.getAttribute("data-theme");

    let switchToTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", switchToTheme);
  }

  if (e.target.matches(".btn-menu") || e.target.matches(".btn-menu *")) {
    document.querySelector(".panel").classList.toggle("is-active");
  }

  if (e.target.matches(".menu a")) {
    document.querySelector(".panel").classList.remove("is-active");
  }
});

window.addEventListener("scroll", (e) => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 200) {
    document.querySelector(".btn-return").classList.remove("none");
  } else {
    document.querySelector(".btn-return").classList.add("none");
  }
});
