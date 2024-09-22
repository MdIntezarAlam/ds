//->>>>>>>>>>>>>>>>>>>1.SPLICE. ->used to remove or insert items f
//remove an Items form the aaray
const fruiits = ["apple", "mango", "banana", "grapes"];
const removeOneItems = fruiits.splice(1);
console.log("removeOneItems,", removeOneItems);

//remove two items from the array of books
const books = ["book", "pen", "copy", "pencil"];
const removeTwoItem = books.splice(2);
console.log("removeTwoItem", removeTwoItem);

//replace items 2 with items 3 an element from the array
const currency = ["100$", "200$", "300$", "400$"];

const replace2ndCurrency = currency.splice(2, 2, "900$");
console.log("replace2ndCurrency", replace2ndCurrency);
console.log("currency", currency);

//->>>>>>>>>>>>>>>>>>>2.REDUCE, -> used to add array of elements
//reducer add array of elements
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let initialValues = 0;
const addition = numbers.reduce((acc, cur) => acc + cur, initialValues);
console.log("addition", addition);

//->>>>>>>>>>>>>>>>>>>3. FIND -> used to find an element in an array
let findBooks = ["book", "pen", "copy", "pencil"];
const findedBooks = findBooks.find((book) => book === "copy");
console.log("findedBooks", findedBooks);

//find the grater elem abvoe 5  elem from the array
const gNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const graterNum = gNumber.find((num) => num > 3);
console.log("graterNum", graterNum);

//->>>>>>>>>>>>>>>>>>>4.FOREACH ->  used to iterate an array
//display each item in the array
const arr2 = ["apple", "mango", "banana", "grapes"];
const eachValues = arr2.forEach((values) => {
  console.log(values);
});
// display each greater number above 2
const gNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const graterNumbers = gNum.forEach((num) => {
  if (num > 2) {
    console.log("all numbers above 2", num);
  }
});

//->>>>>>>>>>>>>>>>>>>5.FILTER -> used to filter an array
//even numbers
const numFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("evenNumbers", evenNumbers);

//odd numbers
const oddNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterOddNum = oddNum.filter((num) => num % 2 !== 0);
console.log("filterOddNum", filterOddNum);

// filter all the fruits which prices is greater than 400
const filterFruils = [
  { name: "Apple", price: 200 },
  { name: "mango", price: 300 },
  { name: "banana", price: 400 },
  { name: "grapes", price: 500 },
];

const filteredFruits = filterFruils.filter(({ price }) => price > 200);
console.log("filteredFruits", filteredFruits);

//fitler all the values whish values starts with 'd'
//->>>>>>>>>>>>>>>>>>start with ->
let filterValue = ["d", "e", "f", "g", "h", "i", "j", "k", "d"];
const filteredValue = filterValue.filter((value) => value.startsWith("d"));
console.log("filteredValue", filteredValue);

//->>>>>>>>>>>>>>>>>>end with ->
const endValues = ["rozi", "sozi", "kozi", "donker", "monker"];
const endResult = endValues.filter((val) => val.endsWith("i"));
console.log("endResult", endResult);

console.log(Array.from("Board_Infinity"));

//join
const joinArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newjoinedValues = joinArray.join("{}");
console.log("newjoinedValues", newjoinedValues);

//for loop
const loops = ["a", "b", "c", "d", "e"];
for (let i = 0; i < loops.length; i++) {
  console.log(i);
}

//SORT -> used to sort an array
const sortArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sortedArray = sortArray.sort((a, b) => a - b);
console.log("sortedArray", sortedArray);

//sort num
const sortVal = [1, 2, 3, 4, 5, 9, 4, 2, 1, 19, 16];
const sortedValues = sortVal.sort((a, b) => a - b);

console.log("sortedValues", sortedValues);

const sortFruits = [
  { name: "Apple", price: 200 },
  { name: "mango", price: 900 },
  { name: "banana", price: 400 },
  { name: "grapes", price: 500 },
];

const sortedFruits = sortFruits.sort((a, b) => a.price - b.price);
console.log("sortedFruits", sortedFruits);
