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
  duration: 850,
  opacity: 0.3,
  viewFactor: 0.5,
});
ScrollReveal().reveal('#sec_2', {
  delay: 375,
  distance: '1000px',
  origin: 'right',
  duration: 850,
  opacity: 0.3,
  viewFactor: 0.3,
});
ScrollReveal().reveal('#sec_3', {
  delay: 475,
  distance: '1000px',
  origin: 'left',
  duration: 850,
  opacity: 0.3,
  viewFactor: 0.6,
});

ScrollReveal().reveal('#apl', {
  delay: 125,
  distance: '0px',
  opacity: 0,
  duration: 1500,
  scale: 0.9,
  viewFactor: 0.4,
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

const animationWrapper = document.querySelector('.animation_wrapper');

var app = {
  chars: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ],

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'animation-container';
    animationWrapper.appendChild(app.container);
    window.setInterval(app.add, 500);
  },

  add: function () {
    var element = document.createElement('span');
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var character = app.chars[Math.floor(Math.random() * app.chars.length)];
    var duration = Math.floor(Math.random() * 25) + 3;
    var offset = Math.floor(Math.random() * (150 - duration * 2)) + 3;
    var size = 10 + (15 - duration);
    element.style.cssText =
      'right:' +
      offset +
      'vw; font-size:' +
      size +
      'px;animation-duration:' +
      duration +
      's';
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },
};
ScrollReveal().reveal('.animation_wrapper', {
  delay: 275,
  distance: '150px',
  origin: 'bottom',
  duration: 750,
  opacity: 0,
  scale: 0.7,
  afterReveal: app.init,
  viewFactor: 0.5,
});
ScrollReveal().reveal('.text-change-container', {
  delay: 275,
  distance: '250px',
  origin: 'bottom',
  duration: 850,
  opacity: 0,
  scale: 0.5,
  viewFactor: 0.7,
});

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = [
  'IA este proiectată să imite inteligența umană și să realizeze sarcini precum rezolvarea problemelor, luarea deciziilor și recunoașterea de tipare.',
  'Algoritmii de IA pot analiza cantități vaste de date în câteva secunde, permițând obținerea de înțelegeri mai rapide și mai precise.',
  'IA nu este limitată doar la roboți; ea alimentează și asistenții virtuali, sistemele de recomandare și tehnologia de recunoaștere vocală.',
  'Chatbot-urile alimentate de IA pot purta conversații atât de convingătoare încât au păcălit oameni să creadă că interacționează cu alți oameni.',
  'IA a fost folosită pentru dezvoltarea sistemelor de recunoaștere facială, permițând identificarea și verificarea automată.',
  'Algoritmii de IA pot genera imagini realiste ale obiectelor și persoanelor care nu există în lumea reală.',
  'IA poate fi antrenată să joace jocuri la un nivel suprauman, învingând campioni mondiali la șah, Go și jocuri video.',
  'IA poate fi folosită și în scopuri creative, precum generarea de muzică, artă și chiar redactarea de articole de știri.',
  'IA are potențialul de a transforma domeniul sănătății prin asistarea în diagnosticarea bolilor, prezicerea epidemiilor și personalizarea tratamentelor.',
  'Etica în IA este un domeniu în creștere care abordează dezvoltarea și implementarea responsabilă și etică a sistemelor de IA.',
];

const el = document.querySelector('.text-change');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 5000);
  });
  counter = (counter + 1) % phrases.length;
};

next();
