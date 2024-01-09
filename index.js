/* Remove all falsy values from an array. Return a new array; do not mutate the original array. */

/** SOLUTION 1 */

function bouncer(arr, conditionFunc) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if(conditionFunc(value)) {
      newArr.push(value)
    }
  }
  return newArr;
}

function condition(value) {
  return Boolean(value)
}

console.log(bouncer([7, "ate", "", false, 9], condition));

/** SOLUTION 2 */

function bouncer(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (!value == false) {
      newArr.push(value);
    }
  }
  return newArr;
}

/** SOLUTION 3 */

function bouncer(arr) {
  return arr.filter(arrItem => !arrItem == false);
}

console.log(bouncer([7, "ate", "", false, 9]));

