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

const replace2ndCurrency = currency.splice(2,2,"900$");
console.log("replace2ndCurrency", replace2ndCurrency);
console.log("currency", currency);
