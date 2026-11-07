const retos = [
  { carpeta: "qr-code-component" },
  { carpeta: "blog-preview-card" },
  { carpeta: "social-links-profile" },
  { carpeta: "recipe-page" },
  { carpeta: "product-preview-card-component", preview: "design/desktop-preview.jpg" },
  { carpeta: "four-card-feature-section", preview: "design/desktop-preview.jpg" },
  { carpeta: "social-proof-section", preview: "design/desktop-preview.jpg" },
  { carpeta: "testimonials-grid-section" },
  { carpeta: "article-preview-component", preview: "design/desktop-preview.jpg" },
  { carpeta: "faq-accordion" },
  { carpeta: "base-apparel-coming-soon" },
  { carpeta: "beginner-html-site-styled", preview: null },
];

const repo = "https://github.com/CristianRoa33/frontend-mentor-challenges/tree/main";

function formatearNombre(carpeta) {
  return carpeta
    .split("-")
    .map((palabra) => palabra[0].toUpperCase() + palabra.slice(1))
    .join(" ");
}

function crearImagen(reto) {
  const nombre = formatearNombre(reto.carpeta);

  if (reto.preview === null) {
    return `<div class="sin-preview">${nombre}</div>`;
  }

  const ruta = reto.preview ?? "preview.jpg";
  return `<img src="${reto.carpeta}/${ruta}" alt="Vista previa de ${nombre}" loading="lazy" />`;
}

const galeria = document.getElementById("galeria");

galeria.innerHTML = retos
  .map(
    (reto) => `
    <article class="card">
      ${crearImagen(reto)}
      <div class="card-body">
        <h2>${formatearNombre(reto.carpeta)}</h2>
        <div class="botones">
          <a class="btn-demo" href="${reto.carpeta}/index.html" target="_blank">Ver demo</a>
          <a class="btn-codigo" href="${repo}/${reto.carpeta}" target="_blank">Ver código</a>
        </div>
      </div>
    </article>
  `
  )
  .join("");

document.getElementById("total").textContent = retos.length;