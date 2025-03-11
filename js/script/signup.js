document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;

        // 유효성 검사 추가
        const usernamePattern = /^[A-Za-z0-9]{3,}$/;
        const passwordPattern = /^[A-Za-z0-9]{4,}$/;

        if (!usernamePattern.test(username)) {
            alert('사용자명은 3자 이상이어야 합니다.');
            return;
        }

        if (!passwordPattern.test(password)) {
            alert('비밀번호는 4자 이상이어야 합니다.');
            return;
        }

        if (password !== password2) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        alert('회원가입 성공');
        // 회원가입 성공 시 index.html로 이동
        window.location.href = 'login.html'; // 리다이렉트
    });
});




