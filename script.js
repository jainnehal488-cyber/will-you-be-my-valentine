const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");

let noCount = 0;

const noMessages = [
  "Excuse me?? 😐",
  "That was rude.",
  "Okay but like… why?",
  "My feelings are loading… ⏳",
  "You’re smiling. I know it.",
  "I’m telling your mom.",
  "This button is stressed.",
  "Just click yes bobooo 😭"
];
.whisper {
  font-size: 14px;
  opacity: 0.6;
  letter-spacing: 1px;
  margin-top: -10px;
}
yesBtn.addEventListener("mouseover", () => {
  yesBtn.textContent = "Don’t act like you don’t want to 😌";
});

yesBtn.addEventListener("mouseout", () => {
  yesBtn.textContent = "YES 💖";
});
yesBtn.addEventListener("mouseenter", () => {
  document.body.style.filter = "brightness(0.92)";
});
yesBtn.addEventListener("mouseleave", () => {
  document.body.style.filter = "brightness(1)";
});
yesBtn.addEventListener("click", () => {
  const iframe = document.getElementById("ytMusic").contentWindow;

  // unmute + play
  iframe.postMessage(
    '{"event":"command","func":"unMute","args":""}',
    "*"
  );
  iframe.postMessage(
    '{"event":"command","func":"playVideo","args":""}',
    "*"
  );
});


noBtn.addEventListener("mouseover", () => {
  noCount++;
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

  message.textContent = noMessages[Math.min(noCount, noMessages.length - 1)];
});

yesBtn.addEventListener("click", () => {
  document.getElementById("question").textContent = "Come here. 💋";
  message.textContent = "I’ve been waiting for that.";

  document.body.style.background =
    "linear-gradient(135deg, #2b2b2b, #000)";

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
