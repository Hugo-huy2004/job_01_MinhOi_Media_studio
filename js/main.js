document.addEventListener('DOMContentLoaded', () => {
  // Hero Slider
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 3000);
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all other items
      faqItems.forEach(otherItem => otherItem.classList.remove('open'));
      // Toggle current item
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Video Lightbox
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

  // Scroll Reveal Animation
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

  // Ensure pricing grids start at the beginning on mobile
  const priceGrids = document.querySelectorAll('.price-grid');
  priceGrids.forEach(grid => {
    grid.scrollLeft = 0;
  });

  // Pricing Tabs Logic
  const tabs = document.querySelectorAll('.pricing-tab');
  const contents = document.querySelectorAll('.pricing-content');

  if (tabs.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        // Update tabs
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update contents
        contents.forEach(content => {
          content.classList.remove('active');
          if (content.id === target) {
            content.classList.add('active');
          }
        });
      });
    });
  }
});
