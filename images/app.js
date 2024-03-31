const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Function to handle form submission and redirection
function handleLogin() {
    // Check the username and password (you can add validation here)
    // For demonstration purposes, let's assume the login is successful
    
    // Redirect to the sdashboard page
    window.location.href = 'Sdashboard.html';
}

// Event listener for switching to sign-up mode
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

// Event listener for switching to sign-in mode
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    handleLogin();
});