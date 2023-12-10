const [maps, instructions] = require('./input')

let curr = 'AAA'
let idx = 0,c = 0
while(curr != 'ZZZ'){
    curr = maps[curr]
    let next = curr[instructions[idx++]]
    curr = next
    idx %= instructions.length
    c++
}
console.log(c)