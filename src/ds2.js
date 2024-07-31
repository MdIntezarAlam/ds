//1.replace all value with 12
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const relacedArr = arr.map((val) => {
  return (val = 12);
});

console.log("replaced arr values", relacedArr);

//2.filter arr
let filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterArrAns = filterArr.filter((val) => {
  if (val > 3) {
    return true;
  }
});

console.log("filter arr", filterArrAns);

//find
let findArr = [1, 3, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findAns = findArr.find(function (val) {
  if (val === 2) {
    return true;
  }
});

console.log("find ans", findAns);

//square each  number every 2 sec
let sarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareNum = sarr.map((sqrr) => {
  return sqrr * sqrr;
});
console.log("squareNum", squareNum);
const numbers = [1, 2, 3, 4, 5];

// Lexical `this`
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

// const timer = new Timer();

//destructure eaCH ARRAY
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c, d, e, f, g, h, i, j] = arr;
console.log(a, b, c, d);
console.log(e, f, g, h, i, j);

//destructure each array of object
const arr2 = [
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 5, c: 6 },
  { a: 7, b: 8, c: 9 },
];
const [
  { a: a1, b: b1, c: c1 },
  { a: a2, b: b2, c: c2 },
  { a: a3, b: b3, c: c3 },
] = arr2;
console.log(a1, b1, c1);
console.log(a2, b2, c2);
console.log(a3, b3, c3);
