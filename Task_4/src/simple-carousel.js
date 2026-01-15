document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('[data-simple-carousel]');
    if (!carousel) return;

    const track = carousel.querySelector('[data-simple-track]');
    const slides = Array.from(carousel.querySelectorAll('[data-simple-slide]'));
    const prevBtn = carousel.querySelector('[data-simple-prev]');
    const nextBtn = carousel.querySelector('[data-simple-next]');
    if (!track || slides.length === 0) return;

    let currentIndex = 0;

    function update() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        slides.forEach((slide, index) => {
            slide.setAttribute('aria-hidden', index !== currentIndex ? "true" : "false");
        });
    }

    prevBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        update();
    });

    nextBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        update();
    });

    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn?.click();
        else if (e.key === 'ArrowRight') nextBtn?.click();
    });

    update();
});