export function find(array: number[], value: number): number {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === value) {
      return mid;
    }

    if (array[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 🔥 IMPORTANT FIX
  throw new Error("Value not in array");
}0