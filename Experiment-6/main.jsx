let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 16;

document.getElementById("changeheading").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

document.getElementById("changebackground").onclick = function () {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
};

document.getElementById("increasefontsize").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});

document.getElementById("showhideparagraph").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

document.getElementById("reset").addEventListener("click", function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    paragraph.style.display = "block";
    paragraph.style.fontSize = "16px";
    document.body.style.backgroundColor = "#f4f4f4";
    input.value = "";
    fontSize = 16;
});