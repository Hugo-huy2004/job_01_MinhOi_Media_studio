document.addEventListener('DOMContentLoaded', () => {

  if (window.lucide) {
    window.lucide.createIcons();
  }

  const loadImage = (image) => {
    if (!image.dataset.src) return;

    image.addEventListener('load', () => {
      image.classList.add('is-loaded');
    }, { once: true });

    image.src = image.dataset.src;
    image.removeAttribute('data-src');
  };

  const lazyImages = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window && lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        loadImage(entry.target);
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: '1400px 0px',
      threshold: 0.01
    });

    lazyImages.forEach(image => imageObserver.observe(image));
  } else {
    lazyImages.forEach(loadImage);
  }

  const warmUpLazyImages = () => {
    lazyImages.forEach(loadImage);
  };

  if (lazyImages.length > 0) {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(warmUpLazyImages, { timeout: 1800 });
    } else {
      window.setTimeout(warmUpLazyImages, 900);
    }
  }

  const loadHeroBackground = (slide) => {
    if (!slide || !slide.dataset.bg) return;

    slide.style.backgroundImage = `url('${slide.dataset.bg}')`;
    slide.removeAttribute('data-bg');
  };

  const tiltCards = document.querySelectorAll('[data-tilt-card]');
  const canHover = window.matchMedia('(hover: hover)').matches;
  if (window.VanillaTilt && tiltCards.length > 0 && canHover) {
    const initTiltCard = (card) => {
      if (card.dataset.tiltReady) return;

      window.VanillaTilt.init(card, {
        max: 5,
        speed: 600,
        glare: true,
        'max-glare': 0.12,
        scale: 1.01
      });
      card.dataset.tiltReady = 'true';
    };

    if ('IntersectionObserver' in window) {
      const tiltObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          initTiltCard(entry.target);
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: '260px 0px',
        threshold: 0.05
      });

      tiltCards.forEach(card => tiltObserver.observe(card));
    } else {
      tiltCards.forEach(initTiltCard);
    }
  }

  const animateServiceItem = (element, delay = 0) => {
    if (!window.anime || element.dataset.animated) return;

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
  };

  const promoElements = document.querySelectorAll('.single-service-item');
  if (window.anime && promoElements.length > 0) {
    promoElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(22px) scale(0.98)';
    });

    if ('IntersectionObserver' in window) {
      const promoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const itemIndex = Array.from(promoElements).indexOf(entry.target);
          animateServiceItem(entry.target, Math.min(itemIndex, 3) * 65);
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: '160px 0px',
        threshold: 0.12
      });

      promoElements.forEach(element => promoObserver.observe(element));
    } else {
      promoElements.forEach((element, index) => animateServiceItem(element, index * 65));
    }
  }

  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    loadHeroBackground(slides[1]);

    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      loadHeroBackground(slides[currentSlide]);
      loadHeroBackground(slides[(currentSlide + 1) % slides.length]);
      slides[currentSlide].classList.add('active');
    }, 3000);
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      faqItems.forEach(otherItem => otherItem.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  const videoCards = document.querySelectorAll('.gallery-card[data-video]');
  const videoOverlay = document.getElementById('videoOverlay');
  const videoIframe = document.getElementById('videoIframe');

  if (videoOverlay) {
    videoCards.forEach(card => {
      card.addEventListener('click', () => {
        const videoSrc = card.getAttribute('data-video');
        videoIframe.src = videoSrc;
        videoOverlay.style.display = 'flex';
      });
    });

    videoOverlay.addEventListener('click', (e) => {
      if (e.target === videoOverlay) {
        videoOverlay.style.display = 'none';
        videoIframe.src = '';
      }
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
      revealObserver.observe(reveal);
    });
  }

  const priceGrids = document.querySelectorAll('.price-grid');
  priceGrids.forEach(grid => {
    grid.scrollLeft = 0;
  });

});
