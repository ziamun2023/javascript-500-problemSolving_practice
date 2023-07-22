// sum of all number of an array

    const arrNum=[1,2,4,5]

    const sumOfAllNum=(arr)=>{
        const sum =arr.reduce((pre,cur)=>{
            return pre+cur
        })
        return sum
    }
    console.log(sumOfAllNum(arrNum))