// let num = 3;
// if (num % 2 === 0){
//   console.log('Number is an even number')
// } else {
//   console.log ("number is an odd number")
// }


// switch (num % 2) {
//     case 0: console.log ("i am even")
//     default: console.log ('i am odd')
//   }
  

// let numberone = 10;
// let numbertwo = 5;

// if (numberone > numbertwo){
//     console.log ("number one is greater")
//   } else if (numbertwo > numberone {
//     console.log ("number two is greater")
//   } else {
//     console.log ("they are the same")
//   }

// If you have two arrays
// Even=[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// Odd=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// Write a code that returns a new array containing both the even and odd array in mathematical order of ascension eg [1, 2, 3, 4.........]



//Write a JS code to print numbers from 1 to 1000

// for (let num = 1; num <= 1000; num = num + 1) {
//   console.log(num)
// }

//Write a JS code to print numbers from 1000 to 1

const blessing = {
  name: "blessing",
  age: 25,
  sex: "female",
  account: 1000000
}

for(let anyvariable in blessing) {
  console.log(anyvariable)
}

let objkeys;
let i;

for (i = 0,  objkeys = Object.keys(blessing); i <  objkeys.length; i++  ) {
  console.log(objkeys[i])
}

const numbers = [1, 2, 3, 4, 5, 6];
for (let key in numbers) {
  console.log (numbers[key])
}

const cars = ["bentley", "Toyota", "camry"];
for (let key in cars) {
  console.log (cars[key])
}


// const arr = [1,6,7,4]
// console.log(arr.length, 'this is the length')
// console.log(arr[1])

for (let key in arr) {
  console.log(key)
}

// console.log(blessing.name);
// console.log(blessing.age);
// console.log(blessing.sex);
// console.log(blessing.account);

// multipy all the elements of a given array by 2
// const arr = [1,4,5,6,3,4]
// console.log(1 * 2)
// console.log(4 * 2);

// for
// for in
// for of
// while
// Do while

// for (expression one; expression two; expression three) {
  // your block of code
// }

// expression one is executed on time before the execution of the code block
// expression two is the condition for the code block to run
// expression three is code that is executed every the block of code has been executed


// If you have two arrays
// even= 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// odd= 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// write a code that returns a new array containing both the even and odd array in mathetimatical order of ascension else.g [1, 2, 3, 4, ......]



// multiply all the elements of a given array by 2
// const arr = [1,4,5,6,3,4]