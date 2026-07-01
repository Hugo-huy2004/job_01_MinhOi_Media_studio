(function (window) {
  class FaqAccordion {
    constructor(options = {}) {
      this.itemSelector = options.itemSelector || '.faq-item';
      this.questionSelector = options.questionSelector || '.faq-question';
      this.openClasses = options.openClasses || ['open', 'active'];
      this.items = [];
    }

    init() {
      this.items = Array.from(document.querySelectorAll(this.itemSelector));

      if (this.items.length === 0) return;

      this.items.forEach(item => this.bindItem(item));
    }

    bindItem(item) {
      const question = item.querySelector(this.questionSelector);

      if (!question) return;

      question.addEventListener('click', () => {
        const isOpen = this.isOpen(item);
        this.closeAll();

        if (!isOpen) {
          this.open(item);
        }
      });
    }

    isOpen(item) {
      return this.openClasses.some(className => item.classList.contains(className));
    }

    open(item) {
      this.openClasses.forEach(className => item.classList.add(className));
    }

    closeAll() {
      this.items.forEach(item => {
        this.openClasses.forEach(className => item.classList.remove(className));
      });
    }
  }

  window.MinhOi.FaqAccordion = FaqAccordion;
})(window);
