// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeServiceCards();
    initializeSmoothScrolling();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            navToggle.classList.toggle('active');
            
            if (navToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Update active navigation link based on scroll position
    updateActiveNavigation();
    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Service cards expandable functionality
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent double triggering if clicked on the button
            e.stopPropagation();
            
            const expandButton = this.querySelector('.btn-expand');
            const serviceType = expandButton.getAttribute('data-service');
            const details = document.getElementById(`${serviceType}-details`);
            
            // Toggle active state
            expandButton.classList.toggle('active');
            details.classList.toggle('active');
            this.classList.toggle('expanded');
            
            // Close other expanded cards
            serviceCards.forEach(otherCard => {
                if (otherCard !== this && otherCard.classList.contains('expanded')) {
                    const otherButton = otherCard.querySelector('.btn-expand');
                    const otherServiceType = otherButton.getAttribute('data-service');
                    const otherDetails = document.getElementById(`${otherServiceType}-details`);
                    
                    otherButton.classList.remove('active');
                    otherDetails.classList.remove('active');
                    otherCard.classList.remove('expanded');
                }
            });
            
            // Smooth scroll to card title if expanding on mobile
            if (this.classList.contains('expanded')) {
                setTimeout(() => {
                    const isMobile = window.innerWidth <= 768;
                    
                    if (isMobile) {
                        // On mobile, always scroll to the card title
                        const cardTitle = this.querySelector('.service-title');
                        if (cardTitle) {
                            const cardTitleTop = cardTitle.getBoundingClientRect().top + window.scrollY;
                            const offsetTop = cardTitleTop - 100; // Account for navbar
                            
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    } else {
                        // On desktop, only scroll if card is not fully visible
                        const cardRect = this.getBoundingClientRect();
                        const windowHeight = window.innerHeight;
                        
                        if (cardRect.bottom > windowHeight) {
                            this.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'nearest' 
                            });
                        }
                    }
                }, 300);
            }
        });
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    const navLogo = document.querySelector('.nav-logo');
    
    function updateNavbarBackground() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    function updateNavLogo() {
        const footer = document.querySelector('.footer');
        const footerTop = footer.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const footerInView = scrollPosition + windowHeight >= footerTop;
        
        if (scrollPosition > 200 && !footerInView) {
            navLogo.classList.add('show');
        } else {
            navLogo.classList.remove('show');
        }
    }
    
    window.addEventListener('scroll', updateNavbarBackground);
    window.addEventListener('scroll', updateNavLogo);

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .equipment-card, .section-title');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Special observer for banner diagonal with different threshold
    const bannerObserverOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -20px 0px'
    };

    const bannerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const diagonal = entry.target.querySelector('.banner-diagonal');
                if (diagonal) {
                    // Add a small delay for dramatic effect
                    setTimeout(() => {
                        diagonal.classList.add('animate-in');
                    }, 200);
                }
            }
        });
    }, bannerObserverOptions);

    // Observe banner for diagonal animation
    const brochureBanner = document.querySelector('.brochure-banner');
    if (brochureBanner) {
        bannerObserver.observe(brochureBanner);
    }

    // Parallax effect for hero diagonal
    const heroDialonal = document.querySelector('.hero-diagonal');
    
    if (heroDialonal) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < window.innerHeight) {
                heroDialonal.style.transform = `skewX(-15deg) translateY(${rate}px)`;
            }
        });
    }
}

// Form validation and submission (for future contact forms)
function initializeContactForm() {
    const contactForms = document.querySelectorAll('.contact-form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Basic validation
            if (validateForm(formObject)) {
                // Here you would typically send the data to a server
                showMessage('Mensaje enviado correctamente. Nos pondremos en contacto pronto.', 'success');
                this.reset();
            } else {
                showMessage('Por favor, complete todos los campos requeridos.', 'error');
            }
        });
    });
}

function validateForm(data) {
    const requiredFields = ['name', 'email', 'message'];
    
    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            return false;
        }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    return true;
}

function showMessage(message, type) {
    // Create and show a notification message
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : '#EF4444'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS for scrolled navbar state
const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style); 