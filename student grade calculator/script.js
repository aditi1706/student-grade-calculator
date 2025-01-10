// Get the registration link and forms
const registerLink = document.querySelector('#register');
// const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');

// Add event listener to the registration link
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Toggle forms
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});


// Get the login link
const loginLink = document.querySelector('#loginLink');

// Add event listener to the login link
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Toggle forms
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});