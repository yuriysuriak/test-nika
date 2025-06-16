  // Мобільне меню
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    menuOverlay.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        this.classList.remove('active');
        body.classList.remove('menu-open');
    });
    
    document.querySelectorAll('.mobile-nav .nav-item').forEach(item => {
        item.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            mobileNav.classList.remove('active');
            menuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
    
     // Музичний плеєр
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    if (musicBtn && bgMusic) {
        musicBtn.addEventListener('click', function() {
            if (isPlaying) {
                bgMusic.pause();
            } else {
                bgMusic.play().catch(error => {
                    console.error('Помилка відтворення:', error);
                });
            }
            isPlaying = !isPlaying;
            updateButtonState();
        });

        function updateButtonState() {
            const icon = musicBtn.querySelector('i');
            icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
            document.getElementById('music-status').textContent = isPlaying ? 'Pause Music' : 'Play Music';
        }
    };
    
    // Плавна прокрутка для всіх посилань
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Видаляємо активний клас у всіх пунктів
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        
        // Додаємо активний клас до поточного пункту
        this.classList.add('active');
    });
});