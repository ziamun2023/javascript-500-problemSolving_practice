// find out the second largest value
// step 1: find largest value from the array
// step 2: find index of largest value
// step 3:Delete index from array using splice method 
// step 4:Apply same find largest number method

// const intArray=[2,3,6,12,24,3,7,9,6]
// const largestValue=(arr)=>{
//     const largestValue=Math.max(...arr)
//     let indexof=arr.indexof(largestValue)
//     let thedoc= arr.splice(indexof,1)
//     //  let secondlargestValue=Math.max(...arr)
//      return arr
// }
// console.log(largestValue(intArray))

// function findSecondLargest(arr) {
//     // Check if the array has at least two elements
//     if (arr.length < 2) {
//       return "Array should have at least two elements.";
//     }
  
//     let largest = arr[0];
//     let secondLargest = arr[1];
  
//     if (secondLargest > largest) {
//       // Swap largest and secondLargest
//       [largest, secondLargest] = [secondLargest, largest];
//     }
  
//     for (let i = 2; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//       }
//     }
  
//     return secondLargest;
//   }
  
//   // Example usage:
//   const numbers = [5, 10, 2, 15, 8];
//   const secondLargestNumber = findSecondLargest(numbers);
//   console.log("Second Largest Number:", secondLargestNumber); // Output: 10
  


//   Here's a step-by-step explanation of the swapping process:

// Let's say we have an array [5, 10, 2, 15, 8], and we want to find the second largest number in it.

// Initialize largest to the first element of the array, which is 5.
// Initialize secondLargest to the second element of the array, which is 10.
// Compare secondLargest and largest. Since secondLargest is greater than largest, we swap their values. Now largest becomes 10, and secondLargest becomes 5.
// The array traversal begins from the third element.
// At each step, we compare the current element with largest and secondLargest.
// If the current element is greater than largest, we update secondLargest to hold the old value of largest, and then update largest to hold the current element.
// If the current element is greater than secondLargest but not equal to largest, we update secondLargest to hold the current element.
// Here's how the values change during the iteration:

// First iteration: largest = 10, secondLargest = 5
// Second iteration: largest = 10, secondLargest = 5
// Third iteration: largest = 10, secondLargest = 8
// Fourth iteration: largest = 15, secondLargest = 10
// At the end of the iteration, we have found that 15 is the largest number in the array, and 10 is the second largest number. Hence, the function will return 10 as the second largest number in the given array.

// Swapping is a common technique used to rearrange values between variables, and it's often used in sorting algorithms and various other programming tasks


 function secondLargest (arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements.";
      }
    let largest=arr[0]
    let secondLArge=arr[1]
    if(secondLArge>largest){
        [largest,secondLArge]=[secondLArge,largest]
    }
    for (let i=2; i <arr.length;i++){
        if(arr[i]>largest){
            secondLArge=largest
            largest=arr[i]
        }
        else if(arr[i]>secondLArge && arr[i] !==largest){
            secondLArge=arr[i]
        }
    }
    return secondLArge
}
const array=[20,30,40,50]
const second=secondLargest(array)
console.log(second)