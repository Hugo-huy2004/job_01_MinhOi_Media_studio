(function (window) {
  class RevealOnScroll {
    constructor(options = {}) {
      this.selector = options.selector || '.reveal';
      this.activeClass = options.activeClass || 'active';
      this.threshold = options.threshold || 0.1;
      this.elements = [];
    }

    init() {
      this.elements = Array.from(document.querySelectorAll(this.selector));

      if (this.elements.length === 0) return;

      if ('IntersectionObserver' in window) {
        this.observeElements();
      } else {
        this.elements.forEach(element => element.classList.add(this.activeClass));
      }
    }

    observeElements() {
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(this.activeClass);
          }
        });
      }, { threshold: this.threshold });

      this.elements.forEach(element => revealObserver.observe(element));
    }
  }

  window.MinhOi.RevealOnScroll = RevealOnScroll;
})(window);
