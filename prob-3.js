// find Max and min value in an array
const arrNumber=[2,3,6,1,444,23,4,8,9]
const maxNumber=(arr)=>{
    return arr.reduce((previous,current)=>{
        return previous< current? previous: current
    })
}
console.log(maxNumber(arrNumber))