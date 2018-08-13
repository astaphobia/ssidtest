export const price = (number = null) => {
  return number ? Intl.NumberFormat('id').format(number) : 0
}
