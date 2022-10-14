//problem******************************
//Function which accepts two arrays as parameters (input)
// Function will return true or false (ouput in boolean)
// if array1 is [2,3,4] and array2 is [4,9,16]
// the frequency of values must be same (doubt)

//algo**********************************

//let the function accept two arrays
//store the arrays as arr1 and arr2
//return false if length of arr1 and arr2 are not same

//sqaure  each item in arr1 and compare each item with corresponding item in arr2
//break at the point when the camparsion is false and return false as output of the function
// return true if all comparison passes.

const same = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;

  return (
    JSON.stringify(arr2) ===
    JSON.stringify(
      arr1.map((cur) => {
        return cur ** 2;
      })
    )
  );
};

console.log(same([2, 3, 4], [4, 9, 19]));
