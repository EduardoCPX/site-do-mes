// ==========================================
// BANCO DE PERGUNTAS
// Cada resposta possui um "proximo"
// que indica qual pergunta será exibida.
// ==========================================

const perguntas = {

    inicio: {
        texto: "Qual é o principal problema apresentado pela sua moto?",
        respostas: [
            {
                texto: "A moto não liga",
                proximo: "naoLiga"
            },
            {
                texto: "A moto está fazendo barulho",
                proximo: "barulho"
            },
            {
                texto: "A moto liga, mas está fraca",
                proximo: "fraca"
            },
            {
                texto: "Problema nos freios",
                proximo: "freio"
            },
            {
                texto: "Está esquentando demais",
                proximo: "superaquecimento"
            },
            {
                texto: "Consumo alto ou fumaça",
                proximo: "consumo"
            },
            {
                texto: "Pneus ou direção",
                proximo: "pneus"
            }
        ]
    },


    naoLiga: {
        texto: "Quando você tenta ligar a moto, o que acontece?",
        respostas: [
            {
                texto: "O motor de partida nem gira",
                proximo: "eletrica"
            },
            {
                texto: "O motor gira, mas não pega",
                proximo: "combustivel"
            },
            {
                texto: "A bateria parece descarregada",
                proximo: "bateria"
            }
        ]
    },


    eletrica: {
        texto: "O painel e os faróis funcionam normalmente?",
        respostas: [
            {
                texto: "Sim",
                proximo: "motorPartida"
            },
            {
                texto: "Não",
                proximo: "bateria"
            },
            {
                texto: "Funcionam às vezes",
                proximo: "conexao"
            }
        ]
    },


    motorPartida: {
        texto: "Ao apertar o botão de partida, você ouve algum clique?",
        respostas: [
            {
                texto: "Sim, apenas um clique",
                proximo: "resultadoMotorPartida"
            },
            {
                texto: "Vários cliques",
                proximo: "resultadoBateria"
            },
            {
                texto: "Não ouço nada",
                proximo: "resultadoInterruptor"
            }
        ]
    },


    combustivel: {
        texto: "A moto possui combustível suficiente no tanque?",
        respostas: [
            {
                texto: "Sim",
                proximo: "vela"
            },
            {
                texto: "Não",
                proximo: "resultadoCombustivel"
            },
            {
                texto: "Não tenho certeza",
                proximo: "resultadoCombustivel"
            }
        ]
    },


    vela: {
        texto: "A vela de ignição foi verificada recentemente?",
        respostas: [
            {
                texto: "Sim, está em bom estado",
                proximo: "resultadoAlimentacao"
            },
            {
                texto: "Não",
                proximo: "resultadoVela"
            },
            {
                texto: "Está muito suja",
                proximo: "resultadoVela"
            }
        ]
    },


    bateria: {
        texto: "A bateria da moto tem quanto tempo de uso?",
        respostas: [
            {
                texto: "Menos de 1 ano",
                proximo: "resultadoCarga"
            },
            {
                texto: "Mais de 2 anos",
                proximo: "resultadoBateria"
            },
            {
                texto: "Não sei",
                proximo: "resultadoBateria"
            }
        ]
    },


    conexao: {
        texto: "Os terminais da bateria estão limpos e bem apertados?",
        respostas: [
            {
                texto: "Sim",
                proximo: "resultadoEletrica"
            },
            {
                texto: "Não",
                proximo: "resultadoConexao"
            },
            {
                texto: "Não sei verificar",
                proximo: "resultadoConexao"
            }
        ]
    },


    barulho: {
        texto: "Que tipo de barulho você está ouvindo?",
        respostas: [
            {
                texto: "Batida metálica",
                proximo: "batida"
            },
            {
                texto: "Chiado ou assobio",
                proximo: "chiado"
            },
            {
                texto: "Barulho vindo da corrente",
                proximo: "corrente"
            }
        ]
    },


    batida: {
        texto: "A batida aumenta quando você acelera?",
        respostas: [
            {
                texto: "Sim",
                proximo: "resultadoMotor"
            },
            {
                texto: "Não",
                proximo: "resultadoSuspensao"
            },
            {
                texto: "Acontece somente com a moto quente",
                proximo: "resultadoMotor"
            }
        ]
    },


    chiado: {
        texto: "O chiado aparece principalmente quando você freia?",
        respostas: [
            {
                texto: "Sim",
                proximo: "resultadoFreio"
            },
            {
                texto: "Não",
                proximo: "resultadoCorreia"
            },
            {
                texto: "Acontece somente em alta velocidade",
                proximo: "resultadoRolamento"
            }
        ]
    },


    corrente: {
        texto: "A corrente parece estar muito folgada?",
        respostas: [
            {
                texto: "Sim",
                proximo: "resultadoCorrente"
            },
            {
                texto: "Não",
                proximo: "resultadoLubrificacao"
            },
            {
                texto: "Não sei verificar",
                proximo: "resultadoCorrente"
            }
        ]
    },


    fraca: {
        texto: "Em qual situação a moto demonstra mais falta de potência?",
        respostas: [
            {
                texto: "Na subida",
                proximo: "subida"
            },
            {
                texto: "Quando acelero rapidamente",
                proximo: "aceleracao"
            },
            {
                texto: "Em qualquer situação",
                proximo: "potencia"
            }
        ]
    },


    subida: {
        texto: "A moto perde potência de forma repentina?",
        respostas: [
            {
                texto: "Sim",
                proximo: "resultadoCombustivel"
            },
            {
                texto: "Não, é gradual",
                proximo: "resultadoMotor"
            },
            {
                texto: "Acontece somente com o motor quente",
                proximo: "resultadoAlimentacao"
            }
        ]
    },


    aceleracao: {
        texto: "Quando você acelera, o motor falha ou engasga?",
        respostas: [
            {
                texto: "Sim, engasga",
                proximo: "resultadoInjecao"
            },
            {
                texto: "Não, apenas demora para responder",
                proximo: "resultadoFiltro"
            },
            {
                texto: "Às vezes",
                proximo: "resultadoVela"
            }
        ]
    },


    potencia: {
        texto: "A manutenção da moto está em dia?",
        respostas: [
            {
                texto: "Sim",
                proximo: "resultadoMotor"
            },
            {
                texto: "Não",
                proximo: "resultadoRevisao"
            },
            {
                texto: "Não sei",
                proximo: "resultadoRevisao"
            }
        ]
    }
,

    freio: {
        texto: "O que você percebe no sistema de freios?",
        respostas: [
            { texto: "O freio está fraco ou a manete está diferente", proximo: "resultadoFreioUrgente" },
            { texto: "Há chiado ao frear", proximo: "resultadoFreio" },
            { texto: "A moto vibra ou puxa ao frear", proximo: "resultadoFreioUrgente" }
        ]
    },
    superaquecimento: {
        texto: "Como você percebe o aquecimento?",
        respostas: [
            { texto: "Apareceu luz de temperatura ou vapor", proximo: "resultadoTemperaturaUrgente" },
            { texto: "O motor está mais quente que o normal", proximo: "temperaturaLeve" },
            { texto: "Perde potência quando esquenta", proximo: "resultadoMotor" }
        ]
    },
    temperaturaLeve: {
        texto: "Você notou vazamento ou nível baixo do fluido (se aplicável)?",
        respostas: [
            { texto: "Sim, há vazamento ou nível baixo", proximo: "resultadoTemperaturaUrgente" },
            { texto: "Não notei nada", proximo: "resultadoTemperatura" },
            { texto: "Não sei verificar", proximo: "resultadoTemperatura" }
        ]
    },
    consumo: {
        texto: "Qual mudança no consumo você notou?",
        respostas: [
            { texto: "Está gastando mais combustível", proximo: "consumoAlto" },
            { texto: "Há cheiro forte de combustível", proximo: "resultadoVazamento" },
            { texto: "Sai fumaça diferente pelo escapamento", proximo: "resultadoFumaca" }
        ]
    },
    consumoAlto: {
        texto: "A moto também está falhando ou perdendo potência?",
        respostas: [
            { texto: "Sim, falha ou perde potência", proximo: "resultadoInjecao" },
            { texto: "Não, só aumentou o consumo", proximo: "resultadoConsumo" },
            { texto: "Não tenho certeza", proximo: "resultadoRevisao" }
        ]
    },
    pneus: {
        texto: "Qual é o sintoma relacionado aos pneus ou à direção?",
        respostas: [
            { texto: "A direção está tremendo", proximo: "resultadoPneus" },
            { texto: "A moto puxa para um lado", proximo: "resultadoPneus" },
            { texto: "O pneu está murcho ou danificado", proximo: "resultadoPneuUrgente" }
        ]
    },
    resultadoFreioUrgente: {
        titulo: "Atenção: verifique os freios",
        texto: "Freio fraco, vibração ou mudança na manete pode indicar um problema de segurança. Não continue pilotando; solicite uma avaliação profissional e transporte a moto sem rodar."
    },
    resultadoTemperaturaUrgente: {
        titulo: "Atenção: possível superaquecimento",
        texto: "Pare em local seguro e desligue o motor. Não abra a tampa do radiador enquanto estiver quente. Espere esfriar e procure assistência; vapor, alerta de temperatura ou vazamento exigem atenção imediata."
    },
    resultadoTemperatura: {
        titulo: "Investigue o sistema de arrefecimento",
        texto: "O aquecimento pode estar ligado ao nível de fluido, circulação, ventoinha (quando houver) ou condições de uso. Com o motor frio, consulte o manual e procure uma oficina se o sintoma persistir."
    },
    resultadoVazamento: {
        titulo: "Possível vazamento de combustível",
        texto: "Cheiro forte pode indicar vazamento. Desligue a moto, evite chamas e faíscas e não continue usando até que uma oficina verifique a origem."
    },
    resultadoFumaca: {
        titulo: "Observe a fumaça do escapamento",
        texto: "Fumaça incomum pode ter diferentes causas conforme a cor, duração e condição do motor. Evite forçar a moto e peça uma avaliação profissional, especialmente se houver perda de potência ou consumo de óleo."
    },
    resultadoConsumo: {
        titulo: "Investigue o aumento de consumo",
        texto: "Pneus com pressão incorreta, filtro de ar, velas, ajustes de alimentação ou hábitos de condução podem influenciar o consumo. Uma revisão ajuda a identificar a causa."
    },
    resultadoPneus: {
        titulo: "Verifique pneus e direção",
        texto: "Vibração ou tendência de puxar para um lado pode envolver pressão, desgaste, balanceamento, rodas ou alinhamento. Se a direção estiver instável, não continue pilotando até verificar."
    },
    resultadoPneuUrgente: {
        titulo: "Atenção: pneu danificado ou murcho",
        texto: "Não pilote com pneu murcho, rasgado ou com dano visível. Verifique a condição em local seguro e providencie reparo ou transporte adequado."
    }

};


// ==========================================
// RESULTADOS
// ==========================================

const resultados = {

    resultadoMotorPartida: {
        titulo: "Possível problema no motor de partida",
        texto: "O sintoma pode estar relacionado ao motor de partida, relé ou conexões elétricas. É recomendável realizar uma avaliação do sistema de partida."
    },

    resultadoBateria: {
        titulo: "Verifique a bateria",
        texto: "Os sintomas podem estar relacionados a uma bateria descarregada ou desgastada. Verifique a tensão da bateria e o sistema de carga."
    },

    resultadoInterruptor: {
        titulo: "Verifique o sistema de partida",
        texto: "Pode existir um problema no botão de partida, relé, fusível ou alguma conexão elétrica."
    },

    resultadoCombustivel: {
        titulo: "Verifique o sistema de combustível",
        texto: "A falta de combustível ou problemas na alimentação podem impedir o funcionamento correto do motor."
    },

    resultadoAlimentacao: {
        titulo: "Possível problema na alimentação",
        texto: "O sistema de alimentação pode precisar de uma inspeção, incluindo injeção eletrônica, bomba e filtro de combustível."
    },

    resultadoVela: {
        titulo: "Verifique a vela de ignição",
        texto: "Uma vela desgastada ou suja pode causar falhas, dificuldade de partida e perda de desempenho."
    },

    resultadoCarga: {
        titulo: "Verifique o sistema de carga",
        texto: "Mesmo com uma bateria relativamente nova, pode existir um problema no sistema de carga. O alternador e o regulador devem ser avaliados."
    },

    resultadoEletrica: {
        titulo: "Possível falha elétrica",
        texto: "Pode existir uma falha intermitente em algum componente ou conexão elétrica. Uma inspeção com multímetro pode ajudar."
    },

    resultadoConexao: {
        titulo: "Verifique as conexões",
        texto: "Terminais frouxos ou oxidados podem causar falhas elétricas. A motocicleta deve ser inspecionada antes de continuar o uso."
    },

    resultadoMotor: {
        titulo: "Possível problema relacionado ao motor",
        texto: "Ruídos e perda de desempenho podem ter várias causas. Recomenda-se uma avaliação mecânica antes de continuar utilizando a motocicleta."
    },

    resultadoSuspensao: {
        titulo: "Verifique a suspensão",
        texto: "Se o ruído não acompanha diretamente a rotação do motor, pode ser necessário verificar suspensão, rodas e componentes da parte ciclística."
    },

    resultadoFreio: {
        titulo: "Verifique o sistema de freios",
        texto: "Chiados durante a frenagem podem indicar desgaste ou sujeira. Como os freios são um item de segurança, procure uma oficina para avaliação."
    },

    resultadoCorreia: {
        titulo: "Verifique componentes móveis",
        texto: "Um chiado pode estar relacionado a diferentes componentes. É importante identificar exatamente a origem antes de realizar qualquer reparo."
    },

    resultadoRolamento: {
        titulo: "Verifique os rolamentos",
        texto: "Ruídos em velocidade podem estar relacionados a rolamentos ou outros componentes das rodas. Recomenda-se uma inspeção."
    },

    resultadoCorrente: {
        titulo: "Verifique a corrente",
        texto: "Uma corrente muito folgada pode causar ruídos e desgaste. Deve ser verificada a folga, lubrificação e estado geral."
    },

    resultadoLubrificacao: {
        titulo: "Verifique a lubrificação",
        texto: "Mesmo com a tensão correta, a corrente precisa estar limpa e devidamente lubrificada para reduzir desgaste e ruídos."
    },

    resultadoInjecao: {
        titulo: "Possível problema na injeção",
        texto: "Falhas durante a aceleração podem estar relacionadas ao sistema de injeção, sensores, combustível ou ignição."
    },

    resultadoFiltro: {
        titulo: "Verifique o filtro de ar",
        texto: "Um filtro de ar muito sujo pode prejudicar o desempenho do motor e diminuir a resposta ao acelerador."
    },

    resultadoRevisao: {
        titulo: "Sua moto pode precisar de uma revisão",
        texto: "Uma revisão preventiva deve verificar óleo, filtros, velas, corrente, freios, pneus, bateria e demais componentes."
    }

};


// ==========================================
// CONTROLE DO SISTEMA
// ==========================================

let perguntaAtual = "inicio";

let historico = [];


// ==========================================
// INICIAR
// ==========================================

function iniciarDiagnostico() {

    document
        .getElementById("diagnostico")
        .scrollIntoView({
            behavior: "smooth"
        });

    perguntaAtual = "inicio";

    historico = [];

    mostrarPergunta();
}


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    if (!pergunta) {
        mostrarResultado(perguntaAtual);
        return;
    }

    document.getElementById("pergunta").textContent =
        pergunta.texto;

    const container =
        document.getElementById("respostas");

    container.innerHTML = "";

    pergunta.respostas.forEach((resposta, index) => {

        const botao = document.createElement("button");

        botao.textContent = resposta.texto;

        botao.onclick = function () {
            responder(index);
        };

        container.appendChild(botao);

    });


    atualizarProgresso();

    document.getElementById("voltar").style.display =
        historico.length > 0 ? "block" : "none";
}


// ==========================================
// RESPONDER
// ==========================================

function responder(indice) {

    const pergunta = perguntas[perguntaAtual];

    const respostaEscolhida =
        pergunta.respostas[indice];

    historico.push(perguntaAtual);

    perguntaAtual =
        respostaEscolhida.proximo;

    mostrarPergunta();
}


// ==========================================
// VOLTAR
// ==========================================

function voltarPergunta() {

    if (historico.length === 0) {
        return;
    }

    perguntaAtual =
        historico.pop();

    mostrarPergunta();
}


// ==========================================
// PROGRESSO
// ==========================================

function atualizarProgresso() {
    const quantidade = historico.length + 1;
    const porcentagem = Math.min(12 + historico.length * 18, 92);
    document.getElementById("numeroPergunta").textContent = "Etapa " + quantidade;
    document.getElementById("progresso").textContent = "Etapa " + quantidade;
    document.getElementById("barraProgresso").style.width = porcentagem + "%";
}


// ==========================================
// RESULTADO
// ==========================================

function mostrarResultado(idResultado) {

    const resultado =
        resultados[idResultado];

    if (!resultado) {
        return;
    }

    document.getElementById("diagnostico")
        .style.display = "none";

    document.getElementById("resultado")
        .style.display = "flex";

    document.getElementById("tituloResultado")
        .textContent =
        resultado.titulo;

    document.getElementById("textoResultado")
        .textContent =
        resultado.texto;

    document.getElementById("resultado")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ==========================================
// REINICIAR
// ==========================================

function reiniciar() {

    perguntaAtual = "inicio";

    historico = [];

    document.getElementById("resultado")
        .style.display = "none";

    document.getElementById("diagnostico")
        .style.display = "flex";

    mostrarPergunta();

    document.getElementById("diagnostico")
        .scrollIntoView({
            behavior: "smooth"
        });
}

// ==========================================
// MECÂNICAS EXTRAS
// ==========================================
const dicasContextuais = {
    inicio: "Escolha a opção que mais combina com o sintoma. Você pode voltar para corrigir uma resposta.",
    naoLiga: "Dica: observe o painel e os sons sem desmontar componentes.",
    barulho: "Dica: não ignore ruídos novos, principalmente se aumentarem rapidamente.",
    fraca: "Dica: perda repentina de potência merece uma avaliação antes de continuar rodando.",
    freio: "Segurança primeiro: se o freio estiver fraco ou diferente, não pilote até verificar.",
    superaquecimento: "Nunca abra o sistema de arrefecimento enquanto estiver quente.",
    consumo: "Cheiro de combustível ou vazamento exige desligar a moto e evitar fontes de ignição.",
    pneus: "Pneu danificado ou direção instável: não continue pilotando."
};

const resultadosUrgentes = new Set([
    "resultadoFreioUrgente", "resultadoTemperaturaUrgente",
    "resultadoVazamento", "resultadoPneuUrgente"
]);

const mostrarPerguntaOriginal = mostrarPergunta;
mostrarPergunta = function() {
    mostrarPerguntaOriginal();
    const dica = document.getElementById("dicaContexto");
    if (dica) dica.textContent = dicasContextuais[perguntaAtual] || "Escolha a opção mais próxima do que você percebe na moto.";
    const progress = document.getElementById("progresso");
    const bar = document.getElementById("barraProgresso");
    const n = historico.length + 1;
    if (progress) progress.textContent = "Etapa " + n;
    if (bar) bar.style.width = Math.min(12 + historico.length * 18, 92) + "%";
};

const mostrarResultadoOriginal = mostrarResultado;
mostrarResultado = function(idResultado) {
    mostrarResultadoOriginal(idResultado);
    const resultado = resultados[idResultado];
    const card = document.querySelector(".resultado-card");
    if (!resultado || !card) return;

    let extras = document.getElementById("detalhesExtras");
    if (!extras) {
        extras = document.createElement("div");
        extras.id = "detalhesExtras";
        extras.className = "detalhes-extras";
        const aviso = card.querySelector(".aviso");
        card.insertBefore(extras, aviso);
    }

    const urgente = resultadosUrgentes.has(idResultado);
    extras.innerHTML = `
        <div class="nivel-urgencia ${urgente ? "urgente" : "rotina"}">
            <span>${urgente ? "⚠️ ATENÇÃO À SEGURANÇA" : "✓ PRÓXIMOS PASSOS"}</span>
            <p>${urgente ? "Evite pilotar até que o problema seja avaliado." : "Anote os sintomas e confira o manual da sua motocicleta antes de qualquer manutenção."}</p>
        </div>
        <h3>O que fazer agora</h3>
        <ul>
            <li>Registre quando o sintoma acontece e se ele piora.</li>
            <li>Não desmonte peças nem faça testes arriscados sem conhecimento.</li>
            <li>Leve esta descrição a um mecânico para confirmar a causa.</li>
        </ul>
        <button type="button" class="botao-secundario" id="copiarResultado">Copiar resultado</button>
    `;
    document.getElementById("copiarResultado").onclick = async () => {
        const texto = `${resultado.titulo}\n${resultado.texto}\n${urgente ? "Atenção: evite pilotar até avaliação profissional." : "Este resultado é informativo."}`;
        try {
            await navigator.clipboard.writeText(texto);
            document.getElementById("copiarResultado").textContent = "✓ Resultado copiado";
        } catch (e) {
            const area = document.createElement("textarea");
            area.value = texto;
            document.body.appendChild(area);
            area.select();
            document.execCommand("copy");
            area.remove();
            document.getElementById("copiarResultado").textContent = "✓ Resultado copiado";
        }
    };
};

// Keyboard: 1–7 selects an answer; left arrow goes back.
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && historico.length > 0 &&
        document.getElementById("diagnostico").style.display !== "none") {
        voltarPergunta();
        return;
    }
    if (/^[1-7]$/.test(event.key) &&
        document.getElementById("diagnostico").style.display !== "none") {
        const botoes = document.querySelectorAll("#respostas button");
        const indice = Number(event.key) - 1;
        if (botoes[indice]) botoes[indice].click();
    }
});

// Checklist saved locally on this device.
function carregarChecklist() {
    let salvos = [];
    try { salvos = JSON.parse(localStorage.getItem("motofixChecklist") || "[]"); } catch(e) {}
    document.querySelectorAll('#checklist input[type="checkbox"]').forEach(input => {
        input.checked = salvos.includes(input.dataset.item);
        input.addEventListener("change", salvarChecklist);
    });
    atualizarChecklistStatus();
}
function salvarChecklist() {
    const marcados = [...document.querySelectorAll('#checklist input:checked')].map(input => input.dataset.item);
    try { localStorage.setItem("motofixChecklist", JSON.stringify(marcados)); } catch(e) {}
    atualizarChecklistStatus();
}
function atualizarChecklistStatus() {
    const total = document.querySelectorAll('#checklist input').length;
    const marcados = document.querySelectorAll('#checklist input:checked').length;
    const status = document.getElementById("checklistStatus");
    if (status) status.textContent = `${marcados} de ${total} itens conferidos`;
}
function limparChecklist() {
    document.querySelectorAll('#checklist input').forEach(input => input.checked = false);
    salvarChecklist();
}
document.addEventListener("DOMContentLoaded", carregarChecklist);
