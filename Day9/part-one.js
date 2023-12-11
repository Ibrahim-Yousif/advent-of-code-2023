const input = require('./input')
let output = 0

input.map(elm => {
    let history = elm.split(' ')
    let allZeroes = false
    let history_record = [history.map(elm => parseInt(elm))]

    let idx = 0
    while(!allZeroes){
        let temp_array = []
        for(let i = 0 ; i < history_record[idx].length - 1 ; i++){
            temp_array.push(history_record[idx][i+1] - history_record[idx][i]) 
        }
        history_record.push(temp_array)
        idx++
        allZeroes = temp_array.filter(elm => elm == 0).length == temp_array.length
    }
    let extrapolation = history_record.map(elm => elm[elm.length-1]).reduce((acc, curr) => acc + curr, 0)
    output += extrapolation
})
console.log(output);


