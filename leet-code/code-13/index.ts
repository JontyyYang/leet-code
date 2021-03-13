const romanType = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const replaceRomanType = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

const romanToInt = (s: string): number => {
  const replaceArray = Object.keys(replaceRomanType);
  const replaceBasicArray = Object.keys(romanType);
  replaceArray.forEach(item => {
    // console.log(replaceRomanType[item]);
    // 这里node版本要求比较高，否则没有replaceAll这个方法
    // s = s.replaceAll(item, `-${replaceRomanType[item]}`);
    // @ts-ignore
    s = s.replace(new RegExp(item, 'g'), `-${replaceRomanType[item]}`);
  });

  replaceBasicArray.forEach(item => {
    // @ts-ignore
    s = s.replace(new RegExp(item, 'g'), `-${romanType[item]}`);
    // s = s.replaceAll(item, `-${romanType[item]}`);
  });

  const finalRes = s
    .split('-')
    .filter(item => item !== '')
    .reduce((total, next) => {
      return +total + +next;
    }, 0);

  console.log(finalRes);
  return finalRes;
};

const roman1 = 'III';
romanToInt(roman1);

const reman2 = 'MCMXCIV';
romanToInt(reman2);

const roman3 = 'LVIII';
romanToInt(roman3);

const roman4 = 'IX';
romanToInt(roman4);

export {};
