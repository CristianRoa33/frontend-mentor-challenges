const retos = [
  "qr-code-component",
  "blog-preview-card",
  "social-links-profile",
  "recipe-page",
  "product-preview-card-component",
  "four-card-feature-section",
  "social-proof-section",
  "testimonials-grid-section",
  "article-preview-component",
  "faq-accordion",
  "base-apparel-coming-soon",
  "beginner-html-site-styled",
];

const repo = "https://github.com/CristianRoa33/frontend-mentor-challenges/tree/main";

function formatearNombre(carpeta) {
  return carpeta
    .split("-")
    .map((palabra) => palabra[0].toUpperCase() + palabra.slice(1))
    .join(" ");
}

const galeria = document.getElementById("galeria");

galeria.innerHTML = retos
  .map(
    (carpeta) => `
    <article class="card">
      <img src="${carpeta}/preview.jpg" alt="Vista previa de ${formatearNombre(carpeta)}" loading="lazy" />
      <div class="card-body">
        <h2>${formatearNombre(carpeta)}</h2>
        <div class="botones">
          <a class="btn-demo" href="${carpeta}/index.html" target="_blank">Ver demo</a>
          <a class="btn-codigo" href="${repo}/${carpeta}" target="_blank">Ver código</a>
        </div>
      </div>
    </article>
  `
  )
  .join("");

document.getElementById("total").textContent = retos.length;