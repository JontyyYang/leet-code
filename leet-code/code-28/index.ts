// needle 为空，返回0
// haystack 找到了 needle 返回索引
// haystack 没有找到，返回-1

// 纯暴力接法
const strStr = (haystack: string, needle: string): number => {
  // 如果目标元素不存在， 或者正好相等，那么就返回0
  if (!needle || haystack === needle) {
    return 0;
  }

  // 如果原数组不存在， 那么就返回1
  if (haystack.length < needle.length) {
    return -1;
  }

  // i 的长度可以小一点， 不用包含 j 的长度
  for (let i = 0; i !== haystack.length - needle.length + 1; ) {
    // 使用temp， 避免每次循环都改动到i
    let temp = i;
    for (let j = 0; j !== needle.length; ) {
      // 如果当前相同，那么就 各自加一，否则， i+1,j归0
      if (haystack[temp] === needle[j]) {
        temp++;
        j++;
      } else {
        j = 0;
        i++;
        break;
      }

      if (j === needle.length) {
        return i;
      }
    }
  }

  return -1;
};

console.error(strStr('hello', 'll'));
console.error(strStr('aaaaa', 'bba'));
console.error(strStr('jontyyang', 'yang'));

console.error(strStr('', ''));

export {};
