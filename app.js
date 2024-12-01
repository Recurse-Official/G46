// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
  
  // Testimonials Slider (Simple Carousel)
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const totalTestimonials = testimonials.length;
  
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
  }
  
  function prevTestimonial() {
    currentTestimonial =
      (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
  }
  
  // Automatically change testimonial every 5 seconds
  setInterval(nextTestimonial, 5000);
  
  // Initialize first testimonial
  showTestimonial(currentTestimonial);
  
  // Form Validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Show confirmation and reset the form
    alert('Thank you for reaching out! We will get back to you shortly.');
    form.reset();
  });
  
  // Add hover effect on resource cards
  const resourceCards = document.querySelectorAll('.resource');
  resourceCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });
  });
  
  // Button hover animation
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'translateY(-3px)';
      button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    button.addEventListener('mouseout', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = 'none';
    });
  });
  