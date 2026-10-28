
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const totalCartValue = cart.reduce(
    (total, product) => total + product.price,
    0
);

let discountedTotal = 0;

for (const product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    const finalPrice = product.price -
        (product.price * discount / 100);

    discountedTotal += finalPrice;

    console.log(
        `${product.item}: Original ₹${product.price}, ` +
        `Discount ${discount}%, Final ₹${finalPrice.toFixed(2)}`
    );
}

if (totalCartValue > 50000) {
    discountedTotal -= discountedTotal * 0.05;
}

console.log(`Total Cart Value: ₹${totalCartValue.toFixed(2)}`);
console.log(`Final Cart Total: ₹${discountedTotal.toFixed(2)}`);
