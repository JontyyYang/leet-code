// JS API
const strStr = (haystack: string, needle: string): number => {
  return haystack.indexOf(needle);
};

console.error(strStr('hello', 'll'));
console.error(strStr('aaaaa', 'bba'));
console.error(strStr('jontyyang', 'yang'));

console.error(strStr('', ''));

export {};
