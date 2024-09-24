const img = document.querySelectorAll(".imagem-lazy img");

const observador = new IntersectionObserver((entradas, observador) => {
  entradas.forEach((entra) => {
    if (!entra.isIntersecting) return;

    const imagem = entra.target;

    imagem.src = imagem.src.replace("&w=10&", "&w=2000&");

    observador.unobserve(imagem);
  });
}, {});

img.forEach((imagem) => {
  observador.observe(imagem);
});
