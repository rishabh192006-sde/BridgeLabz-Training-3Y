
const purchaseAmount = 12000;
let discountPercentage = 0;

if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
}

const discountAmount = Math.round(purchaseAmount * discountPercentage / 100);
const finalPrice = Math.round(purchaseAmount - discountAmount);

console.log(`Original Total: ₹${purchaseAmount}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${discountAmount}`);
console.log(`Final Price: ₹${finalPrice}`);
