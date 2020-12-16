// RM 11: 36

function check() {
    var start = document.querySelector('#start').value
    var end = document.querySelector('#end').value
    var step = document.querySelector('#step').value

    if (step < 0) {
        step *= -1
    }

    console.log(start, end, step)

    if(!(start || end || step)) {
        console.log('ERROR 001')
    } else if (step == 0) {
        console.log('ERROR 002')
    } else if (start == end) {
        console.log('ERROR 003') 
    } else {
        console.log('COUNTING...')

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