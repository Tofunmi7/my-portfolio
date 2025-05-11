function updateDateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  const dateTimeElement = document.getElementById('date-time');
  if (dateTimeElement) {
    dateTimeElement.textContent = dateTimeString;
  }
}

setInterval(updateDateTime, 1000);
window.onload = updateDateTime;

// Navigation menu toggle for mobile
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Dark mode toggle switch
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;
  const toggleLabel = document.querySelector('.toggle-label');

  // Load saved preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    if (darkModeToggle) {
      darkModeToggle.checked = true;
    }
    if (toggleLabel) {
      toggleLabel.textContent = 'Lightmode';
    }
  } else {
    if (toggleLabel) {
      toggleLabel.textContent = 'Darkmode';
    }
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
      if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        if (toggleLabel) {
          toggleLabel.textContent = 'Lightmode';
        }
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        if (toggleLabel) {
          toggleLabel.textContent = 'Darkmode';
        }
      }
    });
  }
});

// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    });
  }

  // Optional: Auto slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 5000);

  // Contact form submission handling
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isSuccess = Math.random() > 0.3; // 70% chance success

      if (isSuccess) {
        formFeedback.textContent = 'Message sent successfully!';
        formFeedback.className = 'form-feedback success';
        contactForm.reset();
      } else {
        formFeedback.textContent = 'Failed to send message. Please try again.';
        formFeedback.className = 'form-feedback error';
      }

      setTimeout(() => {
        formFeedback.textContent = '';
        formFeedback.className = 'form-feedback';
      }, 3000);
    });
  }
});