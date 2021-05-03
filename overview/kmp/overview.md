# 算法

## 算法名

KMP，实际上是一种字符串匹配算法， 可以在 O（m + n）的时间复杂度内实现两个字符串的匹配， 而不是暴力算法的 O(m \* n)

## 算法对比

Brute-Force， 是一种纯暴力算法。 两个字符串从头到尾进行匹配，一旦失败， 那么两个字符串就全部重头开始

```javascript
const bruteForce = (str1, str2) => {
  const str1Len = str1.length;
  const str2len = str2.length;

  let i,
    j = 0;
};
```

## 算法目的

利用部分匹配表【partial match table】【PMT】来实现，减少两个字符串匹配所需要的匹配次数

## 算法思路

> 以字符串 abababca 为例

| char  | a   | b   | a   | b   | a   | b   | c   | a   |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| value | 0   | 0   | 1   | 2   | 3   | 4   | 0   | 1   |

1. 首先需要了解字符串的前缀和后缀， 如果存在两个字符串，分别是 A 和 B，如果存在 A = BS， 其中 S 是任意非空字符串，那么 B 就是 A 的前缀。比如 HARRY 的前缀有 {H, HA, HAR, HARR}, 这里是不包含自己的全集的。 同样的。 后缀有 {ARRY, RRY, RY, Y}

2. PMT 的定义就是前缀集合和后缀集合的交集中最长元素的长度,比如， 对于 aba， 前缀是{a, ab}, 后缀是{ba, a} 前缀和后缀的交集的最大长度就是 1。对于 ababa。 前缀是 {a, ab, aba,abab}, 后缀是 {baba, aba, ab,a} 最长的元素是 aba， 所以长度就是 3

3. 本质就是把长短字符串匹配过程中，每次匹配失败，长串都要重置到开头改为短串充值到 pmt 对应的位置

4. 比如在 ababababca 中 查找 abababca， 如果在 j 处不匹配。那么，根据之前 PMT 的性质， 住字符串

## 算法核心

1. 匹配失败的时候，总是让模式串回退，文本不用回退

2. 字符串比较的时候，模式串提供的信息月底，计算复杂度越低

3. next 数组是 KMP 算法的核心。next[k]的定义是 p[0]到 p[k]的这一段字符串，使得 k 的前缀等于 k 的后缀的最大的 k

## 算法实现

```javascript
const KMP = (t, p) => {
  // 初始的两个索引，分别对应
  let i = 0;
  let j = 0;

  // 当两个字符串没到最后的时候
  while (i < t.length && j < p.length) {
    // 只有刚开始，并且长串短串对应位置匹配上了，才会增加双索引
    if (j == -1 || t[i] == p[j]) {
      i++;
      j++;
    } else {
      // 否则短串就按照next指针来做
      j = next[j];
    }
  }

  // 有一个字符串到最后了
  // 如果是短串，说明完全匹配了
  if (j == p.length) {
    return i - j;
  } else {
    // 否则说明是长串没配好， 所以直接没了
    return -1;
  }
};
```

## 算法应用

```js
const includes = [];
```

## 参考

[知乎链接](https://www.zhihu.com/question/21923021)
