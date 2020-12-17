// RM 11: 36

function count() {
    let start = document.querySelector('#start').value
    let end = document.querySelector('#end').value
    let step = document.querySelector('#step').value
    let result = document.querySelector('#result')

    // turn the step > 0
    if (step < 0) {
        step *= -1
        alert(`Considering ${step}, and not -${step}!`)
    }

    // data verification
    if (start.length == 0 || end.length == 0 || step.length == 0) {
        result.innerHTML = 'Impossible counting. Try again!'
        alert('ERROR 001: please, insert numeric values on the fields.')
    } else if (step == 0) {
        result.innerHTML = 'Impossible counting. Try again!'
        alert('ERROR 002: the count interval is equal to 0. Please, change this value.')
    } else if (start == end) {
        result.innerHTML = 'Impossible counting. Try again!'
        alert('ERROR 003: the start value is equal to end value. Please, enter different values those field.')
    } else {
        start = Number(start)
        end = Number(end)
        step = Number(step)

        result.innerHTML = 'Counting: '
        // increasing
        if (start < end) {
            for (i = start; i <= end; i += step) {
                result.innerHTML += ` ${i} \u{1F449}`
            }
        }
        // decreasing
        else {
            for (i = start; i >= end; i -= step) {
                result.innerHTML += ` ${i} \u{1F449}`
            }
        }

        // end for both
        result.innerHTML += ` END! \u{1F3C1}`
    }
}

// RM 11: 36