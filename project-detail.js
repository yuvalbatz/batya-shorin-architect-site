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
        // All image paths from picProject1 folder
        images: [
            'picProject1/image1.jpg',
            'picProject1/image2.jpg',
            'picProject1/image3.jpg',
            'picProject1/image4.jpg',
            'picProject1/image5.jpg',
            'picProject1/image6.jpg',
            'picProject1/image7.jpg',
            'picProject1/image8.jpg',
            'picProject1/image9.jpg',
            'picProject1/image10.jpg',
            'picProject1/image11.jpg',
            'picProject1/image12.jpg',
            'picProject1/image13.jpg',
            'picProject1/image14.jpg',
            'picProject1/image15.jpg',
            'picProject1/image16.jpg',
            'picProject1/image17.jpg',
            'picProject1/image18.jpg',
            'picProject1/image19.jpg',
            'picProject1/image20.jpg',
            'picProject1/image21.jpg',
            'picProject1/image22.jpg',
            'picProject1/image23.jpg',
            'picProject1/image24.jpg',
            'picProject1/image25.jpg',
            'picProject1/image26.jpg',
            'picProject1/image27.jpg',
            'picProject1/image28.jpg',
            'picProject1/image29.jpg',
            'picProject1/image30.jpg',
            'picProject1/image31.jpg'
        ]
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

// Get current language function - reads from localStorage
function getCurrentLang() {
    return localStorage.getItem('language') || 'en';
}

// Get project ID from URL
function getProjectIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Initialize project detail page
function initProjectDetail() {
    const projectId = getProjectIdFromURL();
    
    console.log('Initializing project detail for ID:', projectId);
    
    if (!projectId || !projectsData[projectId]) {
        console.error('Project not found:', projectId);
        // Redirect to projects page if project not found
        window.location.href = 'projects.html';
        return;
    }
    
    const project = projectsData[projectId];
    console.log('Project data:', project);
    console.log('Project images:', project.images);
    
    // Update project title based on current language
    updateProjectTitle(project);
    
    // Wait a bit to ensure DOM is ready, then initialize slider
    setTimeout(() => {
        initSlider(project);
    }, 100);
}

// Update project title based on current language
function updateProjectTitle(project) {
    const titleElement = document.getElementById('projectTitle');
    if (titleElement && project.title) {
        const lang = getCurrentLang();
        titleElement.textContent = project.title[lang] || project.title.en;
    }
}

// Listen for language changes
let lastLang = getCurrentLang();
window.addEventListener('storage', (e) => {
    if (e.key === 'language') {
        const projectId = getProjectIdFromURL();
        if (projectId && projectsData[projectId]) {
            updateProjectTitle(projectsData[projectId]);
            initSlider(projectsData[projectId]);
        }
    }
});

// Check for language changes from script.js
setInterval(() => {
    const newLang = getCurrentLang();
    if (newLang !== lastLang) {
        lastLang = newLang;
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
    
    if (!sliderTrack || !sliderIndicators) {
        console.error('Slider elements not found');
        return;
    }
    
    // Filter out empty image paths and use actual images
    const validImages = project.images ? project.images.filter(img => img && img.trim() !== '') : [];
    const numberOfSlides = validImages.length > 0 ? validImages.length : 1;
    
    console.log('Initializing slider with', numberOfSlides, 'images');
    console.log('Valid images:', validImages);
    
    if (validImages.length === 0) {
        console.warn('No valid images found for project');
    }
    
    // Clear existing content
    sliderTrack.innerHTML = '';
    sliderIndicators.innerHTML = '';
    
    // Create slides
    for (let i = 0; i < numberOfSlides; i++) {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        slide.setAttribute('data-slide-index', i);
        
        if (validImages[i]) {
            // If image exists, create img element
            const img = document.createElement('img');
            img.src = validImages[i];
            const lang = localStorage.getItem('language') || 'en';
            const imageText = lang === 'he' ? 'תמונה' : 'Image';
            img.alt = `${project.title[lang] || project.title.en} - ${imageText} ${i + 1}`;
            img.className = 'slider-image';
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => openLightbox(i));
            img.addEventListener('load', function() {
                console.log('Image loaded:', validImages[i]);
            });
            img.addEventListener('error', function() {
                console.error('Image failed to load:', validImages[i]);
                // If image fails to load, show placeholder
                this.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.className = 'slider-placeholder';
                placeholder.textContent = `${project.title[lang] || project.title.en} - ${imageText} ${i + 1}`;
                slide.appendChild(placeholder);
            });
            slide.appendChild(img);
        } else {
            // Create placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'slider-placeholder';
            const lang = localStorage.getItem('language') || 'en';
            const imageText = lang === 'he' ? 'תמונה' : 'Image';
            placeholder.textContent = `${project.title[lang] || project.title.en} - ${imageText} ${i + 1}`;
            slide.appendChild(placeholder);
        }
        
        sliderTrack.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('button');
        indicator.className = 'slider-indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.setAttribute('data-slide-index', i);
        const lang = getCurrentLang();
        const imageText = lang === 'he' ? 'עבור לתמונה' : 'Go to image';
        indicator.setAttribute('aria-label', `${imageText} ${i + 1}`);
        indicator.addEventListener('click', () => goToSlide(i));
        sliderIndicators.appendChild(indicator);
    }
    
    // Initialize slider state
    let currentSlide = 0;
    const totalSlides = numberOfSlides;
    let autoPlayInterval = null;
    let isLightboxOpen = false;
    
    // Store validImages in closure for lightbox
    const imagesForLightbox = validImages;
    
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
        
        // Update lightbox if open
        if (isLightboxOpen) {
            updateLightbox();
        }
    }
    
    // Go to specific slide
    function goToSlide(index) {
        if (index >= 0 && index < totalSlides) {
            currentSlide = index;
            updateSlider();
            resetAutoPlay();
        }
    }
    
    // Next slide
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Loop back to first
        }
        updateSlider();
        resetAutoPlay();
    }
    
    // Previous slide
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1; // Loop to last
        }
        updateSlider();
        resetAutoPlay();
    }
    
    // Auto-play functionality
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        if (!isLightboxOpen) {
            autoPlayInterval = setInterval(nextSlide, 5000); // 5 seconds
        }
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
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
    
    // Lightbox functionality
    function createLightbox() {
        // Check if lightbox already exists
        if (document.getElementById('imageLightbox')) return;
        
        const lightbox = document.createElement('div');
        lightbox.id = 'imageLightbox';
        lightbox.className = 'image-lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
            <button class="lightbox-prev" aria-label="Previous image">‹</button>
            <button class="lightbox-next" aria-label="Next image">›</button>
            <div class="lightbox-content">
                <img src="" alt="" class="lightbox-image">
            </div>
            <div class="lightbox-counter"></div>
        `;
        document.body.appendChild(lightbox);
        
        // Event listeners for lightbox
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');
        const lightboxImg = lightbox.querySelector('.lightbox-image');
        
        closeBtn.addEventListener('click', closeLightbox);
        prevBtn.addEventListener('click', () => {
            prevSlide();
            updateLightbox();
        });
        nextBtn.addEventListener('click', () => {
            nextSlide();
            updateLightbox();
        });
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        
        // Keyboard navigation in lightbox
        document.addEventListener('keydown', handleLightboxKeyboard);
    }
    
    function handleLightboxKeyboard(e) {
        if (!isLightboxOpen) return;
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
            updateLightbox();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            updateLightbox();
        }
    }
    
    function openLightbox(index) {
        isLightboxOpen = true;
        currentSlide = index;
        createLightbox();
        const lightbox = document.getElementById('imageLightbox');
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateLightbox();
        stopAutoPlay();
    }
    
    function closeLightbox() {
        isLightboxOpen = false;
        const lightbox = document.getElementById('imageLightbox');
        if (lightbox) {
            lightbox.classList.remove('active');
        }
        document.body.style.overflow = '';
        startAutoPlay();
    }
    
    function updateLightbox() {
        if (!isLightboxOpen) return;
        const lightbox = document.getElementById('imageLightbox');
        if (!lightbox) return;
        
        const lightboxImg = lightbox.querySelector('.lightbox-image');
        const counter = lightbox.querySelector('.lightbox-counter');
        
        if (imagesForLightbox[currentSlide]) {
            lightboxImg.src = imagesForLightbox[currentSlide];
            const lang = getCurrentLang();
            const imageText = lang === 'he' ? 'תמונה' : 'Image';
            lightboxImg.alt = `${project.title[lang] || project.title.en} - ${imageText} ${currentSlide + 1}`;
            counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
        }
    }
    
    // Pause auto-play on hover
    const sliderViewport = document.querySelector('.slider-viewport');
    if (sliderViewport) {
        sliderViewport.addEventListener('mouseenter', stopAutoPlay);
        sliderViewport.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Initialize
    updateSlider();
    startAutoPlay();
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectDetail);
} else {
    initProjectDetail();
}

