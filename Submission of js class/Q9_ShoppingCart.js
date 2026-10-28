
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(couponCode) {
        const pattern = /^(SAVE|DISC)(10|20)$/;
        const match = couponCode.match(pattern);

        if (!match) {
            return "Invalid coupon code.";
        }

        const discountPercent = Number(match[2]);
        const total = this.getTotal();
        const discountAmount = total * discountPercent / 100;
        const finalTotal = total - discountAmount;

        return `Original Total: ₹${total}
Discount: ${discountPercent}%
Discount Amount: ₹${discountAmount}
Final Total: ₹${finalTotal}`;
    }
}

const cart = new Cart();

cart.addItem("T-Shirt", 799, 2);
cart.addItem("Cap", 299, 1);
cart.addItem("Shoes", 1500, 1);

console.log("Cart Items:");
console.log(cart.items);

console.log("Total Amount: ₹" + cart.getTotal());

console.log(cart.applyCoupon("SAVE20"));
