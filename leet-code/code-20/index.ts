const leftSignType = ['(', '[', '{'];
const rightSignType = [')', ']', '}'];

const formatMap = () => {
  const map = new Map();
  rightSignType.map((item, index) => {
    map.set(item, leftSignType[index]);
  });
  return map;
};

const check = (s: string) => {
  // 校验长度是否为空
  if (s.length === 0) {
    return false;
  }

  // 校验长度是否为偶数
  if (s.length % 2 !== 0) {
    return false;
  }

  const sArr = s.split('');
  for (const i of sArr) {
    if (!leftSignType.includes(i) && !rightSignType.includes(i)) {
      return false;
    }
  }

  return true;
};

const isValid = (s: string): boolean => {
  const res = check(s);
  if (!res) {
    return false;
  }

  debugger;
  const sArr = s.split('');
  const newArray: string[] = [];
  const signMap = formatMap();

  for (let i = 0, j = sArr.length; i !== j; i++) {
    const temp = sArr[i];
    if (leftSignType.includes(temp)) {
      newArray.push(temp);
    }
    if (rightSignType.includes(temp)) {
      const lastSign = newArray.pop();
      if (signMap.get(temp) !== lastSign) {
        return false;
      }
    }
  }

  if (newArray.length > 0) {
    return false;
  }

  return true;
};

const s1 = '()';
isValid(s1);

// const s2 = '()[]{}';
// isValid(s2);

// const s3 = '(]';
// isValid(s3);

// const s4 = '([)]';
// isValid(s4);

// const s5 = '{[]}';
// isValid(s5);

export {};
