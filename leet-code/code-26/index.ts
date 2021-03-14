const removeDuplicates = (nums: number[]): number => {
  let idx = 1;
  nums.forEach((item, index) => {
    if (index === 0) {
      // noop
    } else {
      if (item !== nums[index - 1]) {
        nums[idx] = item;
        idx++;
      }
    }
  });
  return idx;
};

const nums1 = [1, 1, 1, 1, 2, 2, 2, 2, 3, 4];
console.log(removeDuplicates(nums1));
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2));

export {};
