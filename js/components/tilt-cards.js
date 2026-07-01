(function (window) {
  class TiltCards {
    constructor(options = {}) {
      this.selector = options.selector || '[data-tilt-card]';
      this.rootMargin = options.rootMargin || '260px 0px';
      this.tiltOptions = options.tiltOptions || {
        max: 5,
        speed: 600,
        glare: true,
        'max-glare': 0.12,
        scale: 1.01
      };
      this.cards = [];
    }

    init() {
      this.cards = Array.from(document.querySelectorAll(this.selector));

      if (!window.VanillaTilt || this.cards.length === 0 || !this.canHover()) return;

      if ('IntersectionObserver' in window) {
        this.observeCards();
      } else {
        this.cards.forEach(card => this.initCard(card));
      }
    }

    canHover() {
      return window.matchMedia('(hover: hover)').matches;
    }

    observeCards() {
      const tiltObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          this.initCard(entry.target);
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: this.rootMargin,
        threshold: 0.05
      });

      this.cards.forEach(card => tiltObserver.observe(card));
    }

    initCard(card) {
      if (card.dataset.tiltReady) return;

      window.VanillaTilt.init(card, this.tiltOptions);
      card.dataset.tiltReady = 'true';
    }
  }

  window.MinhOi.TiltCards = TiltCards;
})(window);
