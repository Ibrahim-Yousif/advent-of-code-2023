const input = require('./input')

var mapObj = {
    one:"1",
    two:"2",
    three:"3",
    four:"4",
    five:"5",
    six:"6",
    seven:"7",
    eight:"8",
    nine:"9"
 };

let values = []
input.map((string) => {
    string = string.replace(/seven/gi, 'sevenn')
    string = string.replace(/one/gi, 'onee')
    string = string.replace(/three/gi, 'threee')
    string = string.replace(/five/gi, 'fivee')
    string = string.replace(/nine/gi, 'ninee')
    string = string.replace(/eight/gi, "eeightt") // turned out that this was the problem all along,
    string = string.replace(/two/gi, 'twoo')      // the author did not specify that the individual letters overlap so i had to copy the instances that might do.
    string = string.replace(/one|two|three|four|five|six|seven|eight|nine/gi, function(matched){
        return mapObj[matched]
       })
       
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
//answer is between 55680-55700