// Interactive Quiz JS
const quizData = [
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2 // CSS
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Google", "Microsoft", "Apple"],
    answer: 0 // Netscape
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<style>", "<script>", "<link>", "<css>"],
    answer: 2 // <link>
  }
];

// Show quiz questions and options
const quizContainer = document.getElementById('quiz-container');
quizData.forEach((q, idx) => {
  const div = document.createElement('div');
  div.innerHTML = `<strong>${q.question}</strong>`;
  q.options.forEach((opt, i) => {
    div.innerHTML += `<br>
      <input type="radio" name="q${idx}" value="${i}"> ${opt}`;
  });
  quizContainer.appendChild(div);
});

// Submit quiz and show result
document.getElementById('submit-quiz').onclick = function() {
  let score = 0;
  quizData.forEach((q, idx) => {
    const radios = document.getElementsByName(`q${idx}`);
    radios.forEach(radio => {
      if (radio.checked && parseInt(radio.value) === q.answer) {
        score++;
      }
    });
  });
  document.getElementById('quiz-result').innerText =
    `You scored ${score} out of ${quizData.length}!`;
};


// API Fetch JS
document.getElementById('get-joke').onclick = async function() {
  const jokeHolder = document.getElementById('joke-holder');
  jokeHolder.innerText = 'Loading...';
  try {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    jokeHolder.innerText = `${data.setup}\n${data.punchline}`;
  } catch (e) {
    jokeHolder.innerText = 'Failed to fetch joke. Please try again.';
  }
};
