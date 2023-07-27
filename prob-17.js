// how to fin intersection of two  arrays

const arr1=[2,3,4,5,12,32,32,33]
const arr2=[2,3,8,5,29,32,33]

let intersection=arr1.filter((ele)=>{
    return arr2.includes(ele)

})

console.log(intersection)//it shows duplicates
console.log([...new Set(intersection)]) 