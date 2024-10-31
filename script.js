const body = document.getElementById('body');
const output = document.getElementById('output');

function green() {
    body.style.background = "green";
    output.innerHTML = `The color is: green`;
}

function red() {
    body.style.background = "red";
    output.innerHTML = `The color is: red`;
}

function blue() {
    body.style.background = "blue";
    output.innerHTML = `The color is: blue`;
}

function random() {
    const green = Math.round(Math.random() * 255);
    const red = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = randomColor;
    output.innerHTML = `The color is: ${randomColor}`;
}