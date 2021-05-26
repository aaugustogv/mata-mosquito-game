// Saber o tamanho da Tela que o jogo será exibido
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){

altura = window.innerHeight
largura = window.innerWidth

console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

// Gerando posições aleatórias para o mosquito

function posicaoRandomica() {

var posicaoX = Math.floor(Math.random() * largura)
var posicaoY = Math.floor(Math.random() * altura)

console.log(posicaoX, posicaoY)

// Criar o Elemento HTML

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = 'mosquito1'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)
}