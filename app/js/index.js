import Gallery from "./components/gallery";

document.addEventListener("DOMContentLoaded", () => {
  const gallery = new Gallery({
    galleryEl: document.querySelector(".js-Gallery")
  });

  gallery.init();
});
