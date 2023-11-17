var hr = 0
var min = 0
var sec = 0
var timer

function inicio(){
    if(!timer){
    cronometro()
    timer = setInterval(cronometro, 1000)
}
}

function pausar(){
    clearInterval(timer)
    timer = null
}

function resetar(){
    clearInterval(timer)
    hr = 0
    min = 0
    sec = 0
    document.getElementById("temp").innerText = '00:00:00'
    timer = null
}

function cronometro(){
    sec++
    if(sec == 60){
        min++
        sec = 0
    }if(min == 60){
        hr++
        min = 0
    }
    
    document.getElementById("temp").innerText = zero(hr) + ':' + zero(min) + ':' + zero(sec) ;
}

function zero(num){
    if(num < 10){
        return '0'+ num
    }else{
        return num
    }
}