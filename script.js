// Smooth scroll
// Smooth scroll (only for internal links)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Animate on scroll
const scrollElements = document.querySelectorAll('.animate-on-scroll');
const elementInView = (el, dividend=1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};
const displayScrollElement = (element) => { element.classList.add('visible'); };
const hideScrollElement = (element) => { element.classList.remove('visible'); };
const handleScrollAnimation = () => {
  scrollElements.forEach(el=>{
    if(elementInView(el,1.25)){displayScrollElement(el);}else{hideScrollElement(el);}
  });
};
window.addEventListener('scroll', () => { handleScrollAnimation(); });
handleScrollAnimation();

// Contact form
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Message sent successfully!');
  this.reset();
});
