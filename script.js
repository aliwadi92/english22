"use strict";

// ==========================================
// English Level One Quiz
// Created by Ali Wadi
// ==========================================

const $ = (id) => document.getElementById(id);

const welcomeScreen = $("welcome-screen");
const nameScreen = $("name-screen");
const quizScreen = $("quiz-screen");
const resultScreen = $("result-screen");

const startBtn = $("start-btn");
const backBtn = $("back-btn");
const nameForm = $("name-form");
const playerNameInput = $("player-name");
const nameError = $("name-error");

const displayPlayerName = $("display-player-name");
const currentScore = $("current-score");
const questionNumber = $("question-number");
const progressPercent = $("progress-percent");
const progressBar = $("progress-bar");

const questionCategory = $("question-category");
const questionText = $("question-text");
const questionInstruction = $("question-instruction");
const answerArea = $("answer-area");
const feedback = $("feedback");
const nextBtn = $("next-btn");

const resultName = $("result-name");
const finalScore = $("final-score");
const correctCount = $("correct-count");
const correctTotal = $("correct-total");
const wrongTotal = $("wrong-total");
const totalAnswered = $("total-answered");
const resultMessage = $("result-message");
const restartBtn = $("restart-btn");

// ==========================================
// 100 QUESTIONS
// ==========================================

const questions = [

    // 1-10: Verb to be
    { type:"choice", category:"Grammar", q:"I ___ a student.", options:["am","is","are"], answer:"am" },
    { type:"choice", category:"Grammar", q:"She ___ my sister.", options:["am","is","are"], answer:"is" },
    { type:"choice", category:"Grammar", q:"They ___ happy.", options:["am","is","are"], answer:"are" },
    { type:"text", category:"Grammar", q:"Complete: He ___ a teacher.", answer:["is"] },
    { type:"text", category:"Grammar", q:"Complete: We ___ friends.", answer:["are"] },
    { type:"choice", category:"Grammar", q:"Choose the correct sentence.", options:["I is Ali.","I am Ali.","I are Ali."], answer:"I am Ali." },
    { type:"text", category:"Grammar", q:"Write the negative: I am tired.", answer:["i am not tired","i'm not tired"] },
    { type:"tf", category:"Grammar", q:"She are happy. Is this sentence correct?", answer:"false" },
    { type:"text", category:"Grammar", q:"Complete: ___ you from Libya?", answer:["are"] },
    { type:"choice", category:"Grammar", q:"___ he your brother?", options:["Am","Is","Are"], answer:"Is" },

    // 11-20: Questions and pronouns
    { type:"choice", category:"Grammar", q:"___ is your name?", options:["What","Where","When"], answer:"What" },
    { type:"choice", category:"Grammar", q:"___ are you from?", options:["Who","Where","What"], answer:"Where" },
    { type:"choice", category:"Grammar", q:"___ is your birthday?", options:["When","Who","Where"], answer:"When" },
    { type:"choice", category:"Grammar", q:"___ are you happy?", options:["Why","Who","Where"], answer:"Why" },
    { type:"choice", category:"Grammar", q:"___ are you?", options:["How","When","Who"], answer:"How" },
    { type:"choice", category:"Grammar", q:"___ is that man?", options:["Who","When","How"], answer:"Who" },
    { type:"text", category:"Grammar", q:"Replace Ali with a subject pronoun: Ali is a student.", answer:["he is a student","he's a student"] },
    { type:"text", category:"Grammar", q:"Replace Sara with a subject pronoun: Sara is happy.", answer:["she is happy","she's happy"] },
    { type:"choice", category:"Grammar", q:"Choose the correct pronoun: My brother and I = ___", options:["We","They","He"], answer:"We" },
    { type:"tf", category:"Grammar", q:"'They' is a subject pronoun.", answer:"true" },

    // 21-25: A / An
    { type:"choice", category:"Grammar", q:"I have ___ apple.", options:["a","an","the"], answer:"an" },
    { type:"choice", category:"Grammar", q:"She has ___ book.", options:["a","an","are"], answer:"a" },
    { type:"text", category:"Grammar", q:"Complete: ___ orange.", answer:["an"] },
    { type:"text", category:"Grammar", q:"Complete: ___ banana.", answer:["a"] },
    { type:"tf", category:"Grammar", q:"We say 'an egg'.", answer:"true" },

    // 26-30: Have got / Has got
    { type:"choice", category:"Grammar", q:"I ___ got a brother.", options:["have","has","is"], answer:"have" },
    { type:"choice", category:"Grammar", q:"She ___ got blue eyes.", options:["have","has","are"], answer:"has" },
    { type:"text", category:"Grammar", q:"Complete: They ___ got a car.", answer:["have"] },
    { type:"text", category:"Grammar", q:"Complete: He ___ got black hair.", answer:["has"] },
    { type:"tf", category:"Grammar", q:"We say 'He have got a dog'.", answer:"false" },

    // 31-40: Present Simple
    { type:"choice", category:"Present Simple", q:"I ___ English every day.", options:["study","studies","studying"], answer:"study" },
    { type:"choice", category:"Present Simple", q:"She ___ to school.", options:["go","goes","going"], answer:"goes" },
    { type:"choice", category:"Present Simple", q:"He ___ football.", options:["play","plays","playing"], answer:"plays" },
    { type:"text", category:"Present Simple", q:"Complete: My mother ___ (work) every day.", answer:["works"] },
    { type:"text", category:"Present Simple", q:"Complete: They ___ (live) in Libya.", answer:["live"] },
    { type:"choice", category:"Present Simple", q:"We ___ coffee.", options:["like","likes","liking"], answer:"like" },
    { type:"choice", category:"Present Simple", q:"My brother ___ TV.", options:["watch","watches","watching"], answer:"watches" },
    { type:"text", category:"Present Simple", q:"Complete: It ___ (rain) in winter.", answer:["rains"] },
    { type:"tf", category:"Present Simple", q:"He plays football. This sentence is correct.", answer:"true" },
    { type:"choice", category:"Present Simple", q:"Choose the correct sentence.", options:["She like tea.","She likes tea.","She liking tea."], answer:"She likes tea." },

    // 41-50: Negatives and questions
    { type:"text", category:"Present Simple", q:"Complete: I ___ not like coffee.", answer:["do"] },
    { type:"text", category:"Present Simple", q:"Complete: He ___ not play tennis.", answer:["does"] },
    { type:"choice", category:"Present Simple", q:"___ you speak English?", options:["Do","Does","Is"], answer:"Do" },
    { type:"choice", category:"Present Simple", q:"___ she work here?", options:["Do","Does","Are"], answer:"Does" },
    { type:"text", category:"Present Simple", q:"Complete: Where ___ you live?", answer:["do"] },
    { type:"text", category:"Present Simple", q:"Complete: What ___ he eat?", answer:["does"] },
    { type:"tf", category:"Present Simple", q:"She doesn't likes milk. Is this sentence correct?", answer:"false" },
    { type:"text", category:"Present Simple", q:"Write the negative: I like tea.", answer:["i do not like tea","i don't like tea"] },
    { type:"text", category:"Present Simple", q:"Write the negative: He plays football.", answer:["he does not play football","he doesn't play football"] },
    { type:"choice", category:"Present Simple", q:"Choose the correct question.", options:["Does he work?","Do he work?","Is he work?"], answer:"Does he work?" },

    // 51-58: Adverbs of frequency
    { type:"choice", category:"Vocabulary", q:"Which word means 100% of the time?", options:["Always","Sometimes","Never"], answer:"Always" },
    { type:"choice", category:"Vocabulary", q:"Which word means 0% of the time?", options:["Often","Never","Usually"], answer:"Never" },
    { type:"choice", category:"Vocabulary", q:"Which word means 'not always, but many times'?", options:["Often","Never","Always"], answer:"Often" },
    { type:"text", category:"Vocabulary", q:"Write the opposite of 'always'.", answer:["never"] },
    { type:"choice", category:"Grammar", q:"I ___ brush my teeth every morning.", options:["usually","never","does"], answer:"usually" },
    { type:"tf", category:"Grammar", q:"'Sometimes' means every time.", answer:"false" },
    { type:"choice", category:"Grammar", q:"Choose a frequency adverb.", options:["Usually","Beautiful","Brother"], answer:"Usually" },
    { type:"text", category:"Vocabulary", q:"Write the word: أحيانًا", answer:["sometimes"] },

    // 59-66: Fruits and vegetables
    { type:"text", category:"Vocabulary", q:"Write this word in English: موز", answer:["banana"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: كمثرى", answer:["pear"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: عنب", answer:["grapes"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: طماطم", answer:["tomato"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: بروكلي", answer:["broccoli"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: خيار", answer:["cucumber"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: بصل", answer:["onion"] },
    { type:"choice", category:"Vocabulary", q:"Which one is a fruit?", options:["Banana","Onion","Broccoli"], answer:"Banana" },

    // 67-76: Food and drinks
    { type:"text", category:"Vocabulary", q:"Write this word in English: حليب", answer:["milk"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: شاي", answer:["tea"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: عصير", answer:["juice"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: ماء", answer:["water"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: شوكولاتة", answer:["chocolate"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: بسكويت", answer:["biscuits","cookies"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: بيض", answer:["egg","eggs"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: خبز", answer:["bread"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: جبن", answer:["cheese"] },
    { type:"choice", category:"Vocabulary", q:"Which one is a drink?", options:["Juice","Rice","Chicken"], answer:"Juice" },

    // 77-86: More food vocabulary
    { type:"text", category:"Vocabulary", q:"Write this word in English: دجاج", answer:["chicken"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: سمك", answer:["fish"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: بطاطا", answer:["potato"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: أرز", answer:["rice"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: معكرونة", answer:["pasta"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: فاصوليا", answer:["beans"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: حبوب الإفطار", answer:["cereal"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: فول سوداني", answer:["peanuts"] },
    { type:"text", category:"Vocabulary", q:"Write this word in English: رقائق البطاطا", answer:["crisps","chips"] },
    { type:"choice", category:"Vocabulary", q:"Which one is a vegetable?", options:["Cucumber","Chocolate","Milk"], answer:"Cucumber" },

    // 87-91: Seasons and months
    { type:"choice", category:"Vocabulary", q:"Which season is usually the coldest?", options:["Winter","Summer","Spring"], answer:"Winter" },
    { type:"choice", category:"Vocabulary", q:"Which season is usually the hottest?", options:["Summer","Winter","Autumn"], answer:"Summer" },
    { type:"text", category:"Vocabulary", q:"What is the first month of the year?", answer:["january"] },
    { type:"text", category:"Vocabulary", q:"What is the last month of the year?", answer:["december"] },
    { type:"choice", category:"Vocabulary", q:"Which month comes after March?", options:["April","May","February"], answer:"April" },

    // 92-96: Telling the time
    { type:"time", category:"Time", q:"Write this time in English words: 3:00", answer:["three o'clock","three o clock","three"] },
    { type:"time", category:"Time", q:"Write this time in English words: 7:30", answer:["half past seven","seven thirty"] },
    { type:"time", category:"Time", q:"Write this time in English words: 2:15", answer:["quarter past two","two fifteen"] },
    { type:"time", category:"Time", q:"Write this time in English words: 9:45", answer:["quarter to ten","nine forty five"] },
    { type:"time", category:"Time", q:"Write this time in English words: 5:10", answer:["ten past five","five ten"] },

    // 97-100: Sentence order and review
    { type:"order", category:"Sentence Order", q:"Put the words in the correct order.", words:["every day","English","I","study"], answer:["i study english every day"] },
    { type:"order", category:"Sentence Order", q:"Put the words in the correct order.", words:["tea","likes","She"], answer:["she likes tea"] },
    { type:"order", category:"Sentence Order", q:"Put the words in the correct order.", words:["from","are","Where","you"], answer:["where are you from"] },
    { type:"order", category:"Sentence Order", q:"Put the words in the correct order.", words:["got","He","a dog","has"], answer:["he has got a dog"] }

];

// ==========================================
// GAME STATE
// ==========================================

let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let answered = false;

// ==========================================
// HELPER FUNCTIONS
// ==========================================

function normalize(value) {
    return String(value)
        .toLowerCase()
        .trim()
        .replace(/[.,!?'"“”‘’]/g, "")
        .replace(/\s+/g, " ");
}

function acceptedAnswers(question) {
    return Array.isArray(question.answer)
        ? question.answer
        : [question.answer];
}

function isAnswerCorrect(userAnswer, question) {
    const user = normalize(userAnswer);

    return acceptedAnswers(question).some(answer => {
        return normalize(answer) === user;
    });
}

function showScreen(screenToShow) {
    [
        welcomeScreen,
        nameScreen,
        quizScreen,
        resultScreen
    ].forEach(screen => {
        screen.classList.add("hidden");
    });

    screenToShow.classList.remove("hidden");
}

function shuffleArray(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

// ==========================================
// START BUTTON
// ==========================================

startBtn.addEventListener("click", function () {
    nameError.textContent = "";
    playerNameInput.value = "";
    showScreen(nameScreen);
    playerNameInput.focus();
});

// ==========================================
// BACK BUTTON
// ==========================================

backBtn.addEventListener("click", function () {
    showScreen(welcomeScreen);
});

// ==========================================
// NAME FORM
// ==========================================

nameForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredName = playerNameInput.value.trim();

    if (!enteredName) {
        nameError.textContent = "Please enter your name.";
        playerNameInput.focus();
        return;
    }

    playerName = enteredName;
    startQuiz();
});

// ==========================================
// START QUIZ
// ==========================================

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    displayPlayerName.textContent = playerName;
    currentScore.textContent = "0";

    showScreen(quizScreen);
    displayQuestion();
}

// ==========================================
// DISPLAY QUESTION
// ==========================================

function displayQuestion() {
    answered = false;

    const question = questions[currentQuestionIndex];
    const number = currentQuestionIndex + 1;
    const percent = Math.round((number / questions.length) * 100);

    questionNumber.textContent =
        `Question ${number} of ${questions.length}`;

    progressPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;

    questionCategory.textContent = question.category;
    questionText.textContent = question.q;

    answerArea.innerHTML = "";
    feedback.textContent = "";
    feedback.className = "feedback hidden";

    nextBtn.classList.add("hidden");

    if (question.type === "choice") {
        questionInstruction.textContent = "Choose the correct answer.";
        displayChoiceQuestion(question);
    }

    else if (question.type === "tf") {
        questionInstruction.textContent = "Choose True or False.";
        displayTrueFalseQuestion();
    }

    else if (
        question.type === "text" ||
        question.type === "time"
    ) {
        questionInstruction.textContent =
            question.type === "time"
                ? "Type the time in English words."
                : "Type your answer using the keyboard.";

        displayTextQuestion(question);
    }

    else if (question.type === "order") {
        questionInstruction.textContent =
            "Use the words below to write the correct sentence.";

        displayOrderingQuestion(question);
    }
}

// ==========================================
// MULTIPLE CHOICE
// ==========================================

function displayChoiceQuestion(question) {
    const options = shuffleArray(question.options);

    options.forEach(option => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-btn";
        button.textContent = option;

        button.addEventListener("click", function () {
            submitAnswer(option);
        });

        answerArea.appendChild(button);
    });
}

// ==========================================
// TRUE / FALSE
// ==========================================

function displayTrueFalseQuestion() {
    const options = [
        { label: "True", value: "true" },
        { label: "False", value: "false" }
    ];

    options.forEach(option => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-btn";
        button.textContent = option.label;

        button.addEventListener("click", function () {
            submitAnswer(option.value);
        });

        answerArea.appendChild(button);
    });
}

// ==========================================
// TEXT INPUT
// ==========================================

function displayTextQuestion(question) {
    const input = document.createElement("input");

    input.type = "text";
    input.id = "typed-answer";
    input.className = "answer-input";
    input.placeholder = "Type your answer here...";
    input.autocomplete = "off";
    input.spellcheck = false;

    const submitButton = document.createElement("button");

    submitButton.type = "button";
    submitButton.className = "primary-btn";
    submitButton.textContent = "CHECK ANSWER";

    submitButton.addEventListener("click", function () {
        submitAnswer(input.value);
    });

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            submitAnswer(input.value);
        }
    });

    answerArea.appendChild(input);
    answerArea.appendChild(submitButton);

    input.focus();
}

// ==========================================
// SENTENCE ORDER
// ==========================================

function displayOrderingQuestion(question) {
    const wordsBox = document.createElement("div");
    wordsBox.className = "words-box";

    shuffleArray(question.words).forEach(word => {
        const chip = document.createElement("span");

        chip.className = "word-chip";
        chip.textContent = word;

        wordsBox.appendChild(chip);
    });

    answerArea.appendChild(wordsBox);

    displayTextQuestion(question);
}

// ==========================================
// CHECK ANSWER
// ==========================================

function submitAnswer(userAnswer) {
    if (answered) return;

    const question = questions[currentQuestionIndex];

    if (String(userAnswer).trim() === "") {
        feedback.textContent = "Please enter an answer first.";
        feedback.className = "feedback failure";
        return;
    }

    answered = true;

    const correct = isAnswerCorrect(userAnswer, question);

    if (correct) {
        score++;
        currentScore.textContent = score;

        feedback.textContent = "Correct! Well done!";
        feedback.className = "feedback success";
    } else {
        feedback.textContent =
            "Incorrect. Correct answer: " +
            acceptedAnswers(question)[0];

        feedback.className = "feedback failure";
    }

    // Highlight the selected multiple-choice answer.
    if (
        question.type === "choice" ||
        question.type === "tf"
    ) {
        const buttons = answerArea.querySelectorAll("button");

        buttons.forEach(button => {
            button.disabled = true;

            const buttonValue =
                question.type === "tf"
                    ? button.textContent.toLowerCase()
                    : button.textContent;

            const expected =
                question.type === "tf"
                    ? acceptedAnswers(question)[0]
                    : acceptedAnswers(question)[0];

            if (normalize(buttonValue) === normalize(expected)) {
                button.classList.add("correct");
            } else if (
                normalize(buttonValue) === normalize(userAnswer)
            ) {
                button.classList.add("wrong");
            }
        });
    }

    answerArea.querySelectorAll("input").forEach(input => {
        input.disabled = true;
    });

    answerArea.querySelectorAll("button").forEach(button => {
        if (button.textContent === "CHECK ANSWER") {
            button.disabled = true;
        }
    });

    nextBtn.textContent =
        currentQuestionIndex === questions.length - 1
            ? "SEE RESULTS →"
            : "NEXT QUESTION →";

    nextBtn.classList.remove("hidden");
}

// ==========================================
// NEXT QUESTION
// ==========================================

nextBtn.addEventListener("click", function () {
    if (!answered) return;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
});

// ==========================================
// RESULTS
// ==========================================

function showResults() {
    const total = questions.length;
    const wrong = total - score;
    const percentage = Math.round((score / total) * 100);

    resultName.textContent = `Well done, ${playerName}!`;
    finalScore.textContent = `${percentage}%`;

    correctCount.textContent =
        `${score} / ${total} correct answers`;

    correctTotal.textContent = score;
    wrongTotal.textContent = wrong;
    totalAnswered.textContent = total;

    if (percentage >= 90) {
        resultMessage.textContent =
            "Excellent! Your English is fantastic!";
    } else if (percentage >= 70) {
        resultMessage.textContent =
            "Great job! Keep practising!";
    } else if (percentage >= 50) {
        resultMessage.textContent =
            "Good effort! Practise a little more!";
    } else {
        resultMessage.textContent =
            "Keep learning! You can do better next time!";
    }

    showScreen(resultScreen);
}

// ==========================================
// RESTART QUIZ
// ==========================================

restartBtn.addEventListener("click", function () {
    playerNameInput.value = "";
    nameError.textContent = "";

    showScreen(welcomeScreen);
});

// ==========================================
// CHECK QUESTION COUNT
// ==========================================

console.log("English Level One Quiz loaded.");
console.log("Total questions:", questions.length);

if (questions.length !== 100) {
    console.error(
        `Question count error: expected 100, found ${questions.length}`
    );
}