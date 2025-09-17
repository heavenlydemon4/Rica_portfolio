
// Grab bars + status elements
const hpBar = document.getElementById("hp-fill");
const mpBar = document.getElementById("mp-fill");
const expBar = document.getElementById("exp-fill");
const levelDisplay = document.getElementById("level");

// Starting values
let hp = 100, mp = 100, exp = 0, level = 1;
let str = 5, dex = 5, intStat = 5, cha = 5, endu = 5;
const strDisplay = document.getElementById("stat-str");
const dexDisplay = document.getElementById("stat-dex");
const intDisplay = document.getElementById("stat-int");
const chaDisplay = document.getElementById("stat-cha");
const enduDisplay = document.getElementById("stat-endu");

// Create level up popup
function showLevelUpPopup() {
  let popup = document.createElement('div');
  popup.textContent = 'Level Up!';
  popup.style.position = 'fixed';
  popup.style.top = '30%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.background = '#00ffcc';
  popup.style.color = '#222';
  popup.style.fontSize = '2.5rem';
  popup.style.fontWeight = 'bold';
  popup.style.padding = '32px 64px';
  popup.style.borderRadius = '18px';
  popup.style.boxShadow = '0 0 32px #00ffcc88';
  popup.style.zIndex = '9999';
  document.body.appendChild(popup);
  setTimeout(() => { popup.remove(); }, 1800);
}

// Update bars
function updateBars() {
  hpBar.style.width = hp + "%";
  mpBar.style.width = mp + "%";
  expBar.style.width = exp + "%";

  // Update stat displays
  strDisplay.textContent = str;
  dexDisplay.textContent = dex;
  intDisplay.textContent = intStat;
  chaDisplay.textContent = cha;
  enduDisplay.textContent = endu;

  // Danger effect
  if (hp <= 20) hpBar.classList.add("danger");
  else hpBar.classList.remove("danger");

  if (mp <= 20) mpBar.classList.add("danger");
  else mpBar.classList.remove("danger");
}

// Simulate progression
setInterval(() => {
  // HP and MP drain
  hp = Math.max(0, hp - 1);
  mp = Math.max(0, mp - 2);
  exp += 5;

  // Auto-heal if HP or MP below 30%
  if (hp < 30) hp = Math.min(60, hp + 4);
  if (mp < 30) mp = Math.min(60, mp + 4);

  // Handle level up
  if (exp >= 100) {
    exp = 0;
    level++;
    levelDisplay.textContent = level;
  // Increase stats on level up
  str += Math.floor(Math.random() * 3) + 1; // +1 to +3
  dex += Math.floor(Math.random() * 2) + 1; // +1 to +2
  intStat += Math.floor(Math.random() * 2) + 1; // +1 to +2
  cha += 1; // +1
  endu += Math.floor(Math.random() * 2) + 1; // +1 to +2
    showLevelUpPopup();
  }

  updateBars();
}, 1000);

// Scroll reveal for sections

const revealElements = document.querySelectorAll(".portfolio");

window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
});

// Init HUD
updateBars();

// Heal button logic
// Heal button logic removed (auto-heal now)
