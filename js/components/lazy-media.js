(function (window) {
  class LazyMedia {
    constructor(options = {}) {
      this.selector = options.selector || 'img[data-src]';
      this.rootMargin = options.rootMargin || '1400px 0px';
      this.idleTimeout = options.idleTimeout || 1800;
      this.fallbackDelay = options.fallbackDelay || 900;
      this.images = [];
    }

    init() {
      this.images = Array.from(document.querySelectorAll(this.selector));

      if (this.images.length === 0) return;

      if ('IntersectionObserver' in window) {
        this.observeImages();
      } else {
        this.loadAll();
      }

      this.warmUpImages();
    }

    observeImages() {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          this.loadImage(entry.target);
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: this.rootMargin,
        threshold: 0.01
      });

      this.images.forEach(image => imageObserver.observe(image));
    }

    loadImage(image) {
      if (!image.dataset.src) return;

      image.addEventListener('load', () => {
        image.classList.add('is-loaded');
      }, { once: true });

      image.src = image.dataset.src;
      image.removeAttribute('data-src');
    }

    loadAll() {
      this.images.forEach(image => this.loadImage(image));
    }

    warmUpImages() {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => this.loadAll(), { timeout: this.idleTimeout });
      } else {
        window.setTimeout(() => this.loadAll(), this.fallbackDelay);
      }
    }
  }

  window.MinhOi.LazyMedia = LazyMedia;
})(window);
