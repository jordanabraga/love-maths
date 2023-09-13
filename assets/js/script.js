// doc variables

let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let displayContainer = document.getElementById("quiz-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");

let scoreContainer = document.querySelector(".score-container");
let startScreen = document.querySelector(".start-screen");
let timeLeft = document.querySelector(".time-left");

// counter variables

let questionCount;
let scoreCount = 0;
let count = 7;
let countdown;

// array with quiz questions

const quizArray = [

    {
        id: "0",
        question: "What does the L stands for?",
        options: ["Lesbos", "Lesbianism", "Lesbian", "Latina"],
        correctAnswer: "Lesbian",
    },
    {
        id: "1",
        question: "What does the G stands for?",
        options: [
            "Homosexual man",
            "Homosexual woman",
            "Homosexual person",
            "Gay"
        ],
        correctAnswer: "Gay",
    },
    {
        id: "2",
        question: "What does the B stands for?",
        options: ["Bicycle", "Bisexual", "Birromantic", "Binary"],
        correctAnswer: "Bisexual",
    },
    {
        id: "3",
        question: "What does the T stands for?",
        options: ["Transexual", "Transgender", "Transgenic", "Transformers"],
        correctAnswer: "Transgender",
    },
    {
        id: "4",
        question: "What does the Q stands for?",
        options: ["Questioning", "Queer", "Queen", "Queergender"],
        correctAnswer: "Queer",
    },
    {
        id: "5",
        question: "What does the I stands for?",
        options: ["Irromantic", "Intersexual", "Internet", "Intersex"],
        correctAnswer: "Intersex",
    },
    {
        id: "6",
        question: "What does the A stands for?",
        options: ["Agender", "Assexual", "Assex", "Avengers"],
        correctAnswer: "Assexual",
    }
];