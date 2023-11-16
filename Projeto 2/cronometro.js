var hora = 0
var min = 0
var sec = 0
var timer

function number(num){
    if(num < 10){
        return '0'+num
    }else{
        return num
    }
}

function  iniciar() {
    if(!timer){
    cronometro()
    timer = setInterval(cronometro, 1000)
}
    
}

function pausar(){
    clearInterval(timer)
    timer = null
}

function zerar(){
    clearInterval(timer)
    hora = 0
    min = 0
    sec = 0
    timer = null
    document.getElementById('tempo').innerText = '00:00:00'
}

function cronometro(){
    sec++
    if(sec==60){
        min++
        sec = 0

        if(min==60){
            hora++
            min = 0
        }
    }
    document.getElementById('tempo').innerText = number(hora)+ ':'+ number(min) +':'+ number(sec)
}