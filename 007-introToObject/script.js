let data = {name: 'CJ',
gender: 'M',
weigth: 85.4,
changeWeight(w = 0){
        this.weigth += w
    }
}


data.changeWeight(2)
console.log(`${data.name} weighs ${data.weigth}Kg`)
