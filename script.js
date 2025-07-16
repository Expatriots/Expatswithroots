// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    const stickyJoinButton = document.getElementById('sticky-join');
    
    // Show buttons when user scrolls down
    window.addEventListener('scroll', function() {
        // Handle back to top button
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
        
        // Handle sticky join button
        // Show after scrolling past the join section
        const joinSection = document.getElementById('join');
        const joinSectionTop = joinSection.getBoundingClientRect().top + window.pageYOffset;
        const viewportHeight = window.innerHeight;
        
        if (window.scrollY > 300 && 
            (window.scrollY < joinSectionTop - viewportHeight || 
             window.scrollY > joinSectionTop + joinSection.offsetHeight)) {
            stickyJoinButton.classList.add('show');
        } else {
            stickyJoinButton.classList.remove('show');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
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
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.goal, .sector-card, .timeline-item, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Stagger animation for sector cards with color-specific delays
    document.querySelectorAll('.sector-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        
        // Add color-specific hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Enhanced timeline animations with rainbow progression
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
        
        // Add rainbow glow effect on hover
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.timeline-icon');
            icon.style.boxShadow = '0 0 20px rgba(153, 50, 204, 0.5)';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.timeline-icon');
            icon.style.boxShadow = 'none';
        });
    });
    
    // Enhanced button hover effects with gradient animations
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 15px 35px rgba(50, 205, 50, 0.4)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Logo animation enhancements
    const heroLogo = document.querySelector('.hero-logo-img');
    if (heroLogo) {
        // Add rotation on hover
        heroLogo.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(5deg) scale(1.1)';
            this.style.filter = 'brightness(1.2)';
        });
        
        heroLogo.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
            this.style.filter = 'brightness(1)';
        });
    }
    
    // Floating icons enhanced with logo colors
    document.querySelectorAll('.floating-icons i').forEach((icon, index) => {
        const delay = index * 0.5;
        const duration = 4 + (index * 0.3);
        icon.style.animationDelay = `${delay}s`;
        icon.style.animationDuration = `${duration}s`;
        
        // Add pulsing glow effect
        icon.style.textShadow = '0 0 10px currentColor';
        
        // Random gentle rotation
        icon.style.transform = `rotate(${Math.random() * 360}deg)`;
    });
    
    // Rainbow highlight animation for key text
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        // Add continuous subtle animation
        highlight.style.backgroundSize = '200% 100%';
        highlight.style.animation = 'rainbow 3s ease-in-out infinite';
        
        highlight.addEventListener('mouseenter', function() {
            this.style.animationDuration = '0.5s';
            this.style.filter = 'brightness(1.2)';
        });
        
        highlight.addEventListener('mouseleave', function() {
            this.style.animationDuration = '3s';
            this.style.filter = 'brightness(1)';
        });
    });
    
    // Form submission tracking with enhanced messaging
    document.querySelector('a[href*="forms.gle"]')?.addEventListener('click', function() {
        console.log('Egyptian expat clicked to join the movement - Logo clicked!');
        
        // Enhanced visual feedback
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-seedling"></i> Growing our tree...';
        this.style.background = 'linear-gradient(135deg, #9932CC, #1E90FF, #32CD32, #FFD700, #FF8C00, #DC143C)';
        this.style.backgroundSize = '200% 100%';
        this.style.animation = 'rainbow 0.5s ease-in-out infinite';
        
        setTimeout(() => {
            this.innerHTML = originalText;
            this.style.background = 'linear-gradient(135deg, var(--green), var(--dark-green))';
            this.style.animation = 'none';
        }, 3000);
    });
    
    // Parallax effect for hero section with logo
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroLogo = document.querySelector('.hero-logo');
        
        if (heroContent && heroLogo) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroLogo.style.transform = `translateY(${scrolled * 0.2}px) rotate(${scrolled * 0.1}deg)`;
        }
    });
    
    // Active navigation highlighting with logo colors
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 10; // 10px buffer
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Enhanced timeline animation with color progression
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                
                // Add color-specific glow effect
                const icon = entry.target.querySelector('.timeline-icon');
                if (icon) {
                    icon.style.boxShadow = '0 0 30px rgba(50, 205, 50, 0.3)';
                }
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        item.style.transition = 'all 0.6s ease';
        timelineObserver.observe(item);
    });
    
    // Logo color cycling effect (subtle)
    const logoIcons = document.querySelectorAll('.logo-icon img');
    logoIcons.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.filter = 'hue-rotate(30deg) brightness(1.2)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
        });
    });
    
    // Dynamic color progression for stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        const colors = ['var(--purple)', 'var(--blue)', 'var(--green)'];
        const icon = stat.querySelector('.stat-icon');
        if (icon) {
            icon.style.background = `linear-gradient(135deg, ${colors[index]}, ${colors[index]}99)`;
        }
    });
});

// CSS for enhanced animations
const style = document.createElement('style');
style.textContent = `
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .nav-menu a.active {
        color: var(--green);
        position: relative;
    }
    
    .nav-menu a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 20px;
        height: 2px;
        background: var(--green);
        transform: translateX(-50%);
        border-radius: 2px;
    }
    
    /* Enhanced logo animations */
    .hero-logo-img {
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .logo-icon img {
        transition: all 0.3s ease;
    }
    
    /* Rainbow gradient animation for highlights */
    @keyframes rainbow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    
    .highlight {
        background-size: 200% 100%;
    }
    
    /* Sector card hover enhancements */
    .sector-card {
        transition: all 0.3s ease;
    }
    
    .sector-card:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    /* Timeline icon glow effects */
    .timeline-icon {
        transition: all 0.3s ease;
    }
    
    /* Button enhancement */
    .btn {
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    .btn:hover::before {
        left: 100%;
    }
`;
document.head.appendChild(style);

// Loading animation with logo theme
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Show loading message
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = '🌳 Growing our tree...';
    loadingDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        color: var(--green);
        z-index: 9999;
        background: white;
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    `;
    document.body.appendChild(loadingDiv);
    
    setTimeout(() => {
        document.body.removeChild(loadingDiv);
        document.body.style.opacity = '1';
    }, 1000);
});

// Easter egg for Egyptian developers with logo theme
console.log(`
🇪🇬 Welcome to Expats with Roots! 🌳

If you're seeing this, you might be the kind of Egyptian developer we're looking for.
Our colorful tree represents the beautiful diversity of Egyptian expats worldwide.

🟣 Purple leaves: Innovation & Creativity
🔵 Blue leaves: Trust & Professionalism  
🟢 Green leaves: Growth & Development
🟡 Yellow leaves: Optimism & Energy
🟠 Orange leaves: Enthusiasm & Warmth
🔴 Red leaves: Passion & Determination

Join us in building Egypt's future: 
https://docs.google.com/forms/d/e/1FAIpQLScJvTwDU5c8yVKhldkOGsbe_ukoolw7G2l-eWMrkjACRoy96g/viewform?usp=header

مرحباً بك في "مصريين بالجذور"! 
شجرتنا الملونة تمثل تنوع المصريين في الخارج الجميل.
انضم إلينا في بناء مستقبل مصر.

🌳 Like our logo - diverse leaves, strong roots! 🌳
`);
