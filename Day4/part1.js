const input = require('./input')

let output = 0
input.map(elm => {
    let winningNumbers = elm.split(':')[1].split('|')[0].match(/\d+/g)
    let myNumbers = elm.split(':')[1].split('|')[1]
    let amountOfNumbers = myNumbers.match(/\d+/g).length
    let myNumbersArray = myNumbers.match(/\d+/g)
    let amountOfWinningNumbers = 0
 
    for(let i = 0 ; i < amountOfNumbers ; i++){
        if(winningNumbers.includes(myNumbersArray[i])){
            amountOfWinningNumbers++
        }
    }
    if(amountOfWinningNumbers > 0)
        output += Math.pow(2, amountOfWinningNumbers-1)

    
})
console.log(output)