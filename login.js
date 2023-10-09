document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Replace these with actual admin credentials
        const adminUsername = 'admin';
        const adminPassword = 'password';

        // Get user input
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Check if the entered credentials are correct
        if (usernameInput === adminUsername && passwordInput === adminPassword) {
            // Redirect to the admin's index.html page (replace with actual URL)
            window.location.href = 'owner.html';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});
