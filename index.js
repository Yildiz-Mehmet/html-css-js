function aritmetik(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
// console.log(aritmetik([3, 4, 5, 4, 4]));
function geometrik(arr) {
  multible = 1;
  for (let i = 0; i < arr.length; i++) {
    multible *= arr[i];
  }
  return multible ** (1 / arr.length);
}
// console.log(geometrik([4, 4]));
let length = [];
function longestWord(arr) {
  let splited = arr.split(" ");
  for (let i = 0; i < splited.length; i++) {
    length.push(splited[i].length);
  }
  let max = Math.max.apply(null, length);
  let maxİndex = length.indexOf(max);
  return splited[maxİndex];
}
console.log(
  longestWord(
    "merhaba nasılsın ben mehmet on tane relevetions nasılolurdabnmqadnwlkn"
  )
);
