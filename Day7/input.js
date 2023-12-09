const path = require('path')
const fs = require('fs')


let input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString().trim().split('\r\n')

let hand = []
let bid = []
input.map(elm => {
    hand.push(elm.split(' ')[0])
    bid.push(elm.split(' ')[1])
})
input = [hand,bid]
module.exports = input

