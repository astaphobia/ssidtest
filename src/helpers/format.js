export const price = (number = null) => {
  console.log(number)
  return number ? Intl.NumberFormat('id').format(number) : 0
}
