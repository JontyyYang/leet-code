/*
 * @Author: your name
 * @Date: 2021-04-23 21:10:35
 * @LastEditTime: 2021-04-23 21:11:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leet-code/leet-code/code-27/index.ts
 */
function removeElement(nums: number[], val: number): number {
  let idx = 0;

  nums.forEach(item => {
    if (item !== val) {
      nums[idx] = item;
      idx++;
    }
  });
  return idx;
}
const nums = [3, 2, 2, 3],
  val = 3;
console.log(removeElement(nums, val));
const nums2 = [0, 1, 2, 2, 3, 0, 4, 2],
  val2 = 2;
console.log(removeElement(nums2, val2));
// test
export {};
