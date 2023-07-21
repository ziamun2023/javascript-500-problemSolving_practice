// return the sum of two number 

function addTwoNumber (a,b){
    if (typeof a !== 'number' || typeof b!== 'number'){
        return 'sorry you didnt pass two number'
    }
    return a+b
}

console.log(addTwoNumber(3,4))