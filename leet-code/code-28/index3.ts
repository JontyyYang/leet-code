// BF 另外一种算法
const strStr = (haystack: string, needle: string): number => {
  // 如果目标元素不存在， 或者正好相等，那么就返回0
  if (!needle || haystack === needle) {
    return 0;
  }

  // 如果原数组不存在， 那么就返回1
  if (haystack.length < needle.length) {
    return -1;
  }

  const iLen = haystack.length;
  const jLen = needle.length;
  let i = 0,
    j = 0;

  for (; i !== iLen && j !== jLen; i++) {
    if (haystack[i] === needle[j]) {
      j++;
    } else {
      i -= j;
      j = 0;
    }
  }

  return j === jLen ? i - jLen : -1;
};

console.error(strStr('hello', 'll'));
console.error(strStr('aaaaa', 'bba'));
console.error(strStr('jontyyang', 'yang'));

console.error(strStr('', ''));

export {};
