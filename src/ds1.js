//compare two array if element exist then show booked
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 10];

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2?.length; j++) {
    if (arr[i] === arr2[j]) {
      arr[i] = "Booked";
      console.log((arr[i] = "Booked"));
    }
  }
}

//check name in two array if exist then return already name exist
const name1 = ["A", "B", "C", "D", "E"];
const name2 = ["C", "Z", "C", "D", "E"];

function compareName() {
  for (let i = 0; i < name1?.length; i++) {
    for (let j = 0; j < name2?.length; j++) {
      if (name1[i] === name2[j]) {
        let alredyName = name1[i];
        alredyName = name2[j];
        let name_not_fond = alredyName !== name2[j];
        console.log("Already name exist", alredyName);
        console.log("Already name_not_fond", name_not_fond);
      }
    }
  }
}

const result = compareName;
console.log(result());

//compare thress word and return match word
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];
const num2 = [11, 12, 13, 14, 15, 16, 7, 18];

for (let i = 0; i < num1.length; i++) {
  for (let j = 0; j < num2.length; j++) {
    if (num1[i] === num2[j]) {
      num1[i] = "This name alredy exist";
      console.log(num1[i]);
    }
  }
}

//
let name_1 = ["raahul", "kaabeer", "suumeer", "rizwan"];
let name_2 = ["raalam", "rizwan", "kaabeer", "suuberiya"];

for (let i = 0; i < name_1.length; i++) {
  for (j = 0; j < name_2.length; j++) {
    if (
      name_1[i][0] + name_1[i][1] + name_1[i][2] ===
      name_2[j][0] + name_2[j][1] + name_2[j][2]
    ) {
      console.log(name_1[i], name_2[j]);
    }
  }
}

//  additon of all element using reduce method-1
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
let values = 0;
const additionOfArray = arr1.reduce((acc, cur) => acc + cur, values);
console.log("additon of Array-1 ====", additionOfArray);

//2nd method
const arr_1 = [1, 2, 3, 4, 5];
const arr_2 = [6, 7, 8, 9, 10];

const additionOfArrays = arr_1.reduce((acc, cur, index) => {
  return acc + cur + arr_2[index];
}, 0);

console.log("addition of Arrays ====", additionOfArrays);

const allItems = [
  { name: "T-Shirt", price: "900" },
  { name: "Full-Shirt", price: "400" },
  { name: "Large-Shirt", price: "400" },
  { name: "M-Shirt", price: "500" },
  { name: "L-Shirt", price: "300" },
];
const filterd_shirt = allItems.filter(({ price }) => price > 400);
console.log(filterd_shirt);

//
function incrementCounter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}
const increment = incrementCounter();
console.log(increment());
console.log(increment());
console.log(increment());


//
const timer =setTimeout(()=>[
  console.log("hello"),
],300)