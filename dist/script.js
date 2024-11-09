"use strict";
// script.ts
// TypeScript version of the greetUser function
function greetUser() {
    alert("Thank you for viewing my resume!");
}
document.addEventListener("DOMContentLoaded", function () {
    var greetButton = document.getElementById("greetButton");
    if (greetButton) {
        greetButton.addEventListener("click", greetUser);
    }
});
