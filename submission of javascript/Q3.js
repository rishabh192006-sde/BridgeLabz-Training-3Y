
const expenses = [
    { category: "Food", amount: 5000 },
    { category: "Travel", amount: 2000 },
    { category: "Rent", amount: 10000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 1000 }
];

let total = 0;

for (const expense of expenses) {
    total += expense.amount;
}

const average = total / expenses.length;
const tax = total * 0.10;
total += tax;

console.log(`Total Expenses Before Tax: ${(total - tax).toFixed(2)}`);
console.log(`Average Expense: ${average.toFixed(2)}`);
console.log(`Tax Amount: ${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: ${total.toFixed(2)}`);
