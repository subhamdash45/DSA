function itemInCommon(arr1, arr2) {
  let obj = {}
  for (let i = 0; i < arr1.length; i++) obj[arr1[i]] = true

  for (let j = 0; j < arr2.length; j++) if (obj[arr2[j]]) return true

  return false
}

const result = itemInCommon([4, 5, 8], [9, 1, 2])
console.log(result)
