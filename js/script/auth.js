document.addEventListener('DOMContentLoaded', function() {
    const authLink = document.getElementById('authLink');

    // Check login state
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (isLoggedIn) {
        // User is logged in, show 'Logout'
        authLink.textContent = 'Logout';
        authLink.href = 'index.html';
        authLink.addEventListener('click', function(event) {
            event.preventDefault();
            // Log out the user
            localStorage.removeItem('loggedIn');
            window.location.href = 'index.html'; // Redirect to index.html after logout
        });
    } else {
        // User is not logged in, show 'Login'
        authLink.textContent = 'Login';
        authLink.href = 'login.html';
    }
});