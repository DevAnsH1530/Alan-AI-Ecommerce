const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "INR" //Indian Rupees
})

export default function formatCurrency(amount) {
  return formatter.format(amount)
}
