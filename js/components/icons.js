(function (window) {
  class IconManager {
    init() {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  }

  window.MinhOi.IconManager = IconManager;
})(window);
