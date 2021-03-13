function isPalindrome(x: number): boolean {
  return Number.parseInt(x.toString().split('').reverse().join('')) === x;
}
const x1 = 121;
console.log(isPalindrome(x1));

const x2 = -121;
console.log(isPalindrome(x2));
export {};
