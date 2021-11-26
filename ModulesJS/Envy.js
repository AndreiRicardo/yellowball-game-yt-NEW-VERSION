//importando modulos



//variaveis globais

export let Objs = {
    canvasTela:'',
    Contexto:'',
    ALTURA:'',
    LARGURA:'',
    VELOCIDADE: 6,
    maxPulos: 3,
    estadoAtua:'',
    record:'',
    img:'',
    pontosParaNovaFase:'',
    faseAtual: 0,
    labelNovaFase:'',
    estados: {
        jogar: 0,
        jogando: 1,
        perdeu: 2
    },
    floor:'',
    char:'',
    obstaculos:''

}

// função set variaveis