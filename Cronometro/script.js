let log = document.querySelector("div#log")
var relogio = document.querySelector("h1#tempo")
var tx_vt = document.querySelector("div#volta")
var contando = false
var parou = false
var segundos = 0
var minutos = 00
var hora = 0
var volta = 0
var intervalo
function Start(){
    if(contando == false){
        contando = true
        Contador()
        intervalo = setInterval(Contador,1000)
        if(parou){
            parou = false
            volta = 0
            tx_vt.innerHTML = ''
}}}

function Pause(){
    if(contando){
        contando = false
        clearInterval(intervalo)
}}

function Stop(){
    contando = false
    parou = true
    clearInterval(intervalo)
    segundos = 0
    minutos = 0
    relogio.innerHTML = "00:00:00"
}
function Digito2(numero){
    if(numero < 10){
        return('0'+numero)
    } else {
        return(numero)
}}
function Contador(){
    segundos++
    if (segundos == 60){
        minutos += 1
        if(minutos == 60){
            hora++
            minutos = 0
        }
        segundos = 0
    }
    relogio.innerHTML = `${Digito2(hora)}:${Digito2(minutos)}:${Digito2(segundos)}`
}

function Volta(){
    if(contando){
        volta++
        tx_vt.innerHTML += `Volta: ${volta} > ${Digito2(hora)}:${Digito2(minutos)}:${Digito2(segundos)} <br>` 
}}