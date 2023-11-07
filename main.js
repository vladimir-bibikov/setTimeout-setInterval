
1//
let message = () => console.log("web33 rulezzz");
setTimeout(message, 3000);


2//
function printNumbers() {
  let current = 1;
  let timerId = setInterval(function() {
    console.log(current);
    if (current === 10) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
};
setTimeout(printNumbers, 4000);

3//
let counter = (start, end) => {
  let cur = start;
  let timerId = setInterval(function() {
    console.log(cur);
    if (cur === end) {
      clearInterval(timerId);
    }
    cur++;
  }, 1000);
};
setTimeout(counter, 15000, 1, 22);

4//
let random = () => console.log(`Random number is ${Math.round(Math.random() * 100)}`);
setTimeout(random, 38000);

5//
let getNum = () => Math.floor(Math.random() * 256);
setInterval(() =>
  document.body.style.backgroundColor = 'rgb(' + getNum() + ',' + getNum() + ',' + getNum() + ')'
, 1000);

6//
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 200;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

7//
function showMessage() {
  let current = 1;
  let timerId = setInterval(function() {
    console.log(`${current} iteration with 2 seconds delay`);
    if (current === 10) {
      clearInterval(timerId);
    }
    current++;
  }, 2000);
};
setTimeout(showMessage, 39000);

8//

document.addEventListener("DOMContentLoaded", () => {
  const choices = ["rock", "paper", "scissors"];
  const buttons = document.querySelectorAll("button");
  const result = document.getElementById("result");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const userChoice = e.target.id;
      let computerChoice = choices[Math.floor(Math.random() * 3)];
  

      if (userChoice === computerChoice) {
        result.textContent = "It's a draw, Bro!";
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
      ) {
        result.textContent = `You win! Computer chose ${computerChoice}.`;
      } else {
        result.textContent = `You lose! Computer chose ${computerChoice}.`;
      }
    });
  });
});


9//

let myImage = document.getElementById("image");

let imageArray = ["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg"];

let imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage, 5000);

10//
setTimeout(function() {
  document.getElementById('moveEl').style.display = 'flex';
}, 3000);

