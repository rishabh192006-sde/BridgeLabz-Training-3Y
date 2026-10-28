
const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seatsValue = document.getElementById("seats").value;
    const seats = Number(seatsValue);

    const validName = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validSeats = /^\d+$/.test(seatsValue) && seats >= 1 && seats <= 10;

    document.getElementById("nameError").textContent =
        validName ? "" : "Name must contain alphabets only.";

    document.getElementById("emailError").textContent =
        validEmail ? "" : "Enter a valid email address.";

    document.getElementById("seatsError").textContent =
        validSeats ? "" : "Seats must be between 1 and 10.";

    if (validName && validEmail && validSeats) {
        const booking = {
            name: name,
            email: email,
            seats: seats
        };

        document.getElementById("ticket").textContent =
            `Booking Confirmed\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
    } else {
        document.getElementById("ticket").textContent =
            "Please correct the errors above.";
    }
});
