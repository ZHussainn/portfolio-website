// Typing Effect
var typed = new Typed("#typed", {
  strings: ["Software Engineer", "Web Developer", "Creative Builder"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Scroll Animations
AOS.init();

// Floating Numbers on Hover
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    for (let i = 0; i < 12; i++) {
      createFloatingCode(card);
    }
  });
});

function createFloatingCode(card) {
  const span = document.createElement('span');
  span.classList.add('code-float');

  // Random number or code symbol
  const codes = ["{ }", "42", "< />", "01", ";", "++"];
  span.textContent = codes[Math.floor(Math.random() * codes.length)];

  // Random x position
  span.style.left = Math.random() * card.offsetWidth + "px";
  span.style.top = card.offsetHeight + "px";

  card.appendChild(span);

  // Remove after animation
  setTimeout(() => span.remove(), 1500);
}

// Particles.js Config
particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true, color: "#0ff" },
    color: { value: "#0ff" }
  }
});
