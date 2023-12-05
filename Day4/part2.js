const input = require('./input')

let numberOfCards = []
let output = []
for(let i = 0 ; i < 196 ; i++){ // fill up array with all 1's
    numberOfCards[i] = 1
}
input.map((elm, idx) => {
    
    let winningNumbers = elm.split(':')[1].split('|')[0].match(/\d+/g)
    let myNumbers = elm.split(':')[1].split('|')[1]
    let amountOfNumbers = myNumbers.match(/\d+/g).length
    let myNumbersArray = myNumbers.match(/\d+/g)
    let amountOfWinningNumbers = 0
 
    for(let i = 0 ; i < amountOfNumbers ; i++){
        if(winningNumbers.includes(myNumbersArray[i])){
            amountOfWinningNumbers++
        }
    }//console.log(amountOfWinningNumbers)
    output.push(parseInt(amountOfWinningNumbers))

    for(let j = 0 ; j < numberOfCards[idx] ; j++){
    for(let i = idx + 1 ; i <= idx + amountOfWinningNumbers ; i++){
        numberOfCards[i] += 1
    }}
    // console.log(numberOfCards[idx], idx)
})

console.log(numberOfCards.reduce((acc, curr) => acc + curr, 0))