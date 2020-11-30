// RM 11: 36

// gets the system's weekday
var weekday = new Date().getDay()
/* .getDay() returns a number between 0 and 6, representing a weekday as follows:
    0 -> Sunday
    1 -> Monday
    2 -> Tuesday
    3 -> Wednesday
    4 -> Thursday
    5 -> Friday
    6 -> Saturday
*/

// displays the weekday
switch(weekday) {
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    default:
        console.log('[ERROR] Invalid Weekday!')
        break
}

// RM 11: 36