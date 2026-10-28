
let count = 0;

function increment() {
    count++;
    console.log(`Count after increment: ${count}`);

    function showCount() {
        console.log(`Current count inside nested function: ${count}`);
    }

    showCount();
}

function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

increment();
increment();
decrement();
decrement();
