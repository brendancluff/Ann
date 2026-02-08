const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const backBtn = document.querySelector("#backBtn");

const screenAsk = document.querySelector("#screen-ask");
const screenYay = document.querySelector("#screen-yay");
const confetti = document.querySelector("#confetti");

function showYay() {
  screenAsk.hidden = true;
  screenYay.hidden = false;

  // simple heart/confetti burst
  confetti.innerHTML = "";
  const pieces = 36;
  const emojis = ["💗", "💖", "💕", "💞", "🎉"];

  for (let i = 0; i < pieces; i++) {
    const s = document.createElement("span");
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const left = Math.random() * 100; // percent
    const duration = 1.8 + Math.random() * 1.8; // seconds
    const delay = Math.random() * 0.3; // seconds

    s.style.left = `${left}%`;
    s.style.animationDuration = `${duration}s`;
    s.style.animationDelay = `${delay}s`;

    confetti.appendChild(s);

    // cleanup after it finishes
    setTimeout(() => s.remove(), (duration + delay) * 1000);
  }
}

function showAsk() {
  screenYay.hidden = true;
  screenAsk.hidden = false;
}

yesBtn.addEventListener("click", showYay);
backBtn.addEventListener("click", showAsk);

// Make the "No" button run away
function moveNoButton() {
  const container = screenAsk.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  // Keep it inside the screen/card with padding
  const padding = 16;

  const minX = padding;
  const maxX = container.width - btn.width - padding;
  const minY = 86; // keep it below the title area
  const maxY = container.height - btn.height - padding;

  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "none"; // we used translate earlier; disable after first move
}

// Desktop: hover/focus makes it move
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("focus", moveNoButton);

// Mobile: touching it makes it move (before the click lands)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // stops the click from happening
  moveNoButton();
});

// If she somehow clicks it anyway, still move it
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});
