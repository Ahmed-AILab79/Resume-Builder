// script.ts

// TypeScript version of the greetUser function
function greetUser(): void {
    alert("Thank you for viewing my resume!");
}

document.addEventListener("DOMContentLoaded", () => {
    const greetButton = document.getElementById("greetButton") as HTMLButtonElement;
    if (greetButton) {
        greetButton.addEventListener("click", greetUser);
    }
});
