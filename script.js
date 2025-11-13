// Lista de imágenes en minúscula
const slides = [
  { image: "images/img_1244.jpg" },
  { image: "images/img_1245.jpg" },
  { image: "images/img_1246.jpg" },
  { image: "images/img_1247.jpg" },
  { image: "images/img_1248.jpg" },
  { image: "images/img_1249.jpg" }
];

// Inicializa el fondo con la primera imagen
const bg = document.getElementById("background");
bg.style.backgroundImage = `url('')`;

// Miniaturas dinámicas
const thumbsContainer = document.getElementById("thumbnails");
slides.forEach(slide => {
  const thumb = document.createElement("div");
  thumb.className = "thumb";
  thumb.style.backgroundImage = `url('')`;
  thumb.dataset.img = slide.image;
  thumbsContainer.appendChild(thumb);

  thumb.addEventListener("click", () => {
    console.log("Clic en miniatura:", slide.image);
    bg.style.opacity = 0;
    setTimeout(() => {
      bg.style.backgroundImage = `url('')`;
      bg.style.opacity = 1;
    }, 400);
  });
});
