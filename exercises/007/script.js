var num = document.querySelector('#number')
var list = document.querySelector('#list')
var res = document.querySelector('#res')
var userEnter = []

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
    if (isNumber(num.value) && !inList(num.value, userEnter)){
        userEnter.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value} add to list!`
        list.appendChild(item)
        res.innerHTML = ''
    } else if (!isNumber(num.value)){
        alert('Please, insert a valid number.')
    } else if (inList(num.value, userEnter)){
        alert('This number is already on the list. Please enter another one bewteen 1 and 100.')
    }

    num.value = ''
    num.focus()
}

function finish() {
    if (userEnter.length == 0) {
        alert('Unable to finish without userEnter.')
    } else {
        let size = userEnter.length
        let greater = userEnter[0]
        let less = userEnter[0]
        let sum = 0
        let average = 0

        for(let i in userEnter) {
            sum += userEnter[i]
            if (userEnter[i] > greater) {
                greater = userEnter[i]
            } else if (userEnter[i] < less) {
                less = userEnter[i]
            }
        }

        average = sum / size

        res.innerHTML = ''
        res.innerHTML += `<p>We have ${size} numbers registred</p>`
        res.innerHTML += `<p>The largest number reported wax ${greater}, and the smallest, ${less}</p>`
        res.innerHTML += `<p>All summed values result in </p>`
        res.innerHTML += `<p>The average is ${average.toFixed(2)}</p>`
    }
}