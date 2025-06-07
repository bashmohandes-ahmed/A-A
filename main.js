// Animation for service cards when visible
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

// Contact form thank you and redirect
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  var thankMsg = document.getElementById('thankYouMsg');
  if (form && thankMsg) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // إرسال البيانات فعلا إلى Formsubmit
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      form.style.display = 'none';
      thankMsg.style.display = 'block';
      setTimeout(function() {
        window.location.hash = '';
        form.style.display = '';
        thankMsg.style.display = 'none';
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, 3500); // 3.5 ثانية ثم يرجعك للأعلى ويخفي الرسالة ويظهر النموذج
    });
  }
});
