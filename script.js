const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");

let noCount = 0;

const noMessages = [
  "Are you sure? 😐",
  "Think again… 🥺",
  "That button seems dangerous 👀",
  "I won’t give up that easily 😤",
  "Okay now you’re just being mean 😭",
  "Last chance… PLEASE 💔"
];

noBtn.addEventListener("mouseover", () => {
  noCount++;
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

  message.textContent = noMessages[Math.min(noCount, noMessages.length - 1)];
});

yesBtn.addEventListener("click", () => {
  document.getElementById("question").textContent =
    "YAYYYY 💞 I knew it!!!";
  message.textContent =
    "You just made my heart do a happy dance 💃🕺";

  noBtn.style.display = "none";
  yesBtn.style.display = "none";

  startConfetti();
});
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10 + 5,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
    c.y += c.d;
    if (c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(animate);
}
