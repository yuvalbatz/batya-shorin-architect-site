// Project data - This will be populated with actual images later
const projectsData = {
    '1': {
        title: {
            en: 'Private House - Ramat Gan',
            he: 'בית פרטי - רמת גן'
        },
        description: {
            en: 'Complete renovation of a two-story private house, including modern interior and exterior design',
            he: 'שיפוץ מלא של בית פרטי בן שתי קומות, כולל עיצוב פנים וחוץ מודרני'
        },
        images: [] // Will be populated with image paths later
    },
    '2': {
        title: {
            en: 'Penthouse Apartment - Tel Aviv',
            he: 'דירת פנטהאוז - תל אביב'
        },
        description: {
            en: 'Design of a penthouse apartment with sea view, combining open spaces and privacy',
            he: 'עיצוב דירת פנטהאוז עם נוף לים, שילוב של חללים פתוחים ופרטיות'
        },
        images: []
    },
    '3': {
        title: {
            en: 'New House - Herzliya',
            he: 'בית חדש - הרצליה'
        },
        description: {
            en: 'Planning and construction of a new house with emphasis on sustainability and natural light utilization',
            he: 'תכנון ובנייה של בית חדש עם דגש על קיימות וניצול אור טבעי'
        },
        images: []
    },
    '4': {
        title: {
            en: 'Apartment Renovation - Ramat Aviv',
            he: 'שיפוץ דירה - רמת אביב'
        },
        description: {
            en: 'Comprehensive renovation of a 4-room apartment with space opening and flow creation',
            he: 'שיפוץ מקיף של דירת 4 חדרים עם פתיחת חללים ויצירת זרימה'
        },
        images: []
    },
    '5': {
        title: {
            en: 'Cottage House - Kfar Saba',
            he: 'בית קוטג\' - כפר סבא'
        },
        description: {
            en: 'Renovation and expansion of a cottage house with additional floor and designed yard',
            he: 'שיפוץ והרחבה של בית קוטג\' עם תוספת קומה וחצר מעוצבת'
        },
        images: []
    },
    '6': {
        title: {
            en: 'Studio Apartment - Tel Aviv',
            he: 'דירת סטודיו - תל אביב'
        },
        description: {
            en: 'Smart design of a studio apartment with maximum storage solutions',
            he: 'עיצוב חכם של דירת סטודיו עם פתרונות אחסון מקסימליים'
        },
        images: []
    }
};

// Get current language from localStorage or default to 'en'
let currentLang = localStorage.getItem('language') || 'en';

// Get project ID from URL
function getProjectIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Initialize project detail page
function initProjectDetail() {
    const projectId = getProjectIdFromURL();
    
    if (!projectId || !projectsData[projectId]) {
        // Redirect to projects page if project not found
        window.location.href = 'index.html#projects';
        return;
    }
    
    const project = projectsData[projectId];
    
    // Update project title based on current language
    updateProjectTitle(project);
    
    // Initialize slider
    initSlider(project);
}

// Update project title based on current language
function updateProjectTitle(project) {
    const titleElement = document.getElementById('projectTitle');
    if (titleElement && project.title) {
        titleElement.textContent = project.title[currentLang] || project.title.en;
    }
}

// Listen for language changes
window.addEventListener('storage', (e) => {
    if (e.key === 'language') {
        currentLang = e.newValue || 'en';
        const projectId = getProjectIdFromURL();
        if (projectId && projectsData[projectId]) {
            updateProjectTitle(projectsData[projectId]);
        }
    }
});

// Check for language changes from script.js
setInterval(() => {
    const newLang = localStorage.getItem('language') || 'en';
    if (newLang !== currentLang) {
        currentLang = newLang;
        const projectId = getProjectIdFromURL();
        if (projectId && projectsData[projectId]) {
            updateProjectTitle(projectsData[projectId]);
            // Reinitialize slider with new language
            initSlider(projectsData[projectId]);
        }
    }
}, 100);

// Make updateProjectTitle available globally for script.js
window.updateProjectTitle = updateProjectTitle;
window.projectsData = projectsData;

// Initialize slider with project images
function initSlider(project) {
    const sliderTrack = document.getElementById('sliderTrack');
    const sliderIndicators = document.getElementById('sliderIndicators');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!sliderTrack || !sliderIndicators) return;
    
    // For now, create placeholder slides (3 placeholders as example)
    // Later, when images are added, replace this with actual image paths
    const numberOfSlides = project.images.length > 0 ? project.images.length : 3;
    
    // Clear existing content
    sliderTrack.innerHTML = '';
    sliderIndicators.innerHTML = '';
    
    // Create slides
    for (let i = 0; i < numberOfSlides; i++) {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        slide.setAttribute('data-slide-index', i);
        
        if (project.images[i]) {
            // If image exists, create img element
            const img = document.createElement('img');
            img.src = project.images[i];
            const imageText = currentLang === 'he' ? 'תמונה' : 'Image';
            img.alt = `${project.title[currentLang] || project.title.en} - ${imageText} ${i + 1}`;
            img.className = 'slider-image';
            slide.appendChild(img);
        } else {
            // Create placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'slider-placeholder';
            const imageText = currentLang === 'he' ? 'תמונה' : 'Image';
            placeholder.textContent = `${project.title[currentLang] || project.title.en} - ${imageText} ${i + 1}`;
            slide.appendChild(placeholder);
        }
        
        sliderTrack.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('button');
        indicator.className = 'slider-indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.setAttribute('data-slide-index', i);
        const imageText = currentLang === 'he' ? 'עבור לתמונה' : 'Go to image';
        indicator.setAttribute('aria-label', `${imageText} ${i + 1}`);
        indicator.addEventListener('click', () => goToSlide(i));
        sliderIndicators.appendChild(indicator);
    }
    
    // Initialize slider state
    let currentSlide = 0;
    const totalSlides = numberOfSlides;
    
    // Update slider position
    function updateSlider() {
        const translateX = -currentSlide * 100;
        sliderTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        const indicators = sliderIndicators.querySelectorAll('.slider-indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        // Update button states
        if (prevBtn) {
            prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
            prevBtn.style.cursor = currentSlide === 0 ? 'not-allowed' : 'pointer';
        }
        if (nextBtn) {
            nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
            nextBtn.style.cursor = currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer';
        }
    }
    
    // Go to specific slide
    function goToSlide(index) {
        if (index >= 0 && index < totalSlides) {
            currentSlide = index;
            updateSlider();
        }
    }
    
    // Next slide
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlider();
        }
    }
    
    // Previous slide
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            if (e.key === 'ArrowRight') {
                prevSlide(); // RTL: right arrow goes to previous
            } else {
                nextSlide(); // RTL: left arrow goes to next
            }
        }
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    sliderTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left (RTL: next)
            } else {
                prevSlide(); // Swipe right (RTL: previous)
            }
        }
    }
    
    // Initialize
    updateSlider();
    
    // Auto-play (optional - can be enabled later)
    // let autoPlayInterval = setInterval(nextSlide, 5000);
    // sliderTrack.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    // sliderTrack.addEventListener('mouseleave', () => {
    //     autoPlayInterval = setInterval(nextSlide, 5000);
    // });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectDetail);
} else {
    initProjectDetail();
}

