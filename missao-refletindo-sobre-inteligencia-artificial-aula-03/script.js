let atual = 0;

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o seu habitat preferido?",
        alternativas: [
            "A) Floresta",
            "B) Deserto",
            "C) Oceano",
            "D) Montanhas"
        ]
    },
    {
        enunciado: "Qual é a sua principal característica?",
        alternativas: [
            "A) Força",
            "B) Agilidade",
            "C) Inteligência",
            "D) Resistência"
        ]
    },
    {
        enunciado: "O que você prefere comer?",
        alternativas: [
            "A) Carne",
            "B) Plantas",
            "C) Peixes",
            "D) Incetos"
        ]
    },
    {
        enunciado: "Como você se locomove com mais frequência?",
        alternativas: [
            "A) Emboscada",
            "B) Ataque rápido",
            "C) Caça em grupo",
            "D) Paciência e espera"
        ]
    },
    {
        enunciado: "Qual é a sua estratégia de ataque?",
        alternativas: [
            "A) Correndo",
            "B) Voando",
            "C) Nadando",
            "D) Escalando"
        ]
    }
    {
        enunciado: "Qual é o seu tamanho?",
        alternativas: [
            "A) Pequeno",
            "B) Médio",
            "C) Grande",
            "D) Gigante"
        ]
    }
    {
        enunciado: "Qual é a sua estratégia de ataque?",
        alternativas: [
            "A) Invisibilidade",
            "B) Super velocidade",
            "C) Super força",
            "D) Regeneração rápida"
        ]
    }
    
];
