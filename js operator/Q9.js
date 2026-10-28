
const numbers = [];
const results = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

for (const number of numbers) {
    let result;

    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    results.push({
        Number: number,
        Result: result
    });
}

console.table(results);
