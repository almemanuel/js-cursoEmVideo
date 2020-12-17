// RM 11: 36

function check() {
    var start = document.querySelector('#start').value
    var end = document.querySelector('#end').value
    var step = document.querySelector('#step').value
    var result = document.querySelector('#result')

    if (step < 0) {
        step *= -1
    }

    if(!(start || end || step)) {
        alert('ERROR 001: please, insert numeric values on the fields.')
    } else if (step == 0) {
        alert('ERROR 002: the count interval is equal to 0. Please, change this value.')
    } else if (start == end) {
        alert('ERROR 003: the start value is equal to end value. Please, enter different values those field.')
    } else {
        if (start < end) {
            for (i = start; i <= end; i += step) {
                console.log(i)
            }
        } else {
            for (i = start; i >= end; i -= step) {
                console.log(i)
            }
        }
    }
}

// RM 11: 36