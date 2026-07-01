(function (window) {
  class PricingAnimation {
    constructor(options = {}) {
      this.selector = options.selector || '.single-service-item';
      this.rootMargin = options.rootMargin || '160px 0px';
      this.elements = [];
    }

    init() {
      this.elements = Array.from(document.querySelectorAll(this.selector));

      if (!window.anime || this.elements.length === 0) return;

      this.prepareElements();

      if ('IntersectionObserver' in window) {
        this.observeElements();
      } else {
        this.elements.forEach((element, index) => this.animateElement(element, index * 65));
      }
    }

    prepareElements() {
      this.elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(22px) scale(0.98)';
      });
    }

    observeElements() {
      const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const itemIndex = this.elements.indexOf(entry.target);
          this.animateElement(entry.target, Math.min(itemIndex, 3) * 65);
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: this.rootMargin,
        threshold: 0.12
      });

      this.elements.forEach(element => animationObserver.observe(element));
    }

    animateElement(element, delay = 0) {
      if (element.dataset.animated) return;

      element.dataset.animated = 'true';
      window.anime({
        targets: element,
        opacity: [0, 1],
        translateY: [22, 0],
        scale: [0.98, 1],
        delay,
        duration: 620,
        easing: 'easeOutCubic'
      });
    }
  }

  window.MinhOi.PricingAnimation = PricingAnimation;
})(window);
