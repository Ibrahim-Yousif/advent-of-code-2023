const fs = require('fs')

let input = fs.readFileSync(`${__dirname+'/input2.txt'}`, 'utf8')
    .toString()
    .trim()
    .split('\r\n')

    input = input.map(elm => {
            return elm.match(/\d+/g)
        })

        let [time,distance] = ['', '']
    input[0].map(elm => time += elm)
    input[1].map(elm => distance += elm)
    input = [[time],[distance]]

    module.exports = input;
