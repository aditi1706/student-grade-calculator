// Get the registration link and forms
const registerLink = document.querySelector('#register');
const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');
const loginLink = document.querySelector('#loginLink');
const loginButton = document.querySelector('#loginButton');

// Add event listener to the login link
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Toggle forms
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Add event listener to the registration link
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Toggle forms
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
   
    // Check if the login form is valid
    if (loginForm.checkValidity()) {
        // If valid, open Gcalculator.html in a new tab
        window.open('Gcalculator.html', '_blank');
    } else {
        // If not valid, trigger HTML5 validation messages
        loginForm.reportValidity();
    }
});