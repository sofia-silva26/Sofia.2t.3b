const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
   {
        enunciado: "Qual o nome dos dois irmãos protagonistas da série?",
        imagem: "imagens/irmaos.jpeg",
        alternativas: [
            {
                texto: "Dean e Sam Winchester",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "John e Bobby Winchester",
                afirmacao: "Falso"
            },
            {
                texto: "Dean e Adam Winchester",
                afirmacao: "Falso"
            },
            {
                texto: "Sam e Jack Winchester",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do carro que Dean dirige na série?",
        alternativas: [
            {
                texto: "Ford Mustang 1965",
                afirmacao: "Falso"
            },
            {
                texto: "Chevrolet Impala 1967",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Chevrolet Camaro 1969",
                afirmacao: "Falso"
            },
            {
                texto: "Dodge Charger 1970",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual criatura os irmãos caçam no primeiro episódio da série?",
        alternativas: [
            {
                texto: "Mulher de Branco",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Vampiro",
                afirmacao: "Falso"
            },
            {
                texto: "Fantasma",
                afirmacao: "Falso"
            },
            {
                texto: "Lobisomem",
                afirmacao: "Falso"
            }      
        ]
    },
    {
        enunciado: "Quem é o anjo que ajuda os irmãos Winchester em várias temporadas?",
        alternativas: [
            {
                texto: "Gabriel",
                afirmacao: "Falso"
            },
            {
                texto: "Rafael",
                afirmacao: "Falso"
            },
            {
                texto: "Michael",
                afirmacao: "Falso"
            },
            {
                texto: "Castiel",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "Qual é o apelido que Dean costuma dar ao anjo Castiel?",
        alternativas: [
            {
                texto: "Cas",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Casi",
                afirmacao: "Falso"
            },
            {
                texto: "Cassy",
                afirmacao: "Falso"
            },
            {
                texto: "Angel",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do pai dos irmãos Winchester?",
        alternativas: [
            {
                texto: "Bobby Winchester",
                afirmacao: "Falso"
            },
            {
                texto: "John Winchester",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Samuel Winchester",
                afirmacao: "Falso"
            },
            {
                texto: "Michael Winchester",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Em qual canal a série Supernatural foi originalmente exibida nos Estados Unidos?",
        alternativas: [
            {
                texto: "The CW",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "NBC",
                afirmacao: "Falso"
            },
            {
                texto: "FOX",
                afirmacao: "Falso"
            },
            {
                texto: "ABC",
                afirmacao: "Falso"
            }    
        ]
    },
    {
        enunciado: "Qual é o nome do demônio conhecido por possuir olhos amarelos?",
        alternativas: [
            {
                texto: "Crowley",
                afirmacao: "Falso"
            },
            {
                texto: "Azazel",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Alastair",
                afirmacao: "Falso"
            },
            {
                texto: "Abaddon",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Quantas temporadas a série Supernatural possui?",
        alternativas: [
            {
                texto: "12 temporadas",
                afirmacao: "Falso"
            },
            {
                texto: "13 temporadas",
                afirmacao: "Falso"
            },
            {
                texto: "14 temporadas",
                afirmacao: "Falso"
            },
            {
                texto: "15 temporadas",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do demônio que se torna um aliado dos irmãos Winchester e governa o Inferno?",
        alternativas: [
            {
                texto: "Azazel",
                afirmacao: "Falso"
            },
            {
                texto: "Abaddon",
                afirmacao: "Falso"
            },
            {
                texto: "Crowley",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Alastair",
                afirmacao: "Falso"
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    historiaFinal += afirmacaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    if (Object.keys(contagemAfirmacoes).length > 0) {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://sofia-silva26.github.io/Sofia.2t.3b/">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        const numeroVerdadeiro = contagemAfirmacoes['Verdadeiro'] || 0;
        textoResultado.textContent = numeroVerdadeiro > 1 ? numeroVerdadeiro : 0;
        caixaAlternativas.textContent = "";
    } else {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://sofia-silva26.github.io/Sofia.2t.3b/">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        textoResultado.textContent = 0;
        caixaAlternativas.textContent = "";
    }
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {

            // Desabilita todos os botões
            const botoes = caixaAlternativas.querySelectorAll("button");

            botoes.forEach((botao, indice) => {
                botao.disabled = true;

                if (perguntaAtual.alternativas[indice].afirmacao === "Verdadeiro") {
                    botao.style.backgroundColor = "green";
                    botao.style.color = "white";
                } else {
                    botao.style.backgroundColor = "red";
                    botao.style.color = "white";
                }
            });

            // Aguarda 1 segundo antes de ir para a próxima pergunta
            setTimeout(() => {
                respostaSelecionada(alternativa);
            }, 1000);

        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

