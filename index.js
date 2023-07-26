const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", function() {
    updateImage();
  });

function updateImage() {
    bgImageEl.style.opacity = 1 - window.pageYOffset / 800;
    bgImageEl.style.backgroundSize = (111 - window.pageYOffset / 30) + "%";
}