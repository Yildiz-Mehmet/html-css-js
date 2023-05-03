function reverseString(number) {
  let end = 1;
  for (let i = number; i >= 1; i--) {
    end *= i;
  }
  console.log(end);
}
reverseString(3);
