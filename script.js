document.addEventListener('DOMContentLoaded', () => {
    // 1. تفعيل تأثير الظهور التدريجي (يجب أن يكون #main-container: opacity: 0 في CSS)
    const mainContainer = document.getElementById('main-container');
    if (mainContainer) {
        // نضبط الشفافية إلى 1 بعد تحميل الصفحة بوقت قصير
        // إذا لم يكن لديك 'opacity: 0' في CSS، يمكنك تخطيه.
        mainContainer.style.opacity = '1';
    }

    // 2. تفعيل تأثيرات التمرير واللمس
    const gameLinks = document.querySelectorAll('.game-link');
    
    gameLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.boxShadow = '0 0 15px rgba(243, 156, 18, 0.6)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.4)';
        });
        link.addEventListener('touchstart', () => {
            link.style.opacity = '0.8';
        });
        link.addEventListener('touchend', () => {
            link.style.opacity = '1';
        });
    });
});
