(function (window) {
  class App {
    constructor(components = []) {
      this.components = components;
    }

    init() {
      this.components.forEach(component => {
        if (component && typeof component.init === 'function') {
          component.init();
        }
      });
    }
  }

  window.MinhOi.App = App;
})(window);
