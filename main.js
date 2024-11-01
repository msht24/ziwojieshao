import './style.css'

const questions = [
  "最喜欢的人物是谁？",
  "为什么来大陆？",
  "你的目标是什么？",
  "在新世界里想做什么？",
  "你怎样人认识爸爸？",  
  "你想去哪个国家",
  "你的爱好是什么？",
  "你的爱好是什么？",
  "你喜欢吃什么？",
  "最近令人不高兴的事是什么？",
  "你的缺点是什么？",  
  "你的优点是什么？"
];

let isSpinning = false;
let currentInterval;

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>我们想认识你！^_^</h1>
    <div class="roulette-box">
      <p id="question" class="question">我们想问一下</p>
    </div>
    <div class="buttons">
      <button id="startBtn" class="button">开始</button>
      <button id="stopBtn" class="button">停止</button>
    </div>
  </div>
`

const questionElement = document.querySelector('#question');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function startRoulette() {
  if (isSpinning) return;
  
  isSpinning = true;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  
  currentInterval = setInterval(() => {
    questionElement.textContent = getRandomQuestion();
  }, 100);
}

function stopRoulette() {
  if (!isSpinning) return;
  
  clearInterval(currentInterval);
  isSpinning = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener('click', startRoulette);
stopBtn.addEventListener('click', stopRoulette);