let jogador = "X"
let selecionado = []
let posicoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function iniciar(){
    document.querySelectorAll('#bloco div').forEach((item) => {
        item.innerHTML = ""
        item.addEventListener("click", novajogada)
        jogadordavez.innerHTML = `É A VEZ DO: ${jogador}`
    })
}
iniciar()

function novajogada(e){
    const index = e.target.getAttribute('data-i')
    e.target.innerHTML = jogador
    e.target.removeEventListener("click", novajogada)

    jogador = jogador === "X" ? "O" : "X"
    jogadordavez.innerHTML = `É A VEZ DO: ${jogador}`

    for(cont = 0; cont < posicoes.length; cont++){
        if(selecionado[index] == posicoes){
            console.log(`vencedor ${jogador}`)
        }
    }
}