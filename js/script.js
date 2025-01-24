document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    perView: 4,
    gap: 20,
    breakpoints: {
      1024: { perView: 3 },
      768: { perView: 2 },
      480: { perView: 1 },
    },
    autoplay: 2000,
  }).mount();
});
