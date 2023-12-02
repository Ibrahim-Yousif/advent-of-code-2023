const input = require('./input')


let fewestCubes = []
input.map((elm, idx) => {

    let subset = elm.match(/(?<=:).*/g)
    let seperatedSubset = subset.toString().split(';')
    let values = [0,0,0]
    for(let i = 0 ; i < seperatedSubset.length ; i++){
        let colours = [0,0,0] // red green blue
 
        colours[0] = parseInt(seperatedSubset[i].match(/\d+ (?=red)/gi)?.toString().trim() ?? '0')
        colours[1] = parseInt(seperatedSubset[i].match(/\d+ (?=green)/gi)?.toString().trim() ?? '0')
        colours[2] = parseInt(seperatedSubset[i].match(/\d+ (?=blue)/gi)?.toString().trim() ?? '0')
        if(colours[0] > values[0])
            values[0] = colours[0]
        if(colours[1] > values[1])
            values[1] = colours[1]
        if(colours[2] > values[2])
            values[2] = colours[2]
        
    }
    fewestCubes.push(values)
   
})
let output = 0
fewestCubes.map(elm => {
    output += (elm[0] * elm[1] * elm[2])
})
console.log(output)