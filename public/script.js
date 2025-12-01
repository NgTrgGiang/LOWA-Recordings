// ===================================
// LOWA Recordings - Interactive Features
// ===================================

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Portfolio filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filter = button.dataset.filter;

    portfolioItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 10);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Ẩn tất cả elements trước khi observe
document.querySelectorAll('.card, .service-card, .pricing-card, .portfolio-item, .section-header').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
});

// Observe all sections and cards
document.querySelectorAll('.section, .card, .service-card, .pricing-card, .portfolio-item, .section-header').forEach(el => {
  observer.observe(el);
});

// Form validation and submission
const bookingForm = document.getElementById('booking-form');
const contactForm = document.getElementById('contact-form');

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[0-9]{10,11}$/;
  return re.test(phone.replace(/[\s-]/g, ''));
}

function showFormMessage(form, message, isSuccess) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message ${isSuccess ? 'success' : 'error'}`;
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 8px;
    background: ${isSuccess ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)'};
    border: 1px solid ${isSuccess ? '#4CAF50' : '#F44336'};
    color: ${isSuccess ? '#4CAF50' : '#F44336'};
    text-align: center;
  `;

  // Remove existing message if any
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  form.appendChild(messageDiv);

  // Auto remove after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = bookingForm.querySelector('#booking-name').value.trim();
    const email = bookingForm.querySelector('#booking-email').value.trim();
    const phone = bookingForm.querySelector('#booking-phone').value.trim();
    const date = bookingForm.querySelector('#booking-date').value;
    const time = bookingForm.querySelector('#booking-time').value;
    const service = bookingForm.querySelector('#booking-service').value;

    // Validation
    if (!name || !email || !phone || !date || !time || !service) {
      showFormMessage(bookingForm, 'Vui lòng điền đầy đủ thông tin!', false);
      return;
    }

    if (!validateEmail(email)) {
      showFormMessage(bookingForm, 'Email không hợp lệ!', false);
      return;
    }

    if (!validatePhone(phone)) {
      showFormMessage(bookingForm, 'Số điện thoại không hợp lệ!', false);
      return;
    }

    // Success
    showFormMessage(bookingForm, 'Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm.', true);
    bookingForm.reset();
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('#contact-name').value.trim();
    const email = contactForm.querySelector('#contact-email').value.trim();
    const message = contactForm.querySelector('#contact-message').value.trim();

    // Validation
    if (!name || !email || !message) {
      showFormMessage(contactForm, 'Vui lòng điền đầy đủ thông tin!', false);
      return;
    }

    if (!validateEmail(email)) {
      showFormMessage(contactForm, 'Email không hợp lệ!', false);
      return;
    }

    // Success
    showFormMessage(contactForm, 'Tin nhắn đã được gửi! Chúng tôi sẽ phản hồi sớm nhất.', true);
    contactForm.reset();
  });
}

// Audio player controls
const audioPlayers = document.querySelectorAll('.audio-player');

audioPlayers.forEach(player => {
  const audio = player.querySelector('audio');
  const playBtn = player.querySelector('.play-btn');
  const progressBar = player.querySelector('.progress-bar');
  const progressFill = player.querySelector('.progress-fill');
  const currentTimeEl = player.querySelector('.current-time');
  const durationEl = player.querySelector('.duration');

  if (!audio || !playBtn) return;

  // Play/Pause toggle
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playBtn.innerHTML = '<i class="pause-icon">⏸</i>';
    } else {
      audio.pause();
      playBtn.innerHTML = '<i class="play-icon">▶</i>';
    }
  });

  // Update progress bar
  audio.addEventListener('timeupdate', () => {
    if (progressFill && audio.duration) {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = `${progress}%`;
    }

    if (currentTimeEl) {
      currentTimeEl.textContent = formatTime(audio.currentTime);
    }
  });

  // Set duration
  audio.addEventListener('loadedmetadata', () => {
    if (durationEl) {
      durationEl.textContent = formatTime(audio.duration);
    }
  });

  // Seek functionality
  if (progressBar) {
    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audio.currentTime = percent * audio.duration;
    });
  }

  // Reset play button when audio ends
  audio.addEventListener('ended', () => {
    playBtn.innerHTML = '<i class="play-icon">▶</i>';
  });
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Pricing card hover effect
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    pricingCards.forEach(c => {
      if (c !== card) {
        c.style.opacity = '0.6';
      }
    });
  });

  card.addEventListener('mouseleave', () => {
    pricingCards.forEach(c => {
      c.style.opacity = '1';
    });
  });
});

// Set minimum date for booking (today)
const bookingDateInput = document.getElementById('booking-date');
if (bookingDateInput) {
  const today = new Date().toISOString().split('T')[0];
  bookingDateInput.setAttribute('min', today);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-background');

  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Counter animation for stats (if you add stats section)
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Initialize counters when they come into view
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

console.log('🎵 LOWA Recordings - Website loaded successfully!');

// Pricing Tabs with Auto-Rotation
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.pricing-tab');
  const images = document.querySelectorAll('.pricing-image');

  let currentIndex = 0;
  let autoRotateInterval;
  let isHovering = false;

  // Function to switch to a specific tab
  function switchTab(index) {
    // Remove active class from all
    tabs.forEach(t => t.classList.remove('active'));
    images.forEach(img => img.classList.remove('active'));

    // Add active class to current
    tabs[index].classList.add('active');
    const tabId = tabs[index].getAttribute('data-tab');
    document.querySelector(`[data-content="${tabId}"]`).classList.add('active');
  }

  // Auto-rotate function
  function autoRotate() {
    if (!isHovering) {
      currentIndex = (currentIndex + 1) % tabs.length; // Loop: 0 -> 1 -> 2 -> 0
      switchTab(currentIndex);
    }
  }

  // Start auto-rotation (every 3 seconds)
  function startAutoRotate() {
    autoRotateInterval = setInterval(autoRotate, 3000);
  }

  // Stop auto-rotation
  function stopAutoRotate() {
    clearInterval(autoRotateInterval);
  }

  // Handle hover events
  tabs.forEach((tab, index) => {
    tab.addEventListener('mouseenter', function () {
      isHovering = true;
      stopAutoRotate();
      currentIndex = index;
      switchTab(index);
    });

    tab.addEventListener('mouseleave', function () {
      isHovering = false;
      startAutoRotate();
    });
  });

  // Start auto-rotation on page load
  startAutoRotate();
});