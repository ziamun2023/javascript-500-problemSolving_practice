// how to find union of two arrays in js


const arr1=[1,2,3,4,5,5,6,7]
const arr2=[7,8,9,5,4,3,2,9,11]
const unionArr=[...arr1,...arr2]
console.log([... new Set(unionArr)])