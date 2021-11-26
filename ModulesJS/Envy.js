//importando modulos




//variaveis globais

export var canvasTela,
    Contexto,
    ALTURA,
    LARGURA,
    VELOCIDADE = 6,
    maxPulos = 3,
    estadoAtual,
    record,
    img,
    pontosParaNovaFase = [5, 10, 15, 20],
    faseAtual = 0,
    labelNovaFase,
    estados,
    floor,
    char,
    obstaculos;