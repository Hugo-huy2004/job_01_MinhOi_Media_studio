(function (window) {
  class VideoOverlay {
    constructor(options = {}) {
      this.cardSelector = options.cardSelector || '.gallery-card[data-video]';
      this.overlaySelector = options.overlaySelector || '#videoOverlay';
      this.iframeSelector = options.iframeSelector || '#videoIframe';
      this.cards = [];
      this.overlay = null;
      this.iframe = null;
    }

    init() {
      this.cards = Array.from(document.querySelectorAll(this.cardSelector));
      this.overlay = document.querySelector(this.overlaySelector);
      this.iframe = document.querySelector(this.iframeSelector);

      if (!this.overlay || !this.iframe || this.cards.length === 0) return;

      this.cards.forEach(card => {
        card.addEventListener('click', () => this.open(card.getAttribute('data-video')));
      });

      this.overlay.addEventListener('click', event => {
        if (event.target === this.overlay) {
          this.close();
        }
      });
    }

    open(videoSrc) {
      this.iframe.src = videoSrc;
      this.overlay.style.display = 'flex';
    }

    close() {
      this.overlay.style.display = 'none';
      this.iframe.src = '';
    }
  }

  window.MinhOi.VideoOverlay = VideoOverlay;
})(window);
