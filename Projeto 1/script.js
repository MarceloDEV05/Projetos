
function carregar(){
var data = new Date()
var hora = data.getHours()
var mnt = data.getMinutes()
var sec = data.getSeconds()
var h1 = document.querySelector('h1')
var p = document.querySelector('p')
var dia = data.toDateString()
var mes = data.toLocaleDateString('pt-BR', { month: 'long' });

h1.innerHTML = `${hora}:${mnt}:${sec}`
p.innerHTML = `${dia} ${mes}`

if (hora < 10){
    horaFormatada = '0' + hora;
}else{
    horaFormatada = hora;
}

if(mnt < 10){
    mntFormatado = '0'+ mnt;
}else{
    mntFormatado = mnt;
}

if(sec < 10){
    secFormatado = '0' + sec;
}else{
    secFormatado = sec;
}


  h1.innerHTML = `${horaFormatada}:${mntFormatado}:${secFormatado}`;
  p.innerHTML = `${diaSemana} ${nomeMes}`;
}

setInterval(carregar, 1000);