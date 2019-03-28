// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const normalize = string => string.replace(/[\W]/g, '').toLowerCase();
//   const buildCharMap = (string) => {
//     const charMap = {};
//     string.split('').forEach((char) => {
//       if (!string[char]) {
//         charMap[char] = 1;
//       } else {
//         charMap[char] += 1;
//       }
//     });
//     return charMap;
//   };

//   const normA = normalize(stringA);
//   const normB = normalize(stringB);

//   if (normA.length !== normB.length) {
//     return false;
//   }
//   const sortedCharsA = Object.keys(buildCharMap(normA)).sort();
//   const sortedCharsB = Object.keys(buildCharMap(normB)).sort();

//   return sortedCharsA.every((value, index) => value === sortedCharsB[index]);
// }

function anagrams(stringA, stringB) {
  const superNormalize = string => string
    .replace(/[\W]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  return superNormalize(stringA) === superNormalize(stringB);
}

module.exports = anagrams;
