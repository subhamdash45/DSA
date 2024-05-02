let a = {
  value: 10,
  next: {
    value: 5,
    next: {
      value: 1,
      next: null,
    },
  },
}
const b = a
a = a.next

console.log(a, b)
