function isItemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) obj[arr1[i]] = true;

  for (let j = 0; j < arr2.length; j++) if (obj[arr2[j]]) return true;

  return false;
}

const result = isItemInCommon([4, 5, 8], [9, 1, 2]);
console.log(result);

function itemInCommon(arr1, arr2) {
  let obj = {};
  const commonItems = [];
  for (let i = 0; i < arr1.length; i++) obj[arr1[i]] = true;

  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) {
      commonItems.push(arr2[j]);
    }
  }

  return commonItems;
}

const commonValues = itemInCommon([4, 5, 8], [9, 1, 4]);
console.log(commonValues);
