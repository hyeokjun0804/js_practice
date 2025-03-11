document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // 폼의 기본 제출 동작을 방지

        const username = form.username.value;
        const password = form.password.value;

        // 클라이언트 측 유효성 검사
        if (!username || !password) {
            errorMessage.textContent = 'Username and Password are required.';
            return;
        }

        try {
            // 서버에 로그인 요청 보내기
            const response = await fetch('https://your-server-endpoint/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();

            if (response.ok) {
                // 로그인 성공 시 리다이렉트 또는 다른 동작
                window.location.href = 'index.html'; // 성공 시 이동할 페이지
            } else {
                // 로그인 실패 시 에러 메시지 표시
                errorMessage.textContent = result.message || 'Login failed. Please try again.';
            }
        } catch (error) {
            // 네트워크 에러 등 처리
            errorMessage.textContent = 'An error occurred. Please try again.';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // 폼의 기본 제출 동작을 방지

        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        // 클라이언트 측 유효성 검사
        if (!username || !email || !password) {
            errorMessage.textContent = 'All fields are required.';
            return;
        }

        try {
            // 서버에 회원가입 요청 보내기
            const response = await fetch('https://your-server-endpoint/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            const result = await response.json();

            if (response.ok) {
                // 회원가입 성공 시 리다이렉트 또는 다른 동작
                window.location.href = '/login'; // 성공 시 로그인 페이지로 이동
            } else {
                // 회원가입 실패 시 에러 메시지 표시
                errorMessage.textContent = result.message || 'Signup failed. Please try again.';
            }
        } catch (error) {
            // 네트워크 에러 등 처리
            errorMessage.textContent = 'An error occurred. Please try again.';
        }
    });
});

