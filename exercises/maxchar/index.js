// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const result = {};
//   let max = 0;
//   let maxChar = '';
//   str.split('').forEach((element) => {
//     if (!result[element]) {
//       result[element] = 1;
//     } else {
//       result[element] += 1;
//     }
//   });

//   for (const char in result) {
//     if (result[char] > max) {
//       max = result[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

function maxChar(str) {
  const result = {};
  str.split('').forEach((element) => {
    if (!result[element]) {
      result[element] = 1;
    } else {
      result[element] += 1;
    }
  });


  const maxValue = Math.max(...Object.values(result));
  return Object.keys(result).find(key => result[key] === maxValue);
}

maxChar('abcccccccd');

module.exports = maxChar;
