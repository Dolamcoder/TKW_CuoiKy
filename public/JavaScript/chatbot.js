document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".chat-footer input");
    const sendBtn = document.querySelector(".chat-footer .btn");
    const chatBody = document.querySelector(".chat-body");


    function appendMessage(message, sender) {
        const messageEl = document.createElement("div");
        messageEl.classList.add("message", `${sender}-message`);
        const avatar = document.createElement("div");
        avatar.classList.add("avatar");
        if (sender === "bot") {
            avatar.innerHTML = '<i class="fas fa-robot"></i>'; // Icon robot
        } else {
            avatar.innerHTML = '<i class="fas fa-user"></i>'; // Icon người dùng
        }
        const content = document.createElement("div");
        content.classList.add("content");

        // Cho bot render HTML
        if (sender === "bot") {
            content.innerHTML = message;
        } else {
            content.textContent = message;
        }

        if (sender === "bot") {
            messageEl.appendChild(avatar);
            messageEl.appendChild(content);
        } else {
            messageEl.appendChild(content);
        }

        chatBody.appendChild(messageEl);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
    function sendMessage() {
        const message = input.value.trim();
        if (message !== "") {
            appendMessage(message, "user");
            input.value = "";

            // Bot response giả lập
            setTimeout(() => {
                const lowerMessage = message.toLowerCase();
                let botReply;
                if (lowerMessage.includes("danh sách chuyên gia") || lowerMessage.includes("danh sách")) {
                    botReply = botReply = '<p>Bạn cần tư vấn chuyên gia trực tiếp? 👉 <a href="/Giangvien">Xem danh sách chuyên gia tại đây</a></p>';
                } else {
                    botReply = "Bạn vừa nói: " + message;
                }

                appendMessage(botReply, "bot");
            }, 500);
        }
    }
    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
