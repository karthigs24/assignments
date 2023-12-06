/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let startTime = new Date().getTime()
    let sum = 0;
    for (let i = 1; i <=n; i++) {
        sum += i
    }
    let endTime = new Date().getTime()
    let time = (endTime - startTime)/1000
    console.log(`Sum from 1 to ${n}: ${sum}`);
    console.log(`Time taken: ${time} seconds`);
  }

calculateTime(100)
calculateTime(10000)
calculateTime(1000000000)

//     let sum = 0;
  
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
  
//     return sum;
//   }
  
//   function measureTime(n) {
//     const startTime = new Date().getTime(); // Get current time in milliseconds
  
//     // Calculate the sum
//     const result = calculateSum(n);
  
//     const endTime = new Date().getTime();
//     const elapsedTimeInSeconds = (endTime - startTime) / 1000; // Convert milliseconds to seconds
  
//     console.log(`Sum from 1 to ${n}: ${result}`);
//     console.log(`Time taken: ${elapsedTimeInSeconds} seconds`);
//   }
  
//   // Example usage
//   measureTime(100);
//   measureTime(100000);
//   measureTime(1000000000);