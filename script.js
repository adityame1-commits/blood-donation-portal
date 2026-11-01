
let form = document.getElementById("donorForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value;
    let blood = document.getElementById("blood").value;
    let phone = document.getElementById("phone").value.trim();
    let location = document.getElementById("location").value.trim();

    let message = document.getElementById("message");

    // Check name
    if (name === "") {
        message.style.color = "red";
        message.innerText = "Please enter your name.";
        return;
    }

    // Check age
    if (age < 18 || age > 65) {
        message.style.color = "red";
        message.innerText = "Age must be between 18 and 65.";
        return;
    }

    // Check blood group
    if (blood === "") {
        message.style.color = "red";
        message.innerText = "Please select your blood group.";
        return;
    }

    // Check phone number
    if (!/^[0-9]{10}$/.test(phone)) {
        message.style.color = "red";
        message.innerText = "Please enter a valid 10-digit phone number.";
        return;
    }

    // Check location
    if (location === "") {
        message.style.color = "red";
        message.innerText = "Please enter your location.";
        return;
    }

    // Registration successful
    message.style.color = "green";

    message.innerText = "Registration successful! Thank you, " + name +
        ". You have registered as a blood donor.";

    form.reset();

});
