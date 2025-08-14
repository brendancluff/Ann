// Elements
const form = document.getElementById('diceForm');
const resultDisplay = document.getElementById('result');
const sidesInput = document.getElementById('sides');
const stepInput = document.getElementById('step');
const diceAnimation = document.getElementById('dice-animation');

// Roll history
let rollHistory = [];

// Validate inputs on change
sidesInput.addEventListener('input', validateSettings);
stepInput.addEventListener('input', validateSettings);

// Handle form submission (roll dice)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const sides = parseInt(sidesInput.value);
  const step = parseInt(stepInput.value);

  if (!isValid(sides, step)) {
    return;
  }

  const possibleResults = [];
  for (let i = step; i <= sides; i += step) {
    possibleResults.push(i);
  }

  // Show spinner animation and hide result
  resultDisplay.style.display = 'none';
  diceAnimation.style.display = 'block';

  setTimeout(() => {
    diceAnimation.style.display = 'none';

    const randomIndex = Math.floor(Math.random() * possibleResults.length);
    const roll = possibleResults[randomIndex];

    resultDisplay.textContent = `🎲 You rolled: ${roll}`;
    resultDisplay.style.display = 'block';
    updateHistory(roll);
  }, 2000); // Show spinner for 2 seconds
});

// Validate settings and update message
function validateSettings() {
  const sides = parseInt(sidesInput.value);
  const step = parseInt(stepInput.value);

  if (!isValid(sides, step)) {
    return;
  }

  resultDisplay.textContent = '🎲 Ready to roll!';
}

// Check if values are valid
function isValid(sides, step) {
  if (isNaN(sides) || isNaN(step)) {
    resultDisplay.textContent = '❗ Please enter valid numbers.';
    return false;
  }

  if (sides < 1 || step < 1) {
    resultDisplay.textContent = '❗ Sides and step must be positive.';
    return false;
  }

  if (step > sides) {
    resultDisplay.textContent = '⚠️ Step cannot be greater than number of sides.';
    return false;
  }

  return true;
}

// Show roll history
function updateHistory(roll) {
  rollHistory.push(roll);
  if (rollHistory.length > 5) rollHistory.shift();

  let history = document.getElementById('history');
  if (!history) {
    history = document.createElement('div');
    history.id = 'history';
    history.className = 'result';
    resultDisplay.insertAdjacentElement('afterend', history);
  }

  history.textContent = '🕘 Last rolls: ' + rollHistory.join(', ');
}


