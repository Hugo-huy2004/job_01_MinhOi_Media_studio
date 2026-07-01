(function (window, document) {
  const scripts = [
    'js/core/namespace.js',
    'js/core/app.js',
    'js/components/icons.js',
    'js/components/lazy-media.js',
    'js/components/tilt-cards.js',
    'js/components/pricing-animation.js',
    'js/components/hero-slider.js',
    'js/components/faq-accordion.js',
    'js/components/video-overlay.js',
    'js/components/reveal-on-scroll.js',
    'js/components/price-grid-reset.js'
  ];

  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Cannot load script: ${src}`));
    document.head.appendChild(script);
  });

  const loadScripts = () => scripts.reduce(
    (chain, src) => chain.then(() => loadScript(src)),
    Promise.resolve()
  );

  const startApp = () => {
    const {
      App,
      IconManager,
      LazyMedia,
      TiltCards,
      PricingAnimation,
      HeroSlider,
      FaqAccordion,
      VideoOverlay,
      RevealOnScroll,
      PriceGridReset
    } = window.MinhOi;

    const app = new App([
      new IconManager(),
      new LazyMedia(),
      new TiltCards(),
      new PricingAnimation(),
      new HeroSlider(),
      new FaqAccordion(),
      new VideoOverlay(),
      new RevealOnScroll(),
      new PriceGridReset()
    ]);

    app.init();
  };

  document.addEventListener('DOMContentLoaded', () => {
    loadScripts()
      .then(startApp)
      .catch(error => {
        console.error(error);
      });
  });
})(window, document);
