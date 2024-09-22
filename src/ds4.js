const arr = [10, 12, 22, 33, 2, 1, 3];
const sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr);

//calculation
let customerProice = 200;
let myPrice = 100;
function myFunction() {
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}

console.log(myFunction(customerProice, myPrice));
