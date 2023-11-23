function clique(num) {
   var numero = document.getElementById("resp").innerHTML;
   document.getElementById("resp").innerHTML = numero + num;
}

function clean(){
   var resposta = document.getElementById('resp').innerHTML = "";
}

function apagar(){
   var resultado =  document.getElementById('resp').innerHTML;
   document.getElementById('resp').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
   var resultado = document.getElementById('resp').innerHTML;
   if(resultado){
      document.getElementById('resp').innerHTML = eval(resultado)

   }
}