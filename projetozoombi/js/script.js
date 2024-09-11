const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o seu habitat preferido?",
        alternativas: [
            {
                texto: "A) Floresta",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"B) Deserto",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"C) Oceano",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"D) Montanhas",
                afirmaçao: "afirmaçao"
            }
        ]
    },
    {
        enunciado: "Qual é a sua principal característica?",
        alternativas: [
            {
                texto: "A) Força",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"B) Agilidade",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"C) Inteligência",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"D) Resistência",
                afirmaçao: "afirmaçao"
            }
        ]
    },
    {
        enunciado: "O que você prefere comer?",
        alternativas: [
            {
                texto: "A) Carne",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"B) Plantas",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"C) Peixes",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"D) Incetos",
                afirmaçao: "afirmaçao"
            }
        ]
    },
    {
        enunciado: "Como você se locomove com mais frequência?",
        alternativas: [
            {
                texto: "A) Correndo",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"B) Voando",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"C) Nadando",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"D) Escalando",
                afirmaçao: "afirmaçao"
            }
        ]
    },
    {
        enunciado: "Qual é a sua estratégia de ataque?",
        alternativas: [
            {
                texto: "A) Emboscada",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"B) Ataque rápido",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"C) Caça em grupo",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"D) Paciência e espera",
                afirmaçao: "afirmaçao"
            }
        ]
    },
    {
        enunciado: "Qual é o seu tamanho?",
        alternativas: [
            {
                texto: "A) Pequeno",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"B) Médio",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"C) Grande",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"D) Gigante",
                afirmaçao: "afirmaçao"
            }
        ]
    },
    {
        enunciado: "Qual é a sua especialidade?",
        alternativas: [
            {
                texto: "A) Invisibilidade",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"B) Super velocidade",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"C) Super força",
                afirmaçao: "afirmaçao"
            },
            {
                texto:"D) Regeneração rápida",
                afirmaçao: "afirmaçao"
            }
        ]
    }
    
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();
}

mostraPergunta()

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();