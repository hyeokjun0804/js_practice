const form = document.getElementById('loginForm');
// Login form submission (only on login page)
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validate the input
        const usernamePattern = /^[A-Za-z0-9]{3,}$/;
        const passwordPattern = /^[A-Za-z0-9]{4,}$/;

        if (usernamePattern.test(username) && passwordPattern.test(password)) {
            alert('로그인 성공');
            localStorage.setItem('loggedIn', true); // Store login state
            window.location.href = 'index.html'; // Redirect to index.html after successful login
        } else {
            alert('유효하지 않은 입력입니다. 사용자명은 3자 이상, 비밀번호는 4자 이상이어야 합니다.');
        }
    });
}





