// * Bir dizi içinde sadece tek sayıları içinden alıp başka bir dizi oluşturulmak isteniyor.Ve bu sayıların toplamını bulan bir fonksiyon yazılması isteniyor...

sumOfOddNumbers = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      sum += array[i];
    }
  }
  return sum;
};

number = [1, 2, 6, 7, 3, 1, 23, 3];
sum = sumOfOddNumbers(number);

const x = 1;
console.log("x= " + x);
