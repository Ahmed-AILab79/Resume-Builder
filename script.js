// script.js

// Example of a simple function that shows an alert when clicking a button
function greetUser() {
    alert("Thank you for viewing my resume!");
}

// Attach the greetUser function to any button with id 'greetButton'
document.addEventListener("DOMContentLoaded", function () {
    const greetButton = document.getElementById("greetButton");
    if (greetButton) {
        greetButton.addEventListener("click", greetUser);
    }
});
