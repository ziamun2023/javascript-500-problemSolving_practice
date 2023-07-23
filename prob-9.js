//find the prime number

function isPrime(number) {
    if (number <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
  
    // Loop from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // If the number is divisible by any i, it's not prime
      }
    }
  
    return true; // If no divisors found, the number is prime
  }
  
  // Example usage:
  const num = 15;
  if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is not a prime number.`);
  }





// In this function:

// We first check if the given number (number) is less than or equal to 1. Numbers less than or equal to 1 are not considered prime, so we immediately return false.

// Next, we set up a loop that starts from 2 and goes up to the square root of the given number (Math.sqrt(number)). We only need to check divisors up to the square root because any factor greater than the square root will have a corresponding factor smaller than the square root.

// Inside the loop, we check if the number is divisible by i using the modulo operator (number % i). If the result is 0, it means the number is divisible by i, and therefore, it is not a prime number. In this case, we return false.

// If the loop completes without finding any divisors, we return true, indicating that the number is prime.

// We test the function with an example number 13. If isPrime(num) returns true, we log that ${num} is a prime number. Otherwise, we log ${num} is not a prime number..

// When you run the code with num = 13, the output will be 13 is a prime number. because 13 is indeed a prime number.