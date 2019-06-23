window.addEventListener("load", init);

// Globals

//Available Levels

const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

//To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "interest",
  "peasant",
  "welcome",
  "negligence",
  "offender",
  "cigarette",
  "constellation",
  "surface",
  "color-blind",
  "suitcase",
  "discreet",
  "priority",
  "decline",
  "judgment",
  "destruction",
  "underline",
  "experiment",
  "ceiling",
  "dedicate",
  "satellite",
  "determine",
  "sequence",
  "medicine",
  "generate",
  "descent",
  "warrant",
  "support",
  "struggle",
  "jurisdiction",
  "reinforce",
  "quantity",
  "opinion",
  "designer",
  "intensify",
  "difficulty",
  "quarter",
  "haircut",
  "childish",
  "breakdown",
  "similar",
  "invasion",
  "process",
  "wriggle",
  "current",
  "torture",
  "privilege",
  "epicalyx",
  "loyalty",
  "radiation",
  "captain",
  "machinery",
  "veteran",
  "sandwich",
  "identity",
  "discount",
  "cooperation",
  "invisible",
  "bloodshed",
  "understand",
  "division",
  "perfume",
  "outlook",
  "ministry",
  "chemistry",
  "formulate",
  "instrument",
  "vigorous",
  "nursery",
  "silence",
  "pottery",
  "apology",
  "reality",
  "autonomy",
  "circulation",
  "percent",
  "committee",
  "grandmother",
  "introduction",
  "crystal",
  "separate",
  "withdrawal",
  "exemption",
  "plaster",
  "respect",
  "emphasis",
  "address",
  "abandon",
  "fantasy",
  "include",
  "prescription",
  "culture",
  "mislead",
  "business",
  "cylinder",
  "exploit",
  "supplementary",
  "insurance",
  "decrease",
  "communist",
  "electronics"
];

// Initialize Game

function init() {
  //Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  //Start matching on input
  wordInput.addEventListener("input", startMatch);
  //Call countrown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  //If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Pick and Show random word
function showWord(words) {
  //Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  //Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    //Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

//Check game status

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
