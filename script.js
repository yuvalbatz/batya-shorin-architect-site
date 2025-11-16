// Language Translation System
const translations = {
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
            about: 'About',
            contact: 'Contact'
        },
        hero: {
            title: 'Batya Shorin',
            subtitle: 'Professional Architect Specializing in Home and Apartment Design',
            description: 'Creating functional and beautiful spaces tailored to your personal needs',
            button: "Let's Get Started"
        },
        projects: {
            title: 'Projects',
            subtitle: 'A selection of projects I\'ve completed for private clients'
        },
        project: {
            '1': {
                title: 'Private House - Ramat Gan',
                description: 'Complete renovation of a two-story private house, including modern interior and exterior design'
            },
            '2': {
                title: 'Penthouse Apartment - Tel Aviv',
                description: 'Design of a penthouse apartment with sea view, combining open spaces and privacy'
            },
            '3': {
                title: 'New House - Herzliya',
                description: 'Planning and construction of a new house with emphasis on sustainability and natural light utilization'
            },
            '4': {
                title: 'Apartment Renovation - Ramat Aviv',
                description: 'Comprehensive renovation of a 4-room apartment with space opening and flow creation'
            },
            '5': {
                title: 'Cottage House - Kfar Saba',
                description: 'Renovation and expansion of a cottage house with additional floor and designed yard'
            },
            '6': {
                title: 'Studio Apartment - Tel Aviv',
                description: 'Smart design of a studio apartment with maximum storage solutions'
            }
        },
        tag: {
            renovation: 'Renovation',
            private_house: 'Private House',
            interior_design: 'Interior Design',
            apartment: 'Apartment',
            new_construction: 'New Construction',
            expansion: 'Expansion',
            small_apartment: 'Small Apartment'
        },
        about: {
            title: 'About',
            description1: 'I am Batya Shorin, a professional architect with over 15 years of experience in planning and designing homes and apartments. I specialize in creating functional and beautiful spaces tailored precisely to each client\'s needs and lifestyle.',
            description2: 'My approach combines creative thinking with practical solutions, with attention to detail and adherence to schedules. Every project is an opportunity for me to create something unique and perfectly suited to the client.',
            feature1: {
                title: 'Custom Planning',
                description: 'Every project is specifically planned for the client and their unique needs'
            },
            feature2: {
                title: 'Professional Guidance',
                description: 'Full guidance from the planning stage until construction completion'
            },
            feature3: {
                title: 'Timeline Commitment',
                description: 'Commitment to meeting timelines and the established budget'
            }
        },
        reviews: {
            title: 'What Clients Say',
            subtitle: 'Testimonials from satisfied clients'
        },
        review: {
            '1': {
                text: '"Batya did an amazing job! The renovation of our house went smoothly and professionally. She listened to all our requests and created a perfect space for us."',
                name: 'Sarah Cohen',
                location: 'Ramat Gan'
            },
            '2': {
                text: '"Working with Batya was a wonderful experience. She is professional, creative, and attentive. Our apartment now looks like something from a magazine! Highly recommended."',
                name: 'David Levi',
                location: 'Tel Aviv'
            },
            '3': {
                text: '"Batya turned our house into a dream. The design is perfect, the details are precise, and the result exceeds all expectations. Thank you for excellent work!"',
                name: 'Michal David',
                location: 'Herzliya'
            },
            '4': {
                text: '"A professional and experienced architect. Batya guided us from the planning stage until construction completion. The result is amazing and we are very satisfied!"',
                name: 'Yossi Mizrahi',
                location: 'Ramat Aviv'
            },
            '5': {
                text: '"Excellent work! Batya understood exactly what we wanted and created a beautiful and functional space for us. The renovation was completed on time and within budget. Highly recommended!"',
                name: 'Ronit Israeli',
                location: 'Kfar Saba'
            }
        },
        contact: {
            title: 'Contact',
            subtitle: 'Let\'s talk about your project',
            phone_label: 'Phone',
            email_label: 'Email',
            address_label: 'Address',
            address: 'Tel Aviv, Israel'
        },
        form: {
            name: 'Full Name',
            phone: 'Phone',
            email: 'Email',
            message: 'Message',
            submit: 'Send Message'
        },
        footer: {
            text: 'Batya Shorin - Architect. All rights reserved.'
        }
    },
    he: {
        nav: {
            home: 'בית',
            projects: 'פרויקטים',
            about: 'אודות',
            contact: 'צור קשר'
        },
        hero: {
            title: 'בתיה שורין',
            subtitle: 'אדריכלית מקצועית המתמחה בעיצוב בתים ודירות',
            description: 'יוצרת חללים פונקציונליים ויפים המותאמים לצרכים האישיים שלכם',
            button: 'בואו נתחיל'
        },
        projects: {
            title: 'פרויקטים',
            subtitle: 'מבחר פרויקטים שביצעתי עבור לקוחות פרטיים'
        },
        project: {
            '1': {
                title: 'בית פרטי - רמת גן',
                description: 'שיפוץ מלא של בית פרטי בן שתי קומות, כולל עיצוב פנים וחוץ מודרני'
            },
            '2': {
                title: 'דירת פנטהאוז - תל אביב',
                description: 'עיצוב דירת פנטהאוז עם נוף לים, שילוב של חללים פתוחים ופרטיות'
            },
            '3': {
                title: 'בית חדש - הרצליה',
                description: 'תכנון ובנייה של בית חדש עם דגש על קיימות וניצול אור טבעי'
            },
            '4': {
                title: 'שיפוץ דירה - רמת אביב',
                description: 'שיפוץ מקיף של דירת 4 חדרים עם פתיחת חללים ויצירת זרימה'
            },
            '5': {
                title: 'בית קוטג\' - כפר סבא',
                description: 'שיפוץ והרחבה של בית קוטג\' עם תוספת קומה וחצר מעוצבת'
            },
            '6': {
                title: 'דירת סטודיו - תל אביב',
                description: 'עיצוב חכם של דירת סטודיו עם פתרונות אחסון מקסימליים'
            }
        },
        tag: {
            renovation: 'שיפוץ',
            private_house: 'בית פרטי',
            interior_design: 'עיצוב פנים',
            apartment: 'דירה',
            new_construction: 'בנייה חדשה',
            expansion: 'הרחבה',
            small_apartment: 'דירה קטנה'
        },
        about: {
            title: 'אודות',
            description1: 'אני בתיה שורין, אדריכלית מקצועית עם ניסיון של למעלה מ-15 שנים בתכנון ועיצוב בתים ודירות. אני מתמחה ביצירת חללים פונקציונליים ויפים המותאמים בדיוק לצרכים ולסגנון החיים של כל לקוח.',
            description2: 'הגישה שלי משלבת חשיבה יצירתית עם פתרונות מעשיים, תוך הקפדה על פרטים ועמידה בלוחות זמנים. כל פרויקט הוא עבורי הזדמנות ליצור משהו ייחודי ומתאים בדיוק ללקוח.',
            feature1: {
                title: 'תכנון מותאם אישית',
                description: 'כל פרויקט מתוכנן במיוחד עבור הלקוח והצרכים הייחודיים שלו'
            },
            feature2: {
                title: 'ליווי מקצועי',
                description: 'ליווי מלא משלב התכנון ועד לסיום הבנייה'
            },
            feature3: {
                title: 'עמידה בלוחות זמנים',
                description: 'מחויבות לעמידה בלוחות זמנים ובתקציב שנקבע'
            }
        },
        reviews: {
            title: 'מה הלקוחות אומרים',
            subtitle: 'המלצות מלקוחות מרוצים'
        },
        review: {
            '1': {
                text: '"בתיה עשתה עבודה מדהימה! השיפוץ של הבית שלנו עבר בצורה חלקה ומקצועית. היא הקשיבה לכל הבקשות שלנו ויצרה חלל מושלם עבורנו."',
                name: 'שרה כהן',
                location: 'רמת גן'
            },
            '2': {
                text: '"העבודה עם בתיה הייתה חוויה נהדרת. היא מקצועית, יצירתית וקשובה. הדירה שלנו נראית עכשיו כמו משהו ממגזין! ממליצה בחום."',
                name: 'דוד לוי',
                location: 'תל אביב'
            },
            '3': {
                text: '"בתיה הפכה את הבית שלנו לחלום. העיצוב מושלם, הפרטים מדויקים והתוצאה עולה על כל הציפיות. תודה רבה על עבודה מעולה!"',
                name: 'מיכל דוד',
                location: 'הרצליה'
            },
            '4': {
                text: '"אדריכלית מקצועית ומנוסה. בתיה ליוותה אותנו משלב התכנון ועד לסיום הבנייה. התוצאה מדהימה ואנחנו מאוד מרוצים!"',
                name: 'יוסי מזרחי',
                location: 'רמת אביב'
            },
            '5': {
                text: '"עבודה מעולה! בתיה הבינה בדיוק מה אנחנו רוצים ויצרה עבורנו חלל יפה ופונקציונלי. השיפוץ עבר בזמן ובתקציב. מומלץ מאוד!"',
                name: 'רונית ישראלי',
                location: 'כפר סבא'
            }
        },
        contact: {
            title: 'צור קשר',
            subtitle: 'בואו נדבר על הפרויקט שלכם',
            phone_label: 'טלפון',
            email_label: 'אימייל',
            address_label: 'כתובת',
            address: 'תל אביב, ישראל'
        },
        form: {
            name: 'שם מלא',
            phone: 'טלפון',
            email: 'אימייל',
            message: 'הודעה',
            submit: 'שלח הודעה'
        },
        footer: {
            text: 'בתיה שורין - אדריכלית. כל הזכויות שמורות.'
        }
    }
};

// Get current language from localStorage or default to 'en'
let currentLang = localStorage.getItem('language') || 'en';

// Function to get nested translation value
function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

// Function to translate the page
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.body.style.direction = lang === 'he' ? 'rtl' : 'ltr';
    document.body.style.textAlign = lang === 'he' ? 'right' : 'left';
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key, lang);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update language switcher text
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang === 'en' ? 'עברית' : 'English';
    }
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = lang === 'en' 
            ? 'Architecture Portfolio - Professional projects for home and apartment design'
            : 'פורטפוליו אדריכלות - פרויקטים מקצועיים לעיצוב בתים ודירות';
    }
    
    // Update title
    document.title = lang === 'en' 
        ? 'Batya Shorin - Architect'
        : 'בתיה שורין - אדריכלית';
}

// Initialize language on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => translatePage(currentLang));
} else {
    translatePage(currentLang);
}

// Language switcher button
const langSwitcher = document.getElementById('langSwitcher');
if (langSwitcher) {
    langSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'he' : 'en';
        translatePage(newLang);
    });
}

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

