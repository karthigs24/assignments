/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = str.toLowerCase().split('');
  let result = []
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] == 'a' || vowels[i] == 'e' || vowels[i] == 'i' || vowels[i] == 'o' || vowels[i] == 'u') {
      result.push(vowels[i])
    }
  }
  return result.length
}

module.exports = countVowels;