function numb(num){
    var numero = document.getElementById('soma').innerHTML;
    document.getElementById('soma').innerHTML = numero + num
}

function limpar(){
    document.getElementById('soma').innerHTML = ""
}

function delet(){
    var result = document.getElementById('soma').innerHTML;
    document.getElementById('soma').innerHTML = result.substring(0, result.length -1)
}

function calc(){
    var calc = document.getElementById('soma').innerHTML;
    if(calc){
        document.getElementById('soma').innerHTML = eval(calc)
    }
}