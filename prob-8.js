//Factorial of any number

const factorial=(factorialNum)=>{
    let fact=1
    
    if(factorialNum<0){
        console.log('this is negative')
    }
    else{
        for(let i=1; i<factorialNum.length  ;i++){
              fact=fact*i
        }
    }
    return fact
     

}

console.log(factorial(10))
