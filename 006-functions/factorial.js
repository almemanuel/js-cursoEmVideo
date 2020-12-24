// RM 11: 36

function factorial(number) {
    if (number == 1) {
        return 1
    } else {
        return number * factorial(number - 1)
    }
}


console.log(factorial(5))

// RM 11: 36