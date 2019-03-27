// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  if (str.length < 2) {
    return str;
  }

  return `${str.charAt(str.length - 1)}${reverse(str.slice(0, -1))}`;
}

module.exports = reverse;
