// RM 11: 36

// gets the system's date
var time = new Date().getHours()

console.log(`Now it's ${time} o'clock.`)

if (time < 12) {
    console.log('Good Morning!')
} else if (time <= 18) {
    console.log('Good Afternoon!')
} else {
    console.log('Good night!')
}

// RM 11: 36