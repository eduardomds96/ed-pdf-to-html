// script.js
function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Glossário interativo
document.addEventListener("DOMContentLoaded", () => {
  const termos = {
    incógnita: "Valor a ser descoberto em uma equação.",
    coeficiente: "Número que multiplica a variável.",
    "termo independente": "Valor constante na equação.",
    "forma geral":
      "É denominada forma geral, forma normal ou, ainda, forma reduzida a equação do 2º grau que esteja escrita na forma de ax² + bx + c = 0, com a ≠ 0.",
  };

  document.querySelectorAll(".glossario-termo").forEach((el) => {
    el.title = termos[el.dataset.term];
  });
});
