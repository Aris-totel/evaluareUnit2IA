
document.addEventListener('DOMContentLoaded', () => {
    const slideshowSection = document.getElementById('resource-monitoring');
    const images = document.querySelectorAll('.slideshow img');
    let currentImageIndex = 0;
    let slideshowInterval;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function startSlideshow() {
        slideshowInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }, 3000);
    }

    slideshowSection.addEventListener('dblclick', () => {
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        } else {
            startSlideshow();
        }
    });

    showImage(currentImageIndex);
});
