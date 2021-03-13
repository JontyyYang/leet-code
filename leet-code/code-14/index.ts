const longestCommonPrefix = (strs: string[]): string => {
  if (!strs.length) {
    return '';
  }
  const lengthArray = strs.map(item => item.length);
  const minLength = Math.min(...lengthArray);
  let flag = true;

  for (let i = minLength; i !== 0; i--) {
    const str = strs[0].substring(0, i);

    strs.forEach(item => {
      if (!item.startsWith(str)) {
        flag = false;
      }
    });

    if (flag) {
      return str;
    }

    flag = true;
  }

  return '';
};

const strs1 = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strs1));

const strs2 = ['dog', 'racecar', 'car'];
console.log(longestCommonPrefix(strs2));

const strs3 = ['a'];
console.log(longestCommonPrefix(strs3));

export {};
