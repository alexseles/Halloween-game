
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaGhostTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	//1500
	criaGhostTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaGhostTempo = 1000
} else if (nivel === 'chucknorris') {
	//750
	criaGhostTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaGhost)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)


function posicaoRandomica() {


	//remover o ghost anterior (caso exista)
	if(document.getElementById('ghost')) {
		document.getElementById('ghost').remove()

		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var ghost = document.createElement('img')
	ghost.src = 'imagens/ghost.png'
	ghost.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	ghost.style.left = posicaoX + 'px'
	ghost.style.top = posicaoY + 'px'
	ghost.style.position = 'absolute'
	ghost.id = 'ghost'
	ghost.onclick = function() {
		this.remove()
	}

	document.body.appendChild(ghost)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'ghost1'
		
		case 1:
			return 'ghost2'

		case 2:
			return 'ghost3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}

