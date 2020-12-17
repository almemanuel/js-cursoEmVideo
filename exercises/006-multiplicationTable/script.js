// RM 11: 36

function calc() {
    number = document.querySelector('#number').value

    if(!(number)) {
        alert('ERROR 001: please, insert a numeric on the field.')
    } else {
        for (i = 0; i <= 10; i++) {
            console.log(`${number} x ${i} = ${number * i}`)
        }
    }
}

// RM 11: 36