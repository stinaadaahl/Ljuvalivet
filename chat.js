document.getElementById("send-button").addEventListener("click", function() {
    sendMessage();
});

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var messageText = messageInput.value;
    var chatMessages = document.getElementById("chat-messages");

    if (messageText.trim() !== "") {
        var messageElement = document.createElement("div");
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);

        messageInput.value = "";
    }
}

var video = document.querySelector('video');
video.addEventListener('ended', function () {
    video.currentTime = 0;
    video.play();
});