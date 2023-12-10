const path = require('path')
const fs = require('fs')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n\r\n')

const instructions = input[0].split('')
const mapsArray = input[1].split('\r\n')
const maps = {}
mapsArray.map(elm => {
    let curr = elm.split('=')[0].trim()
    let left = elm.split('=')[1].replace(/\(|\)/g, '').split(',')[0].trim()
    let right = elm.split('=')[1].replace(/\(|\)/g, '').split(',')[1].trim()
    maps[curr] = {
        L:left,
        R:right
    }
})

module.exports = [maps, instructions]