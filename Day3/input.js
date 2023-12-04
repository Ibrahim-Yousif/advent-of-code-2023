const path = require('path')
const fs = require('fs')

let input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n')

module.exports = input