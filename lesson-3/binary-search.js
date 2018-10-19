const binarySearch = (inputArray, value) => {
  if (inputArray.length === 0 || value < inputArray[0] || value > inputArray[inputArray.length - 1]) {
    return -1
  }

  let min = 0
  let max = inputArray.length - 1

  while (min <= max) {
    const guess = Math.floor((min + max) / 2)

    // found the index where is the value
    if (value === inputArray[guess]) {
      return guess
    }

    // not on the second half
    if (value < inputArray[guess]) {
      max = guess - 1
    }

    // not on the first half
    if (value > inputArray[guess]) {
      min = guess + 1
    }
  }

  return -1
}

const testList = [1,3,9,11,15,19,29]
const testVal1 = 25
const testVal2 = 15
// should print -1
console.log(binarySearch(testList, testVal1))
// should print 4
console.log(binarySearch(testList, testVal2))

