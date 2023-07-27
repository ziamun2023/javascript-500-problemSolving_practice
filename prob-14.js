//how to merge two  arrays in javascript  and sort them

const arr1=['1','2','3']
const arr2=['6','5','4']


const result=arr1.concat(arr2)
const result3=result.sort(function(a,b){
    return a-b
})
console.log(result3)
console.log(...arr1,...arr2)