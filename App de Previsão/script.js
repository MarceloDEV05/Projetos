let input = document.getElementById('inputCity')
let button = document.getElementById('buscarPrev')

button.addEventListener('click', dataPrev)


function exibPrev(dados){
    document.getElementById('grau').innerHTML = dados.main.temp+"°C"
    document.getElementById('nameCity').innerHTML = dados.name
    document.getElementById('infos').innerHTML = dados.weather[0].description
    document.getElementById('umid').innerHTML = "Umidade: " + dados.main.humidity+"%"
    document.getElementById('tempMax').innerHTML ="Max: " + dados.main.temp_max+"°C"
    document.getElementById('tempMin').innerHTML ="Min: " + dados.main.temp_min+"°C"
    document.getElementById('imgTemp').src =  `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

 async function dataPrev(){
    let getInput = input.value
    let key = "0f1a70ac75bc03fbacd579922dfa3113"
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${getInput}&appid=${key}&lang=pt_br&units=metric`

    const response = await fetch(api)
    
    const dados = await response.json()
    console.log(dados)
    exibPrev(dados)
}