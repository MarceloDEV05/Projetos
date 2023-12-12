let input = document.querySelector('input')
let btn = document.querySelector('button')

btn.addEventListener('click', verificarLitros)

function verificarLitros(){
    let peso = input.value
    peso = peso * 35
    let litros = Math.floor(peso / 1000)
    let mililitros = peso % 100
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = "De acordo com seu peso, você deve consumir " + litros + " litros e " + mililitros + "ml de água por dia!"

    if(litros < 2){
        resultado.innerHTML = "De acordo com seu peso, você deve consumir " + litros + " litro e " + mililitros + "ml de água por dia!"
    }

}

