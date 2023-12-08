const fs = require('fs')

let input = fs.readFileSync(`${__dirname+'/input.txt'}`, 'utf8')
    .toString()
    .trim()
    .split('\r\n')

    input = input.map(elm => {
            return elm.match(/\d+/g)
        })

    module.exports = input;