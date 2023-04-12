import '../styles/index.css';
import '../styles/tailwind.css';
import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('#robotei_infinit', {
    delay: 475,
    distance: '350px',
    origin: 'bottom',
    duration: 750,
    opacity: 0.3,
});
window.onresize = () => location.reload();
