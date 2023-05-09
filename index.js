// function aritmetik(arr) {
//   sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// // console.log(aritmetik([3, 4, 5, 4, 4]));
// function geometrik(arr) {
//   multible = 1;
//   for (let i = 0; i < arr.length; i++) {
//     multible *= arr[i];
//   }
//   return multible ** (1 / arr.length);
// }
// // console.log(geometrik([4, 4]));
// let length = [];
// function longestWord(arr) {
//   let splited = arr.split(" ");
//   for (let i = 0; i < splited.length; i++) {
//     length.push(splited[i].length);
//   }
//   let max = Math.max.apply(null, length);
//   let maxİndex = length.indexOf(max);
//   return splited[maxİndex];
// }
// console.log(
//   longestWord(
//     "merhaba nasılsın ben mehmet on tane relevetions nasılolurdabnmqadnwlkn"
//   )
// );
// let newarr = [];

// function capitalizeWords(arr) {
//   let capital = arr.toUpperCase();
//   let splited = capital.split(" ");

//   for (let i = 0; i < splited.length; i++) {
//     for (let k = 0; k < splited[i].length; k++) {
//       if (k === 0) {
//         newarr += splited[i][k];
//       } else {
//         newarr += splited[i][k].toLowerCase();
//       }
//     }
//     newarr += " ";
//   }
//   console.log(newarr.split(","));
// }
// console.log(capitalizeWords("ben iyiyim nasılsın evet aynen"));

// function arraySum(arr) {
//   let sum = 0;
//   let sorted = arr.sort(function (a, b) {
//     return a - b;
//   });
//   for (let i = 0; i < sorted.length - 1; i++) {
//     sum += sorted[i];
//   }

//   if (sum === sorted[sorted.length - 1]) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let newArr = [];
// let index = null;
// function repeatNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr.filter((x) => x == arr[i]).length);
//     let maxValue = Math.max(...newArr);
//     index = newArr.indexOf(maxValue);
//   }
//   return arr[index];
// }
// console.log(
//   repeatNumber([
//     1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7,
//   ])
// );

let cars = {
  brand: "Mercedes",
  amount: 23,
  vites: "manuel",
  fuel: "disel",
};

const control = "brand" in cars;
console.log(control);

let numbers = [1, 2, 3, 4, 5, 6, 7];
for (let number in numbers) console.log(numbers[number]);
