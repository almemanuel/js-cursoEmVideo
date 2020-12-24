// RM 11: 36

let numbers = [5, 8, 2, 9, 3]

numbers.push(1)
numbers.sort()

console.log(`The array has already been placed in ascending order. Below, the keys and their respective values will be displayed:`)

for(let i in numbers) {
    console.log(`Key ${i}: ${numbers[i]}`)
}

let key = numbers.indexOf(8)

if (key == -1) {
    console.log(`Value not found`)
} else {
    console.log(`The value is in key ${key}`)
}

// RM 11: 36