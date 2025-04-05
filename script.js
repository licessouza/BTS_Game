// PARTE 1: LISTA DE PERGUNTAS E RESPOSTAS
// aplicando o JSON: estamos armazenando as perguntas e respostas do nosso quiz. Utilizando o LINGUAJAR de python, temos um dicionário aninhado.
perguntas = [
    {
        pergunta: "Qual o nome do primeiro mixtape solo de RM?",
        respostas: [
            { opcao: "Mono", correto: false },
            { opcao: "RM", correto: true },
            { opcao: "D-2", correto: false }
        ]
    },
    {
        pergunta: "Em que ano o BTS debutou?",
        respostas: [
            { opcao: "2017", correto: false },
            { opcao: "2019", correto: false },
            { opcao: "2013", correto: true }
        ]
    },
    {
        pergunta: "Qual foi o primeiro álbum do BTS?",
        respostas: [
            { opcao: "Skool Luv Affair", correto: false },
            { opcao: "O!RUL8,2?", correto: false },
            { opcao: "2 Cool 4 Skool", correto: true }
        ]
    },
    {
        pergunta: "Qual o nome do líder do BTS?",
        respostas: [
            { opcao: "Namjoon", correto: true },
            { opcao: "Yoongi", correto: false },
            { opcao: "Jungkook", correto: false }
        ]
    },
    {
        pergunta: "Qual o nome do webtoon inspirado no BTS?",
        respostas: [
            { opcao: "Save Me", correto: true },
            { opcao: "BT21 Universe", correto: false },
            { opcao: "In the SOOP", correto: false }
        ]
    },
    {
        pergunta: "Qual o nome do documentário do BTS lançado no YouTube Premium?",
        respostas: [
            { opcao: "Burn the Stage: The Movie", correto: false },
            { opcao: "Break the Silence: The Movie", correto: false },
            { opcao: "BTS: Permission to Dance on Stage - LA", correto: true }
        ]
    },
    {
        pergunta: "Qual o nome da música solo de Jimin inspirada no livro 'Os Contos Inacabados' de J.R.R. Tolkien?",
        respostas: [
            { opcao: "Lie", correto: false },
            { opcao: "Serendipity", correto: false },
            { opcao: "Filter", correto: true }
        ]
    },
    {
        pergunta: "Qual o nome do álbum do BTS que alcançou o topo da parada Billboard 200 pela primeira vez?",
        respostas: [
            { opcao: "Love Yourself: Tear", correto: true },
            { opcao: "Map of the Soul: Persona", correto: false },
            { opcao: "BE", correto: false }
        ]
    },
    {
        pergunta: "Qual o nome do programa de variedades do BTS transmitido pela V Live?",
        respostas: [
            { opcao: "Run BTS!", correto: true },
            { opcao: "BTS GAYO", correto: false },
            { opcao: "Bon Voyage", correto: false }
        ]
    },
    {
        pergunta: "Qual o nome da música do BTS inspirada no filme 'Your Name'?",
        respostas: [
            { opcao: "Euphoria", correto: false },
            { opcao: "DNA", correto: false },
            { opcao: "Mikrokosmos", correto: true }
        ]
    }
];

// PARTE 2: PEGANDO OS ELEMENTOS DO HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const exibirMensagem = document.querySelector(".msg");

// PARTE 3: VARIÁVEIS PARA CONTROLE DO JOGO
let indiceAtual = 0;
let acertos = 0;

// PARTE 4: FUNÇÃO PARA CARREGAR UMA NOVA PERGUNTA
function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;  //atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual];   // PEGA A PERGUNTA ATUAL
    perguntaElemento.innerHTML = perguntaAtual.pergunta;    // EXIBE A PERGUNTA

    respostasElemento.innerHTML = "";   // LIMPA AS RESPOSTAS ANTERIORES

    // ITERAÇÃO SOBRE TODAS AS RESPOSTAS DA PERGUNTA ATUAL:
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        const resposta = perguntaAtual.respostas[i];    // PEGA A RESPOSTA ATUAL COM BASE NO INDICE "i"
        const botao = document.createElement("button");  // CRIA UM NOVO ELEMENTO 'button'
        botao.classList.add("botao-resposta");  // ADICIONA A CLASSE CSS 'botao-resposta' AO BOTAO PARA ESTILIZAR
        botao.innerText = resposta.opcao;      // DEFINE O TEXTO DO BOTAO COM A OPCAO DE RESPOSTA (resposta.opcao)
        botao.onclick = function () {
            // SE A RESPOSTA FOR >correta< (resposta.correto === true), INCREMENTA O NUMERO DE ACERTOS
            if (resposta.correto) {
                //acertos = acertos +1;
                acertos++;
            };

            // AVANÇA PARA PROXIMA PERGUNTA
            indiceAtual++

            // SE AINDA HOUVER PERGUNTAS, CARREGA A PROXIMA
            if (indiceAtual < perguntas.length) {
                carregarPergunta();
            } else {     // SE NAO HOUVER MAIS PERGUNTAS, FINALIZA O JOGO
                finalizarJogo();
            };
        };

        // ADICIONA O BOTAO DE RESPOSTA À TELA, DENTRO DO ELEMENTO 'respostasElemento'
        respostasElemento.appendChild(botao);
    }
}
//PARTE 5: FUNÇÃO PARA MOSTRAR A TELA FINAL
function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}!`;    // EXIBE O RESULTADO
    conteudo.style.display = "none";    // ESCONDE AS PERGUNTAS
    conteudoFinal.style.display = "flex"; // MOSTRA A TELA FINAL
}

//PARTE 6: INICIANDO O JOGO PELA PRIMEIRA VEZ
carregarPergunta();
