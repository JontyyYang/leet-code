const maxValue = Math.pow(2, 31);
const reverse = (x: number): number => {
  if (x === 0) {
    return 0;
  }
  const positiveNumber = Math.abs(x);

  const sign = positiveNumber === x ? true : false;

  const reverseNumber = Number.parseInt(
    positiveNumber.toString().split('').reverse().join('').replace(/^0?/, '')
  );

  return reverseNumber > maxValue ? 0 : sign ? reverseNumber : -reverseNumber;
};

const x1 = 123;
reverse(x1);

const x2 = -123;
console.log(reverse(x2));

const x3 = 120;
console.log(reverse(x3));

const x4 = 0;
reverse(x4);
export {};
