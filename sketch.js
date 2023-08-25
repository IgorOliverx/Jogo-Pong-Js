//variáveis da bolinha
let eixoXBolinha = 300;
let eixoYBolinha = 200;
let diametroBolinha = 30;
let raio = diametroBolinha / 2;

//variáveis da velocidade da bolinha 
let velocidadeX = 10;
let velocidadeY = 5;


//variáveis da minha raquete
let eixoXRaquete = 5;
let eixoYRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 100;

//variáveis da raquete oponente
let eixoXRaqueteOponente = 585;
let eixoYRaqueteOponente = 150;
let larguraRaqueteOponente = 10;
let alturaRaqueteOponente = 100;
let velocidadeYOponente;

//variáveis do placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//variáveis delimitação
let eixoX = 300;
let eixoY = 0;
let larguraCampo = 2;
let alturaCampo = 400;


//sons do jogo
let raquetada;
let pontos;
let fundo;

function preload() {
    fundo = loadSound(trilha.mp3);
    pontos = loadSound(ponto.mp3);
    raquetada = loadSound(raquetada.mp3);
}




let ponto = true;
let colidiu = false;

//funções background
function setup() {
    createCanvas(600, 400);
}

function draw() {
    //cenario
    background(100);
    //funções da bolinha
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBolinha();
    //funções da minha raquete
    mostrarRaquete();
    movimentaMinhaRaquete();
    colisaoRaqueteBiblioteca();
    //funções da raquete oponente
    mostrarRaqueteOponente();
    colisaoRaqueteOponente();
    movimentarRaqueteOponente();
    //delimitação campo
    delimitacao();
    //placar
    placar();
    //Ganhador
    endGame();


}
//funções da bolinha
function mostraBolinha() {
    circle(eixoXBolinha, eixoYBolinha, diametroBolinha);

}

function movimentaBolinha() {
    eixoXBolinha += velocidadeX;
    eixoYBolinha += velocidadeY
}

function verificaColisaoBolinha() {
    if (eixoXBolinha + raio > width || eixoXBolinha - raio < 0) {
        velocidadeX *= -1;
    }

    if (eixoYBolinha + raio > height || eixoYBolinha - raio < 0) {
        velocidadeY *= -1
    }
}

function mostrarRaquete() {
    rect(eixoXRaquete, eixoYRaquete, larguraRaquete, alturaRaquete);

}

function verificaColisaoRaquete() {
    if (eixoXBolinha - raio < eixoXRaquete + larguraRaquete && eixoYBolinha - raio < eixoYRaquete + alturaRaquete && eixoYBolinha + raio > eixoYRaquete) {
        velocidadeX *= -1;
    }
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        eixoYRaquete -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
        eixoYRaquete += 10;
    }
    eixoYRaquete = constrain(eixoYRaquete, -50, 350);
}

function colisaoRaqueteBiblioteca() {
    colidiu = collideRectCircle(eixoXRaquete, eixoYRaquete, larguraRaquete, alturaRaquete, eixoXBolinha, eixoYBolinha, raio);
    if (colidiu == true) {
        velocidadeX *= -1
    }


}


function mostrarRaqueteOponente() {
    rect(eixoXRaqueteOponente, eixoYRaqueteOponente, larguraRaquete, alturaRaquete)
}

function colisaoRaqueteOponente() {
    colidiu = collideRectCircle(eixoXRaqueteOponente, eixoYRaqueteOponente, larguraRaqueteOponente, alturaRaqueteOponente, eixoXBolinha, eixoYBolinha, raio);
    if (colidiu == true) {
        velocidadeX *= -1
    }
}



function movimentarRaqueteOponente() {
    // PARA JOGAR SINGLE PLAYER
    //   velocidadeYOponente = eixoYBolinha - eixoYRaqueteOponente - (alturaRaquete /2) -30;
    //   eixoYRaqueteOponente += velocidadeYOponente;

    //PARA JOGAR MULTIPLAYER
    if (keyIsDown(87)) {
        eixoYRaqueteOponente -= 10;
    }
    if (keyIsDown(83)) {
        eixoYRaqueteOponente += 10;
    }
    eixoYRaqueteOponente = constrain(eixoYRaqueteOponente, -50, 350)

}

function placar() {

    text(meusPontos, 278, 26);
    text(pontosOponente, 321, 26);
    fill(255);
    if (eixoXBolinha + raio > 595) {
        meusPontos += 1;
    }
    if (eixoXBolinha == 10) {
        pontosOponente += 1;
    }
}

//mexer e arrumar as cores!!!!!!1
function delimitacao() {
    rect(eixoX, eixoY, larguraCampo, alturaCampo);

}

function endGame() {
    if (meusPontos == 5 || pontosOponente == 5) {
        stop
    }
}