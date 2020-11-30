// RM 11: 36

function loader(){
    var message = window.document.getElementById('message')
    var timePhoto = window.document.getElementById('time-photo')
    var time = new Date().getHours()
    message.innerHTML = `It's ${time}`

    if (time >= 0 && time < 12) {
        timePhoto.src = "images/morning.jpg"
        document.body.style.background = '#e2cd9f'
    } else if (time >= 12 && time <= 18) {
        timePhoto.src = "images/afternoon.jpg"
        document.body.style.background = '#b9846f'
    } else {
        timePhoto.src = "images/night.jpg"
        document.body.style.background = '#515254'
    }
}

// RM 11: 36