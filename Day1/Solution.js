const input = require('./input')
let values = []
input.map((string) => {
    let digitsInString = string.match(/\d+/g)
    digitsInString.map((digit, idx) => {
        if(idx == 0)
        values.push(digit[0])
        if(idx == digitsInString.length -1)
        values.push(digit[digit.length-1])
    })
})
let valuesNonSingular = []
for(let i = 0 ; i < values.length ; i+=2){
valuesNonSingular.push(parseInt(values[i]+values[i+1]))

}
let op = 0
valuesNonSingular.map(digit => op += digit)

console.log(op)