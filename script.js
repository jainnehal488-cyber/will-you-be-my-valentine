const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const progress = document.getElementById("progress");

let noCount = 0;

const noMessages = [
  "Excuse me?? 😐",
  "That was rude.",
  "Okay but like… why?",
  "My feelings are loading… ⏳",
  "You’re smiling. I know it.",
  "Playing hard to get, huh? 😏",
  "This button is stressed.",
  "Just click yes bobooo 😭"
];

// NO button runs + guilt trip
noBtn.addEventListener("mouseover", () => {
  noCount++;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  message.textContent =
    noMessages[Math.min(noCount, noMessages.length - 1)];

  progress.style.width = Math.min(noCount * 14, 100) + "%";

  yesBtn.style.transform = `scale(${1 + noCount * 0.08})`;
});

// Sexy tease on YES hover
yesBtn.addEventListener("mouseenter", () => {
  yesBtn.textContent = "Don’t act shy 😌";
  document.body.style.filter = "brightness(0.92)";
});

yesBtn.addEventListener("mouseleave", () => {
  yesBtn.textContent = "YES 💖";
  document.body.style.filter = "brightness(1)";
});

// YES click = romance unlocked
yesBtn.addEventListener("click", () => {
  document.getElementById("question").textContent = "Come here. 💋";
  message.textContent = "I knew you’d give in.";

  noBtn.style.display = "none";
  yesBtn.style.display = "none";

  document.body.style.background =
    "linear-gradient(135deg, #1e1e2f, #000)";

  // Play YouTube music
  const iframe = document.getElementById("ytMusic").contentWindow;
  iframe.postMessage(
    '{"event":"command","func":"unMute","args":""}', "*"
  );
  iframe.postMessage(
    '{"event":"command","func":"playVideo","args":""}', "*"
  );

  startConfetti();
});

// CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

function startConfetti() {
  for (let i = 0; i < 160; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 8 + 4,
      color: `hsl(${Math.random() * 360},100%,70%)`
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

