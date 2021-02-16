var num = document.querySelector('#number')
var list = document.querySelector('#list')
var res = document.querySelector('#res')
var values = []

function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add(){
    if (isNumber(num.value) && !inList(num.value, values)){
        window.alert('ok')
    } else{
        window.alert('Please, insert a number between 1 and 100.')
    }
}
