import './scss/style.scss';

const body = document.querySelector('body');
const btnToggle = document.querySelector('#btnToggle');
const navContent = document.querySelector('.nav__content');

function toggleMobileMenu() {
  if (navContent.style.display === '') {
    navContent.style.display = 'flex';
    btnToggle.setAttribute('aria-expanded', 'true');
    body.classList.add('noscroll');
  } else {
    navContent.style.display = '';
    btnToggle.setAttribute('aria-expanded', 'false');
  }
}
btnToggle.addEventListener('click', toggleMobileMenu);
