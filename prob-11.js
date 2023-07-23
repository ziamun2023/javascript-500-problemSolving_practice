//count consonant and vowel in a string

const vowel='aeiou'
let consonantcount=0
let voweCount=0

const CountVowelANdCOns=(char)=>{
    const vowel='aeiou'
    let consonantcount=0
    let voweCount=0 
    for (let charecter of char){
        if(vowel.includes(charecter.toLowerCase())){
            voweCount++
        }
        else {
            consonantcount++
        }
    }
    return {consonant : consonantcount , vowel: voweCount}
}

console.log(CountVowelANdCOns('muntasir'))