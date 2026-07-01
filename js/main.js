document.addEventListener('DOMContentLoaded', () => {

  if (window.lucide) {
    window.lucide.createIcons();
  }

  const tiltCards = document.querySelectorAll('[data-tilt-card]');
  const canHover = window.matchMedia('(hover: hover)').matches;
  if (window.VanillaTilt && tiltCards.length > 0 && canHover) {
    window.VanillaTilt.init(tiltCards, {
      max: 5,
      speed: 600,
      glare: true,
      'max-glare': 0.12,
      scale: 1.01
    });
  }

  const promoModal = document.getElementById('singlePromoModal');
  if (promoModal) {
    const promoCard = promoModal.querySelector('.promo-modal-card');
    const closeButtons = promoModal.querySelectorAll('[data-promo-close]');

    if (window.anime && promoCard) {
      window.anime({
        targets: promoCard,
        opacity: [0, 1],
        translateY: [28, 0],
        scale: [0.94, 1],
        duration: 720,
        easing: 'easeOutCubic'
      });
    }

    const closePromo = () => {
      if (promoModal.classList.contains('is-hidden')) return;

      if (window.anime && promoCard) {
        window.anime({
          targets: promoCard,
          opacity: [1, 0],
          translateY: [0, 18],
          scale: [1, 0.96],
          duration: 260,
          easing: 'easeInCubic',
          complete: () => promoModal.classList.add('is-hidden')
        });
      } else {
        promoModal.classList.add('is-hidden');
      }
    };

    closeButtons.forEach(button => {
      button.addEventListener('click', closePromo);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closePromo();
      }
    });
  }

  const singlesSection = document.querySelector('.pricing-section-singles');
  if (window.anime && singlesSection) {
    const promoElements = singlesSection.querySelectorAll('.single-service-item');
    promoElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(22px) scale(0.98)';
    });

    const promoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        window.anime({
          targets: promoElements,
          opacity: [0, 1],
          translateY: [22, 0],
          scale: [0.98, 1],
          delay: window.anime.stagger(85),
          duration: 720,
          easing: 'easeOutCubic'
        });

        observer.unobserve(entry.target);
      });
    }, { threshold: 0.22 });

    promoObserver.observe(singlesSection);
  }

  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
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
