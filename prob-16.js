//how to compate two arrays are equeal or not 


//method- 1 using json
function arraysEqual1(arr1,arr2){
return JSON.stringify(arr1)===JSON.stringify(arr2)
}
const arr1=[1,2,3,5]
const arr2=[1,2,3,5]
const arr3=[2,3,4,5,6]
// console.log(arraysEqual1(arr1,arr2))
// console.log(JSON.stringify(arr1))
// console.log(arr1)

//method- 2 using every 

function arraysCompare2 (arr1,arr2){
    if(arr1.length!==arr2.length){
        return false
    }
    return arr1.every((ele,index)=>ele===arr2[index])
}

console.log(arraysCompare2(arr1,arr2))


// console.log('the method 2',arraysCompare2(arr3,arr1))

//method - 3 simple loop 

function arraysCompare3 (arr1,arr2){
if(arr1.length!==arr2.length){
    return false
}
for (let i=0;i<arr1.length;i++){
    if(arr1[i]!==arr2[i]){
        return false
    }
}
return true
}

console.log(arr2,arr1)
