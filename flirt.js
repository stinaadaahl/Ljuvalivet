document.getElementById("send-button").addEventListener("click", function() {
    openPopup();
});

function openPopup() {
    var popup = document.getElementById("flirtPopup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("flirtPopup");
    popup.style.display = "none";
}

function goToChat() {
    window.location.href = "chat.html";
}

function showPopup() {
    var popup = document.getElementById("flirtPopup");
    popup.style.display = "block";
}