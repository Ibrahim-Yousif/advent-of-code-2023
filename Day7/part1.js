let input = require('./input.js')

//strong->weak: 5 of a kind, 4 of a kind, full house, 3 of a kind, 2 pair, 1 pair, high card
// let strength = [1,2,3,4,5,6,7]// ^
let rank = []
let types = []
for(let i = 0 ; i < 1000 ; i++){
    types.push([input[0][i], getType(input[0][i])])
}
types.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    const order = 'AKQJT98765432';
    for (let i = 0; i < Math.min(a[0].length, b[0].length); i++) {
      const indexA = order.indexOf(a[0][i]);
      const indexB = order.indexOf(b[0][i]);
      if (indexA !== indexB) return indexA - indexB;
    }
    return a[0].length - b[0].length;
  })
function getType(hand){
    hand = hand.split('')
    const counts = {};
    for (const num of hand) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    let value = Math.max(...Object.values(counts))
        if(value == 5)
            return 1
        if(value == 4)
            return 2
        if(value == 3 && Object.values(counts).includes(2))
            return 3
        if(value == 3 && !Object.values(counts).includes(2))
            return 4
        if(value == 2 && Object.values(counts).filter(elm => elm == 2).length == 2)
            return 5
        if(value == 2 && Object.values(counts).filter(elm => elm == 2).length == 1)
            return 6
        if(value == 1 && Object.values(counts).filter(elm => elm == 1).length == 5)
            return 7
}

let meow = types.reduce((acc, curr, idx)=>{
    let bid = input[1][input[0].indexOf(curr[0])]
    return acc + bid * (1000 - idx)
},0)
console.log(meow)
console.log(types)