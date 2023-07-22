let array=[1,3,5,6,12,22,23,24,26,27,27]

const findEven=(arr)=>{
    const even=arr.filter(item=>{
      return  item % 2===0
        
    })
    return even
}
console.log(findEven(array))