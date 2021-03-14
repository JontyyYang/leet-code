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
export {};
