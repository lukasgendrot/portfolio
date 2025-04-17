document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Animation au défilement
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkVisibility() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // Vérifier la visibilité au chargement de la page
    window.addEventListener('load', checkVisibility);
    
    // Vérifier la visibilité lors du défilement
    window.addEventListener('scroll', checkVisibility);
    
    // Lazy loading des images
    if ('loading' in HTMLImageElement.prototype) {
        // Le navigateur supporte le lazy loading natif
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback pour les navigateurs qui ne supportent pas le lazy loading natif
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Fonction pour gérer les titres de section
    function setupSectionTitles() {
        const sectionTitles = document.querySelectorAll('.section-title');
        
        sectionTitles.forEach(title => {
            title.addEventListener('click', function() {
                // Retirer la classe active de tous les titres
                sectionTitles.forEach(t => t.classList.remove('active'));
                
                // Ajouter la classe active au titre cliqué
                this.classList.add('active');
                
                // Faire défiler jusqu'au contenu de la section
                const nextElement = this.nextElementSibling;
                if (nextElement) {
                    nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
    
    // Initialiser les titres de section
    setupSectionTitles();
}); 