/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const words1 = str1.toLowerCase();
  const words2 = str2.toLowerCase();
  if (words1.length !== words2.length) {
    console.log("The given words are not anagrams!");
    return false;
  }
  const sorted1 = words1.split('').sort().join('');
  const sorted2 = words2.split('').sort().join('');
  return sorted1 === sorted2;
}

module.exports = isAnagram;
