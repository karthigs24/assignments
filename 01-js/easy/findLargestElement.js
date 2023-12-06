/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let element = numbers
    let num = element.sort((a, b) => a - b)
    const lastNumber = num[num.length - 1]
    return lastNumber

}

module.exports = findLargestElement;