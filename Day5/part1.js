const input = require('./input')
let environmentArray = ['seed-to-soil',
   'soil-to-fertilizer',
   'fertilizer-to-water',
   'water-to-light',
    'light-to-temperature',
    'temperature-to-humidity',
    'humidity-to-location']

let seeds = input['seeds'][0].split(' ')

for(let i = 0 ; i < 7 ; i++){ //seven different mappings that have to be done   
    seeds = seeds.map(elm => {
        return getDestination(input[environmentArray[i]],elm)
    })
}

function getDestination(map, src){

    for(let i = 0 ; i < map.source.length ; i++){
        if((parseInt(src) >= parseInt(map.source[i])) && parseInt(src) < parseInt(map.source[i]) + parseInt(map.range[i])){
            return (parseInt(src) - parseInt(map.source[i]))+parseInt(map.destination[i])
        }
    }
        return parseInt(src)

}
// console.log(seeds)
console.log(Math.min(...seeds.filter(elm => elm > 0)));//'location'
// console.log(7600537>506246814)

//for part two you have to consider ranges of seeds and split them up according to
//their respective ranges in the destination fields of maps, since brute forcing 
//becomes impractical because of the huge amount of numbers