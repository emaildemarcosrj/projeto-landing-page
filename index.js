var setaDireita = window.document.getElementById('setaDireita')
var Leonardo = window.document.getElementById('Leonardo')
var Samanta = window.document.getElementById('Samanta')
var Bruna = window.document.getElementById('Bruna')
var setaEsquerda = window.document.getElementById('setaEsquerda')

function RolarParaDireita() {
Leonardo.style ="display:none"
Bruna.style ="display:flex"
setaDireita.style.display ="none"
setaEsquerda.style.display ="flex"

}

function RolarParaEsquerda() {
Leonardo.style ="display:flex"
Bruna.style ="display:none"
setaDireita.style.display ="flex"
setaEsquerda.style.display ="none"

}