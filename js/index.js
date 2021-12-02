//CONSTANTES & VARIABLES
const $form = document.querySelector(".form-contacto"),
  $inputs = document.querySelectorAll(".form-contacto [required]"),
  $loader = document.querySelector(".form-contacto-loader"),
  $response = document.querySelector(".form-contacto-response");

//FUNCIONES
const formValidation = () => {
  $inputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("form-contacto-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });
};

//EVENTOS
document.addEventListener("DOMContentLoaded", (e) => {
  formValidation();
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-menu") || e.target.matches(".btn-menu *")) {
    document.querySelector(".panel").classList.toggle("is-active");
  }

  if (e.target.matches(".menu a")) {
    document.querySelector(".panel").classList.remove("is-active");
  }

  if (e.target.matches(".btn-dark-mode *")) {
    const $btnDarkMode = document.querySelector(".btn-dark-mode i");
    if ($btnDarkMode.classList.contains("fa-sun")) {
      $btnDarkMode.classList.remove("fa-sun");
      $btnDarkMode.classList.add("fa-moon");
    } else {
      $btnDarkMode.classList.remove("fa-moon");
      $btnDarkMode.classList.add("fa-sun");
    }
  }
});

document.addEventListener("keyup", (e) => {
  if (e.target.matches(".form-contacto [required]")) {
    let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern;

    if (pattern && $input.value !== "") {
      let regex = new RegExp(pattern);
      return !regex.exec($input.value)
        ? document.getElementById($input.name).classList.add("is-active")
        : document.getElementById($input.name).classList.remove("is-active");
    }

    if (!pattern) {
      return $input.value === ""
        ? document.getElementById($input.name).classList.add("is-active")
        : document.getElementById($input.name).classList.remove("is-active");
    }
  }
});

document.addEventListener("submit", (e) => {
  e.preventDefault();

  $loader.classList.remove("none");

  fetch("https://formsubmit.co/ajax/edabundis@gmail.com", {
    method: "POST",
    body: new FormData(e.target),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $response.innerHTML = `<p> ${json.message}</p>`;
      $form.reset();
    })
    .catch((err) => {
      let message =
        err.statusText || "Ocurrió un error al enviar, intenta de nuevo";
      $response.innerHTML = `<p>Error: ${err.status}: ${message}</p>`;
    })
    .finally(() => {
      setTimeout(() => {
        $response.classList.add("none");
        $response.innerHTML = "";
      }, 3000);
    });
});

window.addEventListener("scroll", (e) => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 200) {
    document.querySelector(".btn-inicio").classList.remove("none");
  } else {
    document.querySelector(".btn-inicio").classList.add("none");
  }
});
