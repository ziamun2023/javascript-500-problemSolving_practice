// Find vowels from a string and count it

const CounVowel=(str)=>{
    const vowels=['a','e','i','o','u']
 
   
    let count=0
  
    for (let letters of str.toLowerCase()){
        if(vowels.includes(letters)){
            count ++
        }
    }
  
    return count
}
const string='muntasir'

console.log(CounVowel(string))
