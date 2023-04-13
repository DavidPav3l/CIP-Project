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
  delay: 325,
  distance: '1000px',
  origin: 'left',
  duration: 1250,
  opacity: 0.3,
  afterReveal: () => {
    ScrollReveal().reveal('#sec_2', {
      delay: 0,
      distance: '1000px',
      origin: 'right',
      duration: 1250,
      opacity: 0.3,
      afterReveal: () => {
        ScrollReveal().reveal('#sec_3', {
          delay: 0,
          distance: '1000px',
          origin: 'left',
          duration: 1250,
          opacity: 0.3,
        });
      },
    });
  },
});

// BURUGUR MERNU
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
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 20; i++) {
    let bubble = document.createElement('div');
    bubble.className = 'bubble';

    bubble.style.cssText = `
      --blob-size: ${2 + Math.random() * 4}rem;
      --blob-distance: ${6 + Math.random() * 4}rem;
      --blob-position: ${-5 + Math.random() * 110}%;
      --blob-time: ${2 + Math.random() * 1}s;
      --blob-delay: ${-1 * (2 + Math.random() * 1)}s;
    `;

    document.querySelector('#bubble-container').append(bubble);
  }
});
