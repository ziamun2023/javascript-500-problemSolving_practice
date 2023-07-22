// find the missing item from an array

// let array=[1,2,3,4,6,8,9]
let array=[1,2,3,4,6,8,9,15]

const missingValue=(arr)=>{
const missingElement=[]
const minValue=Math.min(...arr)
const maxValue=Math.max(...arr)
for (let i= minValue; i<maxValue;i++){
    if(arr.indexOf(i)<0){
        missingElement.push(i)
    }
}
return missingElement
}

console.log(missingValue(array))