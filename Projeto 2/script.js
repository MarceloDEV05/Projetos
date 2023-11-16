var hora = 0;
var mnt = 0;
var sec = 0;
var timer


function start(){
   
    if(!timer){
        cronometro()
        timer = setInterval(cronometro, 1000)
    }

}

function pause(){
    clearInterval(timer)
    
}

function reset(){
    clearInterval(cronometro)
    timer = null
    hora = 0
    mnt = 0
    sec = 0
    document.getElementById('tempo').innerText = '00:00:00'
}
function cronometro(){
    sec++
    if(sec == 60){
        mnt++
        sec=0
        if(mnt == 60){
            hora++
            mnt = 0
        }
    }
    document.getElementById('tempo').innerText =zero(hora)+':'+zero(mnt)+':'+zero(sec)
}

function zero(num){
    if(num < 10){
        return "0" + num
    }else{
        return num
    }
}