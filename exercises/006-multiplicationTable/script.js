// RM 11: 36

function calc() {
    let number = document.querySelector('#number').value
    let table = document.querySelector('#table')

    // verification
    if (number.length == 0) {
        alert('ERROR 001: please, insert a numeric on the field.')
    } else {

        // make the table
        number = Number(number)

        table.innerHTML = ''
        for (i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${number}x${i}=${number * i}`
            item.value = `table${i}`
            table.appendChild(item)
        }
    }
}

// RM 11: 36