
function calculateTotal(orders) {
  const pricePerCoffee = 1.25;
  let totalCost = orders.reduce((total, numCoffees) => {
    return total + numCoffees;
  }, 0);
  return `The total bill is ${totalCost * pricePerCoffee}`;
}

const orders = [1, 4, 3];

console.log(calculateTotal(orders));