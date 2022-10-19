//problem******************************
//Function which accepts two arrays as parameters (input)
// Function will return true or false (ouput in boolean)
// if array1 is [2,3,4] and array2 is [4,9,16]
// the frequency of values must be same (doubt)

//***************approach 1*******************

//let the function accept two arrays
//store the arrays as arr1 and arr2
//return false if length of arr1 and arr2 are not same

//sqaure  each item in arr1 and compare each item with corresponding item in arr2

// return true if two arrays are same, if not return false.

// const same = (arr1, arr2) => {
//   if (arr1.length != arr2.length) return false;

//   return (
//     JSON.stringify(arr2) ===
//     JSON.stringify(
//       arr1.map((cur) => {
//         return cur ** 2;
//       })
//     )
//   );
// };

// console.log(same([2, 3, 4], [4, 9, 19]));

//***************approach 2******************
// O(n^2)

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let current of arr1) {
    let curIndex = arr2.indexOf(current ** 2);
    if (curIndex === -1) return false;
    //reduce computation
    arr2.splice(curIndex, 1);
  }
  return true;
};

console.log(same([2, 3, 4], [9, 16, 4]));
