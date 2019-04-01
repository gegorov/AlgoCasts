// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   const makeLine = (lineNr, lengthLimit) => {
//     let result = '';
//     for (let i = 0; i <= lineNr; i += 1) {
//       result += '#';
//     }

//     for (let j = 0; j < lengthLimit - lineNr - 1; j += 1) {
//       result += ' ';
//     }
//     return result;
//   };

//   for (let i = 0; i < n; i += 1) {
//     console.log(makeLine(i, n));
//   }
// }


// function steps(n) {
//   for (let row = 0; row < n; row += 1) {
//     let stair = '';
//     for (let column = 0; column < n; column += 1) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';

  steps(n, row, stair + add);
}

module.exports = steps;
