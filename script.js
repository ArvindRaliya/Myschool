// Intersection Observer for fade-in elements
document.addEventListener('DOMContentLoaded', function() {
  const faders = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver(function(entries, obs) {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    });
  }, options);
  faders.forEach(f => observer.observe(f));
});
