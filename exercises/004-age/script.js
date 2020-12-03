// RM 11: 36

function check() {
    var year = new Date().getFullYear()
    var formYear = document.querySelector('#year').value
    var res = document.querySelector('#res')

    if (formYear.length == 0 || formYear > year) {
        window.alert('[ERROR!] Invalid year! Try again.')
    } else {
        var formGender = document.getElementsByName('gender')
        var age = year - formYear

        if (formGender[0].checked) {
            gender = 'man'
        } else {
            gender = 'woman'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detect a ${gender} with ${age}`
    }
}

// RM 11: 36