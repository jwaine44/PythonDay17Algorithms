/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const twoStr1 = "abc";
const twoExpected1 = "cba";

const twoStr2 = "";
const twoExpected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */

function reverseStr(str) {
    if (str.length == ""){
        return "";
    }
    var the_str = str.slice(1);
    var letter = str[0];
    return reverseStr(the_str) + letter;
}

console.log(reverseStr("algorithms"))
console.log(reverseStr(twoStr1));
console.log(reverseStr(twoStr2));