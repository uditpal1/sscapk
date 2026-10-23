// SSC GD Mock Test - Landing Page Script
// Simple interactions for the landing page

document.addEventListener('DOMContentLoaded', function() {

  // ====== Smooth scroll for anchor links (extra safety) ======
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ====== Download button tracking ======
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      // Agar link placeholder hai toh alert dikhao
      const href = this.getAttribute('href');
      if (href.includes('YOUR-USERNAME') || href.includes('YOUR-REPO')) {
        e.preventDefault();
        alert('Download link abhi configure nahi kiya gaya.\n\nApka APK GitHub par upload karke, is button ka link update karein.\n\nFile: index.html -> id="downloadBtn" -> href attribute');
      }
    });
  }

  // ====== Animate highlights on scroll (simple reveal) ======
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Apply to feature/subject/step cards
  document.querySelectorAll('.feature-card, .subject-card, .step-card, .highlight-item, .contact-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    observer.observe(el);
  });

  // ====== Navbar background on scroll ======
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    } else {
      navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)';
    }
    lastScroll = currentScroll;
  });
});
