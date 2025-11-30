import cipher from './cipher.js';

/* ------------ Atrapando los elementos ------------ */
const inputElement = document.getElementById("translateText");
const shiftElement = document.getElementById("shift");
const outputElement = document.getElementById("resultText");
const executeBtn = document.getElementById("encodeBtn");
const operationSelect = document.getElementById("operationSelect");


executeBtn.addEventListener("click", () => {
    const userText = inputElement.value;
    const offset = Number(shiftElement.value);
    const selectedOperation = operationSelect.value;

    let result = null;

    switch (selectedOperation) {
        case "encode":
                result = cipher.encode(offset, userText);
            break;
        case "decode":
                result = cipher.decode(offset, userText);
            break;
        default:
                alert("Opción no permitida");
            break;
    }

    outputElement.value = result;
});