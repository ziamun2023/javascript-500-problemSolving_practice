// How to find duplicate elements in a given array?

const arrayNumber=[1,2,3,3,4,5,6]

const duplicate =arrayNumber.filter((elemnt,index,array)=>array.indexOf(elemnt)!==index)
console.log(duplicate)