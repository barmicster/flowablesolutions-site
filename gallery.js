function scrollGallery(direction) {
  const gallery = document.getElementById("gallery");
  const scrollAmount = 320; // pixels

  gallery.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen(); // Safari
      } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen(); // IE11
      }
    });
  });
});
