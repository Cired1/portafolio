
//Proyectos
const data = [
  {
    name: "FilmRed",
    description: "Enciclopedia de películas y series de tv, creada con información de la API de TMDB.",
    path_image: "assets/projects/filmred.png",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Redux Toolkit", "TMDB API"],
    demo: "https://filmred-cired.netlify.app/",
    code: "https://github.com/Cired1/filmred",
  },
  {
    name: "Fake Store",
    description: "Aplicación web que simula el comportamiento de un carrito de compras con la información obtenida a través de la Fake Store API.",
    path_image: "assets/projects/fakestore.png",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Fake Store API"],
    demo: "https://fakestore-cired.netlify.app/",
    code: "https://github.com/Cired1/fakestore",
  },
  {
    name: "Covid Tracker",
    description: "Aplicación Web que tiene la funcionalidad de mostrar diferentes datos sobre el Covid-19 alrededor del mundo.",
    path_image: "assets/projects/covidtracker.png",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "COVID-19 API"],
    demo: "https://trackercov-cired.netlify.app ",
    code: "https://github.com/Cired1/covid-tracker",
  },
  {
    name: "Crypto Data",
    description: "Aplicación Web donde puede encontrar las últimas noticias sobre el mundo de las criptomonedas, así como ver el precio historico de cada una en periodos de tiempo determinados.",
    path_image: "assets/projects/cryptodata.png",
    tech: ["HTML5", "Bootstrap", "JavaScript", "React", "CoinStats API"],
    demo: "https://cryptodata-cired.netlify.app/",
    code: "https://github.com/Cired1/crypto-data",
  },
  /* {
    name: "Pokedex",
    description: "Pokedex creada con React, en ella se encuentra información variada de los distintos Pokemon.",
    path_image: "assets/projects/pokedex.png",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Pokemon API"],
    demo: "https://pokedex2-cired.netlify.app",
    code: "https://github.com/Cired1/pokedex-react",
  }, */
  /* {
    name: "Blog",
    description: "Blog creado con React donde se muestran artículos a traves de la API de Wordpress.",
    path_image: "assets/projects/blog-css.png",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Wordpress API"],
    demo: "https://blog-css.netlify.app/",
    code: "https://github.com/Cired1/blog-react",
  }, */
];

//Funciones

const loadProjects = () => {
  const $container = document.getElementById("projects");
  const $template = document.getElementById("template-project").content;
  const $fragment = document.createDocumentFragment();

  data.map((project) => {
    $template.querySelector(".project-image").src = project.path_image;
    $template.querySelector(".project-image").alt = project.name;
    $template.querySelector(".project-title").textContent = project.name;
    $template.querySelector(".project-description").textContent =
      project.description;

    let skillList = "";
    project.tech.forEach((skill) => {
      skillList += `<li>${skill}</li>`;
    });
    $template.querySelector(".project-skill-list").innerHTML = skillList;

    let codeLink = `<li><a href=${project.code} target="_blank" rel="noopener"><i
    class="fab fa-github"></i> Codígo</a></li>`;
    let demoLink = `<li><a href=${project.demo} target="_blank" rel="noopener"><i
    class="fas fa-external-link-alt"></i> Demo</a></li>`;
    $template.querySelector(".project-links").innerHTML = codeLink + demoLink;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
    $container.appendChild($fragment);
  });
};


//Eventos

document.addEventListener("DOMContentLoaded", (e) => {
  document.documentElement.setAttribute("data-theme", "light");
  loadProjects();
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

