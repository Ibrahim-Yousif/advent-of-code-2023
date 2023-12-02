const input = require('./input')

let sum = 0

input.map((elm, idx) => {
    // let ID = elm.match(/\d+(?=:)/)[0]
    // let subsets = elm.match(/;/g).length +1
    let subset = elm.match(/(?<=:).*/g)
    let seperatedSubset = subset.toString().split(';')
    let possible = true
    for(let i = 0 ; i < seperatedSubset.length ; i++){
        let colours = [0,0,0] // red green blue
        let comparingNumbers = [12, 13, 14] // given by author
        colours[0] = seperatedSubset[i].match(/\d+ (?=red)/gi)?.toString().trim() ?? '0'
        colours[1] = seperatedSubset[i].match(/\d+ (?=green)/gi)?.toString().trim() ?? '0'
        colours[2] = seperatedSubset[i].match(/\d+ (?=blue)/gi)?.toString().trim() ?? '0'
        
        if(colours[0] > comparingNumbers[0] || colours[1] > comparingNumbers[1] || colours[2] > comparingNumbers[2]){
            possible = false
        }
    }
    if(possible){
        sum += (idx+1)
    }
})

console.log(sum)