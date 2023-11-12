var hora = 0;
var mnt = 0;
var sec = 0;
var interv;
var btnS = document.getElementById('btn-start')
var btnP = document.getElementById('btn-pause')
var btnR = document.getElementById('btn-reset')

btnS.addEventListener('click', start)

function start(){
    interv = setInterval(cronomet, 1000)
    

}
function cronomet(){
    let h1 = document.querySelector('h1')
    h1.innerHTML = hora +':' + mnt +':'+ sec;
    sec++

}
