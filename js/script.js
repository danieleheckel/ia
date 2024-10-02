const quizData = [
    {
        question: "onde você moraria?",
        answers: [
            { text: "Nas rochas", animal: "Leão Zumbi", image: "img/leao.jpg" },
            { text: "Na floresta", animal: "Preguiça Zumbi", image: "img/bicho_preguiça.webp" },
            { text: "No oceano", animal: "Golfinho Zumbi", image: "img/golfinho.jpeg" },
            { text: "Na savana", animal: "Elefante Zumbi", image: "img/elefante.jpeg" },
            { text: "Em cidades abandonadas", animal: "Macaco Zumbi", image: "img/macaco.jpg" },
            { text: "Em campos", animal: "Cavalo Zumbi", image: "img/cavalo.jpeg" },
            { text: "Nas montanhas", animal: "Águia Zumbi", image: "img/aguia.jpeg" }
        ]
    },
    {
        question: "O que você come?",
        answers: [
            { text: "De outros animais, humanos", animal: "Leão Zumbi", image: "img/leao.jpg" },
            { text: "De folhas das árvores", animal: "Preguiça Zumbi", image: "img/bicho_preguiça.webp" },
            { text: "Peixes, restos de embarcações", animal: "Golfinho Zumbi", image: "img/golfinho.jpeg" },
            { text: "Plantas, frutas e carne fresca", animal: "Elefante Zumbi", image: "img/elefante.jpeg" },
            { text: "Suprimentos de mecados vazios", animal: "Macaco Zumbi", image: "img/macaco.jpg" },
            { text: "Frutas, feno e animais pequenos", animal: "Cavalo Zumbi", image: "img/cavalo.jpeg" },
            { text: "Outros animais, humanos e suprimentos humanos acessíveis", animal: "Águia Zumbi", image: "img/aguia.jpeg" }
        ]
    },
    {
        question: "Qual sua habilidade zumbi?",
        answers: [
            
            { text: "Ser um dos animais mais fortes e violentos", animal: "Leão Zumbi", image: "img/leao.jpg" },
            { text: "Se esconder e ter garras enormes e fortes", animal: "Preguiça Zumbi", image: "img/bicho_preguiça.webp" },
            { text: "Nadar super rápido, muito esperto", animal: "Golfinho Zumbi", image: "img/golfinho.jpeg" },
            { text: "Marcar suas vítimas, esmagar tudo por onde anda", animal: "Elefante Zumbi", image: "img/elefante.jpeg" },
            { text: "É muito esperto, consegue usar armas", animal: "Macaco Zumbi", image: "img/macaco.jpg" },
            { text: "Muito rápido, percorre longas distâncias", animal: "Cavalo Zumbi", image: "img/cavalo.jpeg" },
            { text: "Voa, ter garras afiadas", animal: "Águia Zumbi", image: "img/aguia.jpeg" }
        ]
    },
    {
        question: "O que você faria se vesse um humano?",
        answers: [
            { text: "Devorar", animal: "Leão Zumbi", image: "img/leao.jpg" },
            { text: "Abraçar", animal: "Preguiça Zumbi", image: "img/bicho_preguiça.webp" },
            { text: "Afogar", animal: "Golfinho Zumbi", image: "img/golfinho.jpeg" },
            { text: "Esmagar", animal: "Elefante Zumbi", image: "img/elefante.jpeg" },
            { text: "Robar", animal: "Macaco Zumbi", image: "img/macaco.jpg" },
            { text: "Atropelar", animal: "Cavalo Zumbi", image: "img/cavalo.jpeg" },
            { text: "Despedassar", animal: "Águia Zumbi", image: "img/aguia.jpeg" }
        ]
    },
    {
        question: "Quantos andam no seu bando (machos e fêmeas)?",
        answers: [
            { text: "1 a 12", animal: "Leão Zumbi", image: "img/leao.jpg" },
            { text: "1 a 2", animal: "Preguiça Zumbi", image: "img/bicho_preguiça.webp" },
            { text: "10 a 30", animal: "Golfinho Zumbi", image: "img/golfinho.jpeg" },
            { text: "8 a 100", animal: "Elefante Zumbi", image: "img/elefante.jpeg" },
            { text: "1 a 30", animal: "Macaco Zumbi", image: "img/macaco.jpg" },
            { text: "1 a 10", animal: "Cavalo Zumbi", image: "img/cavalo.jpeg" },
            { text: "Solitário", animal: "Águia Zumbi", image: "img/aguia.jpeg" }
        ]
    },
    {
        question: "Você seria amigável?",
        answers: [
            { text: "Hostil", animal: "Leão Zumbi", image: "img/leao.jpg", animal: "Elefante Zumbi", image: "img/elefante.jpeg",  animal: "Águia Zumbi", image: "img/aguia.jpeg" },
            { text: "Tranquilo", animal: "Preguiça Zumbi", image: "img/bicho_preguiça.webp", animal: "Cavalo Zumbi", image: "img/cavalo.jpeg" },
            { text: "Parcial", animal: "Golfinho Zumbi", image: "img/golfinho.jpeg", animal: "Macaco Zumbi", image: "img/macaco.jpg" },
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
