// Mobile hamburger menu functions
function toggleMobileMenu() {
    console.log('Toggle mobile menu called');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('open');
        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}

function closeMobileMenu() {
    console.log('Close mobile menu called');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
}

// Handle mobile menu item clicks with smooth scrolling
function handleMobileMenuClick(event, target) {
    event.preventDefault();
    closeMobileMenu();
    
    // Smooth scroll to section after menu closes
    setTimeout(() => {
        const section = document.querySelector(target);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300);
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger-menu');
    
    if (mobileMenu && hamburger && mobileMenu.classList.contains('open')) {
        if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
            closeMobileMenu();
        }
    }
});

// Initialize particles background
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#00d4ff', '#0077ff', '#ff6b6b']
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00d4ff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    }
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
});

// Animate stats numbers
function animateStats() {
    const stats = document.querySelectorAll('.stat-number[data-count]');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const originalText = stat.textContent;
        let current = 0;
        const increment = target / 50;
        
        const updateCount = () => {
            if (current < target) {
                current += increment;
                // Handle different formats based on original text
                if (originalText.includes('$') && originalText.includes('M+')) {
                    stat.textContent = `$${Math.ceil(current)}M+`;
                } else if (originalText.includes('+')) {
                    stat.textContent = Math.ceil(current) + '+';
                } else if (originalText.includes('x')) {
                    stat.textContent = Math.ceil(current) + 'x';
                } else {
                    stat.textContent = Math.ceil(current);
                }
                setTimeout(updateCount, 40);
            } else {
                // Set final value
                if (originalText.includes('$') && originalText.includes('M+')) {
                    stat.textContent = `$${target}M+`;
                } else if (originalText.includes('+')) {
                    stat.textContent = target + '+';
                } else if (originalText.includes('x')) {
                    stat.textContent = target + 'x';
                } else {
                    stat.textContent = target;
                }
            }
        };
        
        updateCount();
    });
}

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}

// Create hero chart
function createHeroChart() {
    const ctx = document.getElementById('heroChart');
    if (!ctx || typeof Chart === 'undefined') return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue Growth',
                data: [100, 120, 115, 160, 180, 200],
                borderColor: '#00d4ff',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#00d4ff',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    display: false
                },
                x: {
                    display: false
                }
            },
            elements: {
                point: {
                    hoverRadius: 8
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// Smooth scroll function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Calendar booking function
function openCalendar() {
    // In a real implementation, this would integrate with a calendar service
    // For now, we'll show the contact form
    const form = document.querySelector('.final-cta');
    if (form) {
        form.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = form.querySelector('.cta-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.classList.add('success');
                
                // Reset form after delay
                setTimeout(() => {
                    form.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('success');
                    
                    // Show thank you message
                    alert('Thank you for your interest! I\'ll get back to you within 2 hours.');
                }, 2000);
            }, 2000);
            
            // In a real implementation, you would send data to your server:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data)
            // });
        });
    }
});

// Navbar scroll effect and floating CTA
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const floatingCta = document.getElementById('floatingCta');
    const scrollY = window.scrollY;
    
    // Navbar transparency
    if (scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.85)';
        navbar.style.backdropFilter = 'blur(25px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.7)';
        navbar.style.backdropFilter = 'blur(15px)';
    }
    
    // Show floating CTA after scrolling past hero section
    if (scrollY > 300) {
        floatingCta.classList.add('visible');
    } else {
        floatingCta.classList.remove('visible');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hero-stats')) {
                animateStats();
            }
            
            if (entry.target.classList.contains('progress-bar')) {
                const progress = entry.target.querySelector('.progress');
                progress.style.width = progress.style.width || '100%';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToObserve = [
        '.hero-stats',
        '.progress-bar'
    ];
    
    elementsToObserve.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => observer.observe(el));
    });
    
    // Initialize chart after DOM is loaded
    setTimeout(createHeroChart, 500);
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Mobile menu toggle (basic implementation)
function toggleMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Service cards tilt effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (y / rect.height) * 10;
            const rotateY = (x / rect.width) * -10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });
    
    // Award cards 3D effect
    const awardCards = document.querySelectorAll('.award-card');
    awardCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (y / rect.height) * 15;
            const rotateY = (x / rect.width) * -15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });
});

// Parallax effect for backgrounds
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add floating animation to dashboard elements
function addFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.floating-dashboard');
    
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });
}

// Initialize floating animations
document.addEventListener('DOMContentLoaded', addFloatingAnimation);

// Add mouse trail effect
let mouseTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', function(e) {
    mouseTrail.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now()
    });
    
    if (mouseTrail.length > maxTrailLength) {
        mouseTrail.shift();
    }
    
    updateMouseTrail();
});

function updateMouseTrail() {
    const currentTime = Date.now();
    mouseTrail = mouseTrail.filter(point => currentTime - point.time < 1000);
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Performance optimization: Debounced scroll handler
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

// Apply debouncing to scroll handlers
const debouncedScrollHandler = debounce(function() {
    // Handle scroll events here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Add custom cursor effect
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add click ripple effect
document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});