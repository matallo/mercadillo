class Gallery {
  constructor (options) {
    if (options.galleryEl === void 0) {
      throw new Error("galleryEl option is required");
    }

    this._galleryEl = options.galleryEl;
    this._galleryImageEl = this._galleryEl.querySelector(".js-Gallery-image");
  }

  init () {
    this._initEvents();
  }

  _initEvents () {
    [...this._galleryEl.querySelectorAll(".js-Gallery-link")].forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();

        this._galleryImageEl.src = e.target.src;
      });
    });
  }
}

export default Gallery;
