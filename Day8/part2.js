const [maps, instructions] = require('./input')

let startnodes = Object.keys(maps).filter(elm => {
    return elm.match(/A$/)
})

let conditions = startnodes.map(elm => {
    return elm.match(/Z$/) ? true : false
})
let condition = conditions.includes(false)
let idx = 0
let c = 0

while(condition){
    for(let i = 0 ; i < 6 ; i++){
        let next = maps[startnodes[i]]
        startnodes[i] = next[instructions[idx]]
    }
    idx++
    idx %= instructions.length
    conditions = startnodes.map(elm => {
        return elm.match(/Z$/) ? true : false
    })
    condition = conditions.includes(false)
    c++
    console.log(conditions)
}
console.log(c)

//this method is very impractical ie doesnt solve, you should count the steps it takes
//for each starting node to reach the 'Z' and circle back then find the GCD and LCM