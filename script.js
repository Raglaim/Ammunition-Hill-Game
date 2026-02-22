document.addEventListener('DOMContentLoaded', () => {
    // Gallery Nav
    const navLinks = document.querySelectorAll('.gallery-nav a');

    document.querySelectorAll('.gallery-nav').forEach(nav => {
        const firstDot = nav.querySelector('a');
        if (firstDot) firstDot.classList.add('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const index = this.getAttribute('data-index');
            const galleryWrapper = this.closest('.gallery-wrapper');
            const gallery = galleryWrapper.querySelector('.gallery');
            gallery.scrollTo({
                left: (gallery.clientWidth * index) * (getComputedStyle(gallery).direction === 'rtl' ? -1 : 1),
                behavior: 'smooth'
            });
            galleryWrapper.querySelectorAll('.gallery-nav a').forEach(dot => dot.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Reserch Switch
    const toggle = document.getElementById('mode-trigger');
    const reserchCard1 = document.getElementById('reserch-1');
    const reserchCard2 = document.getElementById('reserch-2');
    toggle.addEventListener('change', () => {
        reserchCard1.classList.toggle('active');
        reserchCard2.classList.toggle('active');
    });

    // Reserch Link Button
    const reserchBtn = document.getElementById('reserch-link-button');
    reserchBtn.addEventListener('click', () => {
        const targetUrl = toggle.checked ? reserchBtn.dataset.url2 : reserchBtn.dataset.url1;
        if (targetUrl) {
            window.open(targetUrl, '_blank');
        }
    });
    
    // Scroll To Game Slide
    const gameBtn = document.getElementById('scroll-to-game-button');
    gameBtn.addEventListener('click', () => {
        const targetSection = document.getElementById('game'); 
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });

    // Scroll To Wiki Slide
    const gdpBtn = document.getElementById('reserch-gdp-button');
    gdpBtn.addEventListener('click', () => {
        const targetSection = document.getElementById('wiki'); 
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });

    // Wiki Buttons
    const wikiBtn1 = document.getElementById('wiki-1');
    const wikiBtn2 = document.getElementById('wiki-2');
    wikiBtn1.addEventListener('click', () => {window.open(wikiBtn1.dataset.url, '_blank');});
    wikiBtn2.addEventListener('click', () => {window.open(wikiBtn2.dataset.url, '_blank');});
});
