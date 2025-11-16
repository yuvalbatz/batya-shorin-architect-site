// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
let lastScroll = 0;

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

if (sections.length > 0 && navLinks.length > 0) {
    function highlightActiveSection() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}` || link.getAttribute('href') === `index.html#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
        alert('אנא מלא את כל השדות');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('אנא הזן כתובת אימייל תקינה');
        return;
    }
    
    // Phone validation (basic - Israeli format)
    const phoneRegex = /^0\d{1,2}-?\d{7}$/;
    if (!phoneRegex.test(formData.phone.replace(/-/g, ''))) {
        alert('אנא הזן מספר טלפון תקין');
        return;
    }
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('תודה! ההודעה נשלחה בהצלחה. אחזור אליך בהקדם.');
    
    // Reset form
    contactForm.reset();
    
    // In production, you would typically:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('תודה! ההודעה נשלחה בהצלחה.');
    //     contactForm.reset();
    // })
    // .catch(error => {
    //     alert('אירעה שגיאה. אנא נסה שוב מאוחר יותר.');
    // });
    });
}

// Project cards hover effect enhancement and click navigation
const projectCards = document.querySelectorAll('.project-card');

if (projectCards.length > 0) {
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Navigate to project detail page on click
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            if (projectId) {
                window.location.href = `project-detail.html?id=${projectId}`;
            }
        });
    });
}

// Intersection Observer for fade-in animations (optional enhancement)
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

// Observe project cards and about section
const animatedElements = document.querySelectorAll('.project-card, .about-content, .contact-content');
if (animatedElements.length > 0) {
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Close mobile menu when clicking outside
if (navMenu && navToggle) {
    document.addEventListener('click', function(e) {
        const isClickInsideNav = navMenu.contains(e.target) || navToggle.contains(e.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Prevent form submission on Enter key in textarea (allow Shift+Enter for new line)
const messageTextarea = document.getElementById('message');
if (messageTextarea) {
    messageTextarea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            // Allow normal Enter behavior in textarea
            // Form will only submit on button click
        }
    });
}

// Reviews Slider with Automatic Transition
const reviewsSliderTrack = document.getElementById('reviewsSliderTrack');
const reviewsIndicators = document.getElementById('reviewsIndicators');

if (reviewsSliderTrack && reviewsIndicators) {
    const reviewCards = reviewsSliderTrack.querySelectorAll('.review-card');
    const totalReviews = reviewCards.length;
    let currentReview = 0;
    let autoPlayInterval = null;
    const TRANSITION_INTERVAL = 7000; // 7 seconds

    // Create indicators
    reviewCards.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = 'review-indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.setAttribute('data-review-index', index);
        indicator.setAttribute('aria-label', `עבור לביקורת ${index + 1}`);
        indicator.addEventListener('click', () => goToReview(index));
        reviewsIndicators.appendChild(indicator);
    });

    // Update slider position
    function updateSlider() {
        const translateX = -currentReview * 100;
        reviewsSliderTrack.style.transform = `translateX(${translateX}%)`;

        // Update indicators
        const indicators = reviewsIndicators.querySelectorAll('.review-indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentReview) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Go to specific review
    function goToReview(index) {
        if (index >= 0 && index < totalReviews) {
            currentReview = index;
            updateSlider();
            resetAutoPlay();
        }
    }

    // Next review
    function nextReview() {
        currentReview = (currentReview + 1) % totalReviews;
        updateSlider();
    }

    // Previous review
    function prevReview() {
        currentReview = (currentReview - 1 + totalReviews) % totalReviews;
        updateSlider();
    }

    // Start auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextReview, TRANSITION_INTERVAL);
    }

    // Reset auto-play (restart timer)
    function resetAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
        startAutoPlay();
    }

    // Pause auto-play on hover
    const reviewsContainer = document.querySelector('.reviews-slider-container');
    if (reviewsContainer) {
        reviewsContainer.addEventListener('mouseenter', () => {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        });

        reviewsContainer.addEventListener('mouseleave', () => {
            startAutoPlay();
        });
    }

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    reviewsSliderTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }, { passive: true });

    reviewsSliderTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextReview(); // Swipe left (RTL: next)
            } else {
                prevReview(); // Swipe right (RTL: previous)
            }
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (reviewsContainer && reviewsContainer.getBoundingClientRect().top < window.innerHeight && 
            reviewsContainer.getBoundingClientRect().bottom > 0) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                if (e.key === 'ArrowRight') {
                    prevReview(); // RTL: right arrow goes to previous
                } else {
                    nextReview(); // RTL: left arrow goes to next
                }
                resetAutoPlay();
            }
        }
    });

    // Initialize
    updateSlider();
    startAutoPlay();
}

