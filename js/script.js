const quizData = [
    {
        question: "O que você faria se estivesse num apocalipse zumbi?",
        answers: [
            { text: "Caçar por diversão", animal: "Leão Zumbi", image: "img/leao.jpg" },
            { text: "Dormir até tudo acabar", animal: "Preguiça Zumbi", image: "img/bicho_preguiça.webp" },
            { text: "Nadar para longe", animal: "Golfinho Zumbi", image: "img/golfinho.jpeg" },
            { text: "Correr o mais rápido possível", animal: "Cavalo Zumbi", image: "img/cavalo.jpeg" }
        ]
    },
    {
        question: "O que você comeria no apocalipse zumbi?",
        answers: [
            { text: "Carne crua", animal: "Leão Zumbi", image: "img/leao.jpg" },
            { text: "Plantas apodrecidas", animal: "Elefante Zumbi", image: "img/elefante.jpeg" },
            { text: "Peixes infectados", animal: "Golfinho Zumbi", image: "img/golfinho.jpeg" },
            { text: "Frutas mortas", animal: "Macaco Zumbi", image: "img/macaco.jpg" }
        ]
    },
    {
        question: "Como você descreveria sua habilidade zumbi?",
        answers: [
            { text: "Caçador(a) implacável", animal: "Leão Zumbi", image: "img/leao.jpg" },
            { text: "Poder telepático", animal: "Golfinho Zumbi", image: "img/golfinho.jpeg" },
            { text: "Força bruta", animal: "Elefante Zumbi", image: "img/elefante.jpeg" },
            { text: "Agilidade e travessuras", animal: "Macaco Zumbi", image: "img/macaco.jpg" }
        ]
    },
    {
        question: "Onde você gostaria de vagar no apocalipse?",
        answers: [
            { text: "Ruínas de uma cidade", animal: "Águia Zumbi", image: "img/aguia.jpeg" },
            { text: "Florestas sombrias", animal: "Leão Zumbi", image: "img/leao.jpg" },
            { text: "Oceano infestado", animal: "Golfinho Zumbi", image: "img/golfinho.jpeg" },
            { text: "Desertos áridos", animal: "Cavalo Zumbi", image: "img/cavalo.jpeg" }
        ]
    }
];

let currentQuestionIndex = 0;
let animalScores = {
    "Leão Zumbi": 0,
    "Preguiça Zumbi": 0,
    "Golfinho Zumbi": 0,
    "Cavalo Zumbi": 0,
    "Elefante Zumbi": 0,
    "Macaco Zumbi": 0,
    "Águia Zumbi": 0
};

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const animalResultElement = document.getElementById('animal-result');
const animalImageContainer = document.getElementById('animal-image-container');
const animalImageElement = document.getElementById('animal-image');
const finalAnimalImageContainer = document.getElementById('final-animal-image-container');
const finalAnimalImageElement = document.getElementById('final-animal-image');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    animalScores = { "Leão Zumbi": 0, "Preguiça Zumbi": 0, "Golfinho Zumbi": 0, "Cavalo Zumbi": 0, "Elefante Zumbi": 0, "Macaco Zumbi": 0, "Águia Zumbi": 0 };
    resultContainer.classList.add('hide');
    nextButton.classList.add('hide');
    animalImageContainer.classList.add('hide');
    finalAnimalImageContainer.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.animal, answer.image));
        const li = document.createElement('li');
        li.appendChild(button);
        answersElement.appendChild(li);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    animalImageContainer.classList.add('hide');
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(animal, image) {
    animalScores[animal]++;
    animalImageElement.src = image;
    animalImageContainer.classList.remove('hide');

    Array.from(answersElement.children).forEach(li => {
        li.firstChild.disabled = true;
    });

    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    resultContainer.classList.remove('hide');
    const topAnimal = Object.keys(animalScores).reduce((a, b) => animalScores[a] > animalScores[b] ? a : b);
    animalResultElement.innerText = `Você seria um(a) ${topAnimal}!`;
    finalAnimalImageElement.src = getAnimalImage(topAnimal);
    finalAnimalImageContainer.classList.remove('hide');
    questionElement.innerText = '';
    answersElement.innerHTML = '';
    nextButton.classList.add('hide');
}

function getAnimalImage(animal) {
    const animalImageMap = {
        "Leão Zumbi": "img/leao.jpg",
        "Preguiça Zumbi": "img/bicho_preguiça.webp",
        "Golfinho Zumbi": "img/golfinho.jpeg",
        "Cavalo Zumbi": "img/cavalo.jpeg",
        "Elefante Zumbi": "img/elefante.jpeg",
        "Macaco Zumbi": "img/macaco.jpg",
        "Águia Zumbi": "img/aguia.jpeg"
    };
    return animalImageMap[animal];
}

restartButton.addEventListener('click', startQuiz);

startQuiz();
