const button = document.querySelector('button');
const element = document.querySelector('section');


const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});


document.addEventListener('DOMContentLoaded', function() {
  var scrollToTopBtn = document.getElementById('scroll-to-top');
  
  function checkScrollPosition() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var scrollHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition > (scrollHeight - windowHeight) * 0.9) {
      scrollToTopBtn.classList.remove('hidden');
    } else {
      scrollToTopBtn.classList.add('hidden');
    }
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    scrollToTop();
  });
  
  window.addEventListener('scroll', checkScrollPosition);
});


