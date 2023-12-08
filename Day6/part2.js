const [time, distance] = require('./input2')
console.log(time,distance)
let output = 1
for(let i = 0 ; i < 1 ; i++){
    let [a,b,c] = [-1 , time[i], -distance[i]]
    let delta1 = (-b + Math.sqrt(Math.pow(b,2)-(4*a*c))) / (2*a)
    let delta2 = (-b - Math.sqrt(Math.pow(b,2)-(4*a*c))) / (2*a)
    let [r1,r2]  = [Math.ceil(Math.min(delta1,delta2)),Math.floor(Math.max(delta1,delta2))]
    let testValues = [Math.floor((0+r1)/2), r1, Math.floor((r1+r2)/2), r2, Math.floor((r2+parseInt(distance[i]))/2)]
    let truthValues = [false,false,false,false,false]
    let raceWins = 0
    for(let j = 0 ; j < 5 ; j++){//test five possibilities to determine solution range
        let testNum = testValues[j]
        if(testNum*(time[i]-testNum) > parseInt(distance[i])){
            truthValues[j] = true
        }
    }
    if(truthValues[3] && truthValues[1]){
        raceWins = testValues[3] - testValues[1] + 1
    }else if(truthValues[3] && !truthValues[1]){
        raceWins = testValues[3] - testValues[1] +1 +1
    }
    else raceWins = (testValues[3]-1)-(testValues[1]+1)+1
    output *= raceWins
    console.log(delta1,delta2,a,b,c)
}

console.log(output)