// Animation for .service-card when visible in viewport
function animateOnVisible() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.22 }
  );
  document.querySelectorAll('.animate-on-visible').forEach(el => {
    observer.observe(el);
  });
}

if(document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", animateOnVisible);
} else {
  animateOnVisible();
}
