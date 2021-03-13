const twoSum = (nums: number[], target: number): number[] => {
  for (let i = 0, j = nums.length; i !== j; i++) {
    const rest = target - nums[i];
    const idx = nums.lastIndexOf(rest);
    if (idx > i) {
      return [i, idx];
    }
  }

  return [];
};

const nums1 = [2, 7, 11, 15],
  target1 = 9;
const nums2 = [3, 2, 4],
  target2 = 6;
const nums3 = [3, 3],
  target3 = 6;

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));

export {};
