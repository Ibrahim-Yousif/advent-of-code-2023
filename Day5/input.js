const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split(':')
    
    const maps = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .match(/([a-zA-Z].*):/g)

    maps.map((elm,idx) => {maps[idx] = maps[idx].replace(/\s.*|:/g, '')})
    // console.log(maps)

    input.map((elm, idx) => {
        input[idx] = elm.replace(/[a-z-]/g, '')
    })
    for(let i = 0 ; i < input.length ; i++){
        if(input[i].length == 0){
            input.splice(i, 1)
            i = 0
        }
    }
  
    let inputMaps = {
        [maps[0]]: [input[0].trim()],
        [maps[1]]: getRange(1),
        [maps[2]]: getRange(2),
        [maps[3]]: getRange(3),
        [maps[4]]: getRange(4),
        [maps[5]]: getRange(5),
        [maps[6]]: getRange(6),
        [maps[7]]: getRange(7),
    }
    // console.log(inputMaps)
    
    // console.log(inputMaps['temperature-to-humidity'].source)
    
 
function getRange(index){
return {
        destination: input[index].match(/^\d+/gm),
        source: input[index].trim().split('\r\n').map(elm => elm.split(' ')[1]),
        range: input[index].match(/\d+$/gm)  
    }
}
module.exports = inputMaps

