function sendMessage() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value;

    if (userMessage.trim() === "") return;

    // 사용자 메시지 추가
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "user-message";
    userMessageElement.innerText = userMessage;
    chatBox.appendChild(userMessageElement);

    // 챗봇 응답 추가 (간단한 응답 예시)
    setTimeout(() => {
        const botMessageElement = document.createElement("div");
        botMessageElement.className = "bot-message";
        botMessageElement.innerText = "챗봇이 응답합니다: " + userMessage;
        chatBox.appendChild(botMessageElement);

        // 채팅창이 자동으로 아래로 스크롤
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    // 입력 필드 초기화
    userInput.value = "";
}
