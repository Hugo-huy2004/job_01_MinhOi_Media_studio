(function (window) {
  class PriceGridReset {
    constructor(options = {}) {
      this.selector = options.selector || '.price-grid';
    }

    init() {
      document.querySelectorAll(this.selector).forEach(grid => {
        grid.scrollLeft = 0;
      });
    }
  }

  window.MinhOi.PriceGridReset = PriceGridReset;
})(window);
