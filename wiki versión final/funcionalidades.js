const button = document.querySelector('button');
const element = document.querySelector('section');

button.addEventListener('click', function() {
	element.style.backgroundColor = 'red';
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});
