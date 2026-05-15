const layout = {
  header: (activePage) => `
    <header class="navbar">
      <a href="index.html" class="navbar-brand">
        <img src="assets/images/Logo.png" alt="Mình Ơi Media" style="height: 60px; width: auto; object-fit: contain;">
      </a>
      <nav>
        <button class="mobile-menu-toggle" id="menuToggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div class="nav-links" id="navLinks">
          <a href="index.html" class="nav-link ${activePage === 'index' ? 'active' : ''}">Bảng Giá</a>
          <a href="photography.html" class="nav-link ${activePage === 'photography' ? 'active' : ''}">Photography</a>
          <a href="videography.html" class="nav-link ${activePage === 'videography' ? 'active' : ''}">Videography</a>
          <a href="faq.html" class="nav-link ${activePage === 'faq' ? 'active' : ''}">Hỏi Đáp</a>
          <a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
        </div>
      </nav>
    </header>
  `,
  footer: `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h2 class="brand-minh-oi" style="color: var(--white); margin-bottom: 5px;">
              <span style="font-size: 42px;">Mình Ơi</span>
              <span style="font-family: var(--font-sans); font-size: 14px; text-transform: uppercase; letter-spacing: 4px; display: block; opacity: 0.6; margin-top: -5px;">Media</span>
            </h2>
            <p class="footer-tagline">Lưu giữ khoảnh khắc bằng cảm xúc thật.</p>
          </div>
          
          <div class="footer-nav">
            <div class="footer-column">
              <h4>Quick Links</h4>
              <a href="index.html">Bảng Giá</a>
              <a href="photography.html">Photography</a>
              <a href="videography.html">Videography</a>
            </div>
            <div class="footer-column">
              <h4>Support</h4>
              <a href="faq.html">Hỏi Đáp</a>
              <a href="contact.html">Liên Hệ</a>
            </div>
            <div class="footer-column">
              <h4>Follow Us</h4>
              <div class="footer-social">
                <!-- Facebook -->
                <a href="https://www.facebook.com/share/1C8hGjaR5q/?mibextid=wwXIfr" target="_blank" title="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <!-- TikTok -->
                <a href="https://www.tiktok.com/@hmweddingphongsucuoi" target="_blank" title="TikTok">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
                <!-- Zalo -->
                <a href="https://zalo.me/0355144401" target="_blank" title="Zalo">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© 2026 Mình Ơi Media. Crafted with love for your wedding story.</p>
          <p style="margin-top: 10px; font-size: 10px; opacity: 0.6;">
            Designed and created by <a href="https://web.facebook.com/hugowishpax/" target="_blank" style="color: inherit; text-decoration: underline; opacity: 1;">Pet Hugo Wishpax Le</a>
          </p>
        </div>
      </div>
    </footer>
  `,
  inject: (activePage) => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) headerPlaceholder.innerHTML = layout.header(activePage);
    if (footerPlaceholder) footerPlaceholder.innerHTML = layout.footer;

    // Re-initialize mobile menu toggle after injection
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  }
};
