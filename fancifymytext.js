function biggerText() {
    alert("Hello, world!");
    let userText = document.getElementById("userText");
    userText.style.fontSize = "24pt";
}

function updateStyles() {
    let userText = document.getElementById("userText");
    let fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        userText.style.fontWeight = "bold";
        userText.style.color = "blue";
        userText.style.textDecoration = "underline";
    } else {
        userText.style.fontWeight = "normal";
        userText.style.color = "black";
        userText.style.textDecoration = "none";
    }
}

function moo() {
    let userText = document.getElementById("userText");
    let text = userText.value.toUpperCase();
    let sentences = text.split(".");
    sentences = sentences.map(sentence => sentence.trim() + "-Moo");
    userText.value = sentences.join(". ");
}