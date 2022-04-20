function isPalindrome(word) {
  // Write your algorithm here
  if (word === word.split("").reverse().join("")) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here

  if word === word, split, reversed and then joined
  then return true
  else
  return false
*/

/*
  Add written explanation of your solution here
  Using built-in JS methods, the provided string is compared to itself
  split into an array, reversed and joined back together in a string.
  If this is true, then true is returned.
  If this is not true, then false is returned.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
