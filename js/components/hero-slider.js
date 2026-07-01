(function (window) {
  class HeroSlider {
    constructor(options = {}) {
      this.selector = options.selector || '.hero-slide';
      this.activeClass = options.activeClass || 'active';
      this.interval = options.interval || 3000;
      this.slides = [];
      this.currentSlide = 0;
    }

    init() {
      this.slides = Array.from(document.querySelectorAll(this.selector));

      if (this.slides.length === 0) return;

      this.loadBackground(this.slides[1]);
      window.setInterval(() => this.next(), this.interval);
    }

    next() {
      this.slides[this.currentSlide].classList.remove(this.activeClass);
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.loadBackground(this.slides[this.currentSlide]);
      this.loadBackground(this.slides[(this.currentSlide + 1) % this.slides.length]);
      this.slides[this.currentSlide].classList.add(this.activeClass);
    }

    loadBackground(slide) {
      if (!slide || !slide.dataset.bg) return;

      slide.style.backgroundImage = `url('${slide.dataset.bg}')`;
      slide.removeAttribute('data-bg');
    }
  }

  window.MinhOi.HeroSlider = HeroSlider;
})(window);
