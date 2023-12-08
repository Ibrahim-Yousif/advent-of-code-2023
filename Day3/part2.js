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

        if(elm[colIndexStart]?.match(/\*/) || elm[colIndexEnd]?.match(/\*/)){
            values.push(parseInt(digit))
            console.log(elm[colIndexStart],elm[colIndexEnd])
        }
        else if(aboveSubstring.match(/\*/) || belowSubstring.match(/\*/)){
            values.push(parseInt(digit))
            console.log(aboveSubstring, belowSubstring)
        }
      

        
    }
})
// console.log(values)
// console.log(values.reduce((acc,curr)=> acc+ curr, 0)) 























// const input = require('./input')

// input.map((elm, idx) => {
//     let numberOfStars = elm.match(/\*/g)?.length ?? 0
//     let shallowString = elm
//     let realIndex = 0

//     for(let i = 0 ; i < numberOfStars ; i++){

//         let regExResult = shallowString.match(/\*/)
//         shallowString = shallowString.slice(regExResult.index+1)
//         realIndex += regExResult.index
//         if(i > 0)
//             realIndex++
//         let left = elm[realIndex-1]?.match(/\d/)?.length ?? 0
//         let right = elm[realIndex+1]?.match(/\d/)?.length ?? 0
//         let above = input[idx-1].slice(realIndex-1, realIndex+2)?.match(/\d/)?.length ?? 0
//         let below = input[idx+1].slice(realIndex-1, realIndex+2)?.match(/\d/)?.length ?? 0
//         let adjacentNumbers = left + right + above + below
//         let leftNumber,rightNumber,aboveNumber,belowNumber
//         if(adjacentNumbers == 2){
//             let numbersFound = false
//             let adjacentNumbersFound = 0
//             for(let i = 0 ; !numbersFound ; i++){
//                 if(adjacentNumbersFound == 2){
//                     numbersFound = true
//                 }
//                 let nextL = elm[realIndex-1]
//                 while(nextL.match(/\d/)){
//                     leftNumber += elm[realIndex-1-i]
//                 }
//                 let nextR = elm[realIndex+1]
//                 while(nextR.match(/\d/)){
//                     rightNumber += elm[realIndex+1+i]
//                 }
//                 numbersFound = true // temp delete this
//                 // let nextT = input[idx-1]
//                 // while(nextR.match(/\d/)){
//                 //     right += elm[realIndex+1+i]
//                 // }
//             }
//         }
//         // console.log(regExResult);
//         console.log(leftNumber,rightNumber)
//     }
    
// })