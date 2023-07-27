//Palindrome

const palindromeFind=(str)=>{
    const string=str.toLowerCase()
    let reverse=string.split("").reverse().join("")
    if(reverse===str){
        return console.log('this is palindrome')
    }
    else{
        return console.log('this is not palindrome')
    }


}
console.log(palindromeFind('mam'))