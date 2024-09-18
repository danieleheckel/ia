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
                afirmaçao: "afirmacao"
            },
            {
                texto:"B) Deserto",
                afirmaçao: "afirmacao"
            },
            {
                texto:"C) Oceano",
                afirmaçao: "afirmacao"
            },
            {
                texto:"D) Montanhas",
                afirmaçao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual é a sua principal característica?",
        alternativas: [
            {
                texto: "A) Força",
                afirmaçao: "afirmacao"
            },
            {
                texto:"B) Agilidade",
                afirmaçao: "afirmacao"
            },
            {
                texto:"C) Inteligência",
                afirmaçao: "afirmacao"
            },
            {
                texto:"D) Resistência",
                afirmaçao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "O que você prefere comer?",
        alternativas: [
            {
                texto: "A) Carne",
                afirmaçao: "afirmacao"
            },
            {
                texto:"B) Plantas",
                afirmaçao: "afirmacao"
            },
            {
                texto:"C) Peixes",
                afirmaçao: "afirmacao"
            },
            {
                texto:"D) Incetos",
                afirmaçao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Como você se locomove com mais frequência?",
        alternativas: [
            {
                texto: "A) Correndo",
                afirmaçao: "afirmacao"
            },
            {
                texto:"B) Voando",
                afirmaçao: "afirmacao"
            },
            {
                texto:"C) Nadando",
                afirmaçao: "afirmacao"
            },
            {
                texto:"D) Escalando",
                afirmaçao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual é a sua estratégia de ataque?",
        alternativas: [
            {
                texto: "A) Emboscada",
                afirmaçao: "afirmacao"
            },
            {
                texto:"B) Ataque rápido",
                afirmaçao: "afirmacao"
            },
            {
                texto:"C) Caça em grupo",
                afirmaçao: "afirmacao"
            },
            {
                texto:"D) Paciência e espera",
                afirmaçao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual é o seu tamanho?",
        alternativas: [
            {
                texto: "A) Pequeno",
                afirmaçao: "afirmacao"
            },
            {
                texto:"B) Médio",
                afirmaçao: "afirmacao"
            },
            {
                texto:"C) Grande",
                afirmaçao: "afirmacao"
            },
            {
                texto:"D) Gigante",
                afirmaçao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual é a sua especialidade?",
        alternativas: [
            {
                texto: "A) Invisibilidade",
                afirmaçao: "afirmacao"
            },
            {
                texto:"B) Super velocidade",
                afirmaçao: "afirmacao"
            },
            {
                texto:"C) Super força",
                afirmaçao: "afirmacao"
            },
            {
                texto:"D) Regeneração rápida",
                afirmaçao: "afirmacao"
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
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "wrgerhgrt";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();