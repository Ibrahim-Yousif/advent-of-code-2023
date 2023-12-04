const input = require('./input')

let values = []
input.map((elm, idx) => {
    let aboveString = input[idx-1]
    let belowString = input[idx+1]
    let digitAvailable = elm.match(/\d+/g)?.length??0
    let shallowString = elm
    let colIndexEnd = 0

    for(let i = 0 ; i < digitAvailable ; i++ ){
        let digit = shallowString.match(/\d+/)
        let indexOfDigit = shallowString.indexOf(digit)
        let newStart = indexOfDigit + digit.toString().length
        colIndexEnd += newStart 
        let colIndexStart = colIndexEnd - digit.toString().length -1
        shallowString = shallowString.slice(newStart)
        // console.log(digit)//, indexOfDigit
        
        let aboveSubstring = aboveString?.substring(colIndexStart, colIndexEnd+1)??'.'
        let belowSubstring = belowString?.substring(colIndexStart, colIndexEnd+1)??'.'

        if(elm[colIndexStart]?.match(/[`!@#$%^&*()_\-+=\[\]{};':"\\|,<>\/?~ ]/) || elm[colIndexEnd]?.match(/[`!@#$%^&*()_\-+=\[\]{};':"\\|,<>\/?~ ]/)){
            values.push(parseInt(digit))
            console.log(elm[colIndexStart],elm[colIndexEnd])
        }
        else if(aboveSubstring.match(/[`!@#$%^&*()_\-+=\[\]{};':"\\|,<>\/?~ ]/) || belowSubstring.match(/[`!@#$%^&*()_\-+=\[\]{};':"\\|,<>\/?~ ]/)){
            values.push(parseInt(digit))
            console.log(aboveSubstring, belowSubstring)
        }
      

        
    }
})
console.log(values)
console.log(values.reduce((acc,curr)=> acc+ curr, 0))