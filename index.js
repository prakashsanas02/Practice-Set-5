// Practice Set 5
// Problem 1
// let arr = [1, 2, 3, 4, 5, 80]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Practice Problem 2
// let arr = [1, 2, 3, 4, 5, 80]
// let a;
// do {
//   a = prompt("Enter a number")
//   a = Number.parseInt(a)
//   arr.push(a)
// } while (a != 0);
// console.log(arr)

// Practice Problem 3
// let arr = [1, 2, 20, 4, 40, 6, 80, 700]
// let n = arr.filter((x)=>{
//   return x%10 == 0
// })
// console.log(n)

// Practice Problem 4
// let arr = [1, 2, 20, 4, 40, 6, 80, 700]
// let n = arr.map((x)=>{
//   return x*x
// })
// console.log(n)

// Practice Problem 5
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = arr.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n);
