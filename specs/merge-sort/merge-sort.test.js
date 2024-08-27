/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/


const mergeSort = (nums) => {
  // code goes here

  if(nums.length < 2){
    return nums;
  }

  const arrLength = nums.length;
  const middle = Math.floor(arrLength/2);
  const left = nums.slice(0,middle);
  const right = nums.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft,sortedRight);
  
};

const merge = (left,right)=>{
  let newArr = [];
  while(left.length && right.length){
    if(left[0]<=right[0]){
      newArr.push(left.shift());
    }else{
      newArr.push(right.shift())
    }
  }
  return newArr.concat(left,right);
}


// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
