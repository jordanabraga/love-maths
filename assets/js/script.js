// doc variables

let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let displayContainer = document.getElementById("quiz-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startButton = document.getElementById("start-button");

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

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click",
    (displayNext = () => {
        questionCount += 1;

        if (questionCount == quizArray.length) {
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            userScore.innerHTML = "Your score is " + scoreCount + " out of " + questionCount;

        } else {
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreater() {


    for (let i of quizArray) {
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
<button class="option-div" onclick="checker(this)">${i.options[0]}</button>
<button class="option-div" onclick="checker(this)">${i.options[1]}</button>
<button class="option-div" onclick="checker(this)">${i.options[2]}</button>
<button class="option-div" onclick="checker(this)">${i.options[3]}</button>

`;

        quizContainer.appendChild(div);
    }
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correctAnswer) {
        userOption.classList.add("correct");
        scoreCount++;
        setTimeout(displayNext, 1000);
    } else {
        userOption.classList.add("incorrect");
        setTimeout(displayNext, 1000);

        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correctAnswer) {
                element.classList.add("correct");
            }
        });
    }

    setInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 7;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};

