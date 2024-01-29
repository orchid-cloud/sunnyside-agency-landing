import './scss/style.scss';

const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const btnToggle = document.querySelector('#btnToggle');
const navContent = document.querySelector('.nav__content');
const media = window.matchMedia('(width < 69.375em)');

function toggleMobileMenu() {
  if (navContent.style.display === '') {
    navContent.style.display = 'flex';
    btnToggle.setAttribute('aria-expanded', 'true');
    body.classList.add('noscroll');

    main.setAttribute('inert', '');
    footer.setAttribute('inert', '');
  } else {
    navContent.style.display = '';
    btnToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('noscroll');
    main.removeAttribute('inert');
    footer.removeAttribute('inert');
  }
}
btnToggle.addEventListener('click', toggleMobileMenu);

function setupNav(e) {
  if (e.matches && navContent.getAttribute('aria-expanded') === 'false') {
    // is mobile
    console.log('is mobile');

    navContent.setAttribute('inert', '');
  } else {
    console.log('is desktop');
    navContent.removeAttribute('inert');
    main.removeAttribute('inert');
    footer.removeAttribute('inert');
  }
}

setupNav(media);

media.addEventListener('change', function (e) {
  setupNav(e);
});
