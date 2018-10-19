const getFib = (position) =>
  position === 0 || position === 1 ?
    position :
    getFib(position - 1) + getFib(position - 2)


// Test cases
// should print 34
console.log(getFib(9))
// should print 89
console.log(getFib(11))
// should print 0
console.log(getFib(0))
