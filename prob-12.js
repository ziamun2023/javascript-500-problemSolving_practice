//how to reverse a string 
const reverse=(str)=>{

    const stringToArray=str.split("")
    let arrREwverse=stringToArray.reverse()
    let reverseJoin=arrREwverse.join("")
    return reverseJoin

    // console.log(stringToArray)
     


}

const string='hey man'
// var arr=['a','e','2']
// console.log(arr.reverse())

console.log(reverse(string))