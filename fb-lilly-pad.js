
function getSecondsRequired(N, F, P){//N lilly pads, F frogs, P[] pad index
    let optimalSetupSteps = 0
    P.sort((a,b) => a-b)
    let lillyPads = []
    for(let i = 0 ; i < N - 1 ; i++){lillyPads.push(i+1)}

    let closestUnoccupied = lillyPads.filter( (elm) => {
        return !P.includes(elm)
    })
    
    function frogsInBtwn(s, e){
         
        return P.filter(elm => { return elm>=s+1 && elm<=e-1})?.length
    }
    while(P && closestUnoccupied && P[0] < closestUnoccupied[closestUnoccupied.length -1]){
        let steps = closestUnoccupied[closestUnoccupied.length-1] - P[0] - frogsInBtwn(P[0],closestUnoccupied[closestUnoccupied.length-1])
        P.shift()
        closestUnoccupied.pop()
        optimalSetupSteps+=steps
    }
        return optimalSetupSteps + F
    }


let test = getSecondsRequired(6,3,[5,2,4])
console.log('final result: ' ,test)
