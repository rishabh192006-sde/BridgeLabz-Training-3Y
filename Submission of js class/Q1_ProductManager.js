
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            return "Invalid discount";
        }

        this.price = this.price - (this.price * percent / 100);
    }

    getDetails() {
        return `ID: ${this.id}
Name: ${this.name}
Price: ₹${this.price.toFixed(2)}
Category: ${this.category}`;
    }
}

const product1 = new Product(1, "Laptop", 50000, "Electronics");
const product2 = new Product(2, "Mouse", 500, "Accessories");
const product3 = new Product(3, "Keyboard", 1500, "Electronics");
const product4 = new Product(4, "Headphones", 2000, "Electronics");

const products = [product1, product2, product3, product4];

product1.applyDiscount(10);

console.log("All Products:");

products.forEach(product => {
    console.log(product.getDetails());
});

const expensiveProducts = products.filter(product => product.price > 1000);

console.log("Products with price greater than 1000:");

expensiveProducts.forEach(product => {
    console.log(product.getDetails());
});
