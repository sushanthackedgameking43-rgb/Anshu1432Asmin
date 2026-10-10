// ✨ Create twinkling stars
const starsContainer = document.getElementById("stars");

for (let i = 0; i < 85; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  star.style.animationDuration = `${2 + Math.random() * 4}s`;

  starsContainer.appendChild(star);
}


// 🎵 Background music controls
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "♫ Pause music";
    } catch (error) {
      alert(
        "Please add an audio file named music.mp3 to your website folder!"
      );
    }
  } else {
    music.pause();
    musicButton.textContent = "♫ Play music";
  }
});


// 🎁 Surprise button
document.getElementById("surpriseButton").addEventListener("click", () => {
  const message = document.getElementById("surpriseMessage");

  message.hidden = false;

  message.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });

  // Release floating hearts 💜
  for (let i = 0; i < 22; i++) {
    setTimeout(createHeart, i * 70);
  }
});


// 💕 Create floating hearts
function createHeart() {
  const heart = document.createElement("span");

  heart.className = "floating-heart";

  const hearts = ["💜", "💖", "✨", "💕"];
  heart.textContent =
    hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = `${Math.random() * 95}%`;
  heart.style.animationDuration = `${2 + Math.random() * 1.5}s`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3800);
}


// 🫶 Bestie Quiz questions
const quizQuestions = [
  {
    question: "What's the best part of being besties?",
    options: [
      "Laughing at everything 😂",
      "Making memories ✨",
      "All of it, obviously 💜"
    ],
    answer: 2,
    feedback:
      "Correct answer: ALL OF IT. Bestie points unlocked! 💜"
  },

  {
    question: "What should our friendship have more of?",
    options: [
      "Random adventures 🌈",
      "More inside jokes 🤭",
      "Both, no debate 😎"
    ],
    answer: 2,
    feedback:
      "Exactly! More adventures and more legendary inside jokes."
  },

  {
    question: "What's the plan for future memories?",
    options: [
      "Keep making them 📸",
      "Laugh until we cry 😂",
      "All of the above 🫶"
    ],
    answer: 2,
    feedback:
      "You passed the bestie test! Here's to many more memories. 🎉"
  }
];


// 📝 Quiz elements
let currentQuestion = 0;

const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizProgress = document.getElementById("quizProgress");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuestion = document.getElementById("nextQuestion");


// 🎮 Display a quiz question
function renderQuestion() {
  const item = quizQuestions[currentQuestion];

  quizProgress.textContent =
    `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

  quizQuestion.textContent = item.question;
  quizFeedback.textContent = "";

  nextQuestion.hidden = true;

  nextQuestion.textContent =
    currentQuestion === quizQuestions.length - 1
      ? "Play again ↻"
      : "Next question →";

  quizOptions.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;

    button.addEventListener("click", () => {
      selectAnswer(index, button);
    });

    quizOptions.appendChild(button);
  });
}


// ✅ Check the selected answer
function selectAnswer(index, selectedButton) {
  const item = quizQuestions[currentQuestion];

  const buttons = quizOptions.querySelectorAll("button");

  buttons.forEach(button => {
    button.disabled = true;
  });

  selectedButton.classList.add("chosen");

  if (index === item.answer) {
    quizFeedback.textContent = item.feedback;
  } else {
    quizFeedback.textContent =
      "Cute try! 💜 The bestie answer is: " +
      item.options[item.answer];
  }

  nextQuestion.hidden = false;
}


// ➡️ Move to the next question
nextQuestion.addEventListener("click", () => {
  if (currentQuestion === quizQuestions.length - 1) {
    currentQuestion = 0;
  } else {
    currentQuestion++;
  }

  renderQuestion();
});


// 🚀 Start the quiz
renderQuestion();
