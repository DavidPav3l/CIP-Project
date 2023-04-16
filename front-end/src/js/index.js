import '../styles/index.css';
import '../styles/tailwind.css';
import ScrollReveal from 'scrollreveal';

// ANIMATII ON SCROLL
document.querySelector('#sec_2').classList.add('invisible');
document.querySelector('#sec_3').classList.add('invisible');

ScrollReveal().reveal('#robotei_infinit', {
  delay: 175,
  distance: '350px',
  origin: 'bottom',
  duration: 750,
  opacity: 0.3,
});

ScrollReveal().reveal('#sec_1', {
  delay: 125,
  distance: '1000px',
  origin: 'left',
  duration: 750,
  opacity: 0.3,
  viewFactor: 0.6,
});
ScrollReveal().reveal('#sec_2', {
  delay: 675,
  distance: '1000px',
  origin: 'right',
  duration: 750,
  opacity: 0.3,
  viewFactor: 0.3,
});
ScrollReveal().reveal('#sec_3', {
  delay: 225,
  distance: '1000px',
  origin: 'left',
  duration: 750,
  opacity: 0.3,
  viewFactor: 0.8,
});

ScrollReveal().reveal('#apl', {
  delay: 225,
  distance: '0px',
  opacity: 0,
  duration: 1500,
  scale: 0.9,
  viewFactor: 0.5,
});

// BURUGUR MENU
const burgurBtn = document.querySelector('.ham');
const mobilbeNav = document.querySelector('#mobile_nav');

burgurBtn.addEventListener('click', () => {
  burgurBtn.classList.toggle('active');
  if (burgurBtn.classList.contains('active')) {
    mobilbeNav.classList.remove('translate-x-[200vw]');
  } else {
    mobilbeNav.classList.add('translate-x-[200vw]');
  }
});

// RESIZE
window.onresize = () => {
  if (window.getComputedStyle(burgurBtn, null).display === 'none') {
    if (mobilbeNav.classList.contains('translate-x-[200vw]') === false)
      mobilbeNav.classList.add('translate-x-[200vw]');
    burgurBtn.classList.remove('active');
  }
};

window.onload = () => {
  if (mobilbeNav.classList.contains('translate-x-[200vw]') === false) {
    mobilbeNav.classList.add('translate-x-[200vw]');
  }
};
