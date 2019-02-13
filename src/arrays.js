const getNthElement = (index, array) => {
  if (index < array.length){ return array[index]}
};

const arrayToCSVString = (array) => {
  return array.join(',')// your code here
};

const csvStringToArray = (string) => {
  return string.split(',') // your code here
};

const addToArray = (element, array) => {
array.push(element)// your code here
};

const addToArray2 = (element, array) => {
  return array.concat(element)/*The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

*/
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1) // your code here
};

const numbersToStrings = (numbers) => {
 return numbers.toString().split(',') // your code here
};

const uppercaseWordsInArray = (strings) => {
 return strings.map(strings.toUpperCase) // your code here
};

const reverseWordsInArray = (strings) => {
  // your code here
};

const onlyEven = (numbers) => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
};

const removeSpaces = (string) => {
  return string.filter(entry => /\S/.test (entry)) // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
