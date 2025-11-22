import cipher from './cipher.js';
import { allowedAlphabet } from './utils.js'

console.log(cipher);

/* ------------ Atrapando los elementos ------------ */
const inputElement = document.getElementById("translateText");
const shiftElement = document.getElementById("shift");
const outputElement = document.getElementById("resultText");
const executeBtn = document.getElementById("encodeBtn");
const operationSelect = document.getElementById("operationSelect");


executeBtn.addEventListener("click", () => {
    const userText = inputElement.value;
    const selectedOperation = operationSelect.value;
    
    // Limpiar el resultado anterior
    outputElement.value = "";

    // 1. 🚀 REQUERIMIENTO: "Mover" un valor
    if (selectedOperation === "move") {
        if (!userText) return alert("Debes ingresar un texto para mover.");
        outputElement.value = userText;
        inputElement.value = ""; // Vacia la caja de texto 1
        return;
    }

    // El resto de operaciones requieren un texto de entrada
    if (!userText) return alert("Debes ingresar un texto para codificar/convertir.");

    // 2. REQUERIMIENTO: "Convertir" a ASCII (solo la primera letra)
    if (selectedOperation === "ascii") {
        outputElement.value = cipher.getAsciiCode(userText, shiftElement.value);
        return;
    }
    
    // Validación para operaciones de CIFRADO
    const validatingAlphabet = (char) => allowedAlphabet.includes(char);
    if (![...userText.toUpperCase()].every(validatingAlphabet)) {
        return alert("Solo es válido para el abecedario: " + allowedAlphabet.join(","));
    }

    // 3. REQUERIMIENTO: "Cifrar" con desplazamiento de 3
    if (selectedOperation === "cipher") {
        // Cifrado con offset fijo de 3
        outputElement.value = cipher.encode(userText.toUpperCase());
        return;
    }

    // 4. REQUERIMIENTO: "Cifrar" con desplazamiento de 30 (o valor de input)
    if (selectedOperation === "cipher_30") {
        // Usamos 30 como desplazamiento fijo para el ejemplo, o podrías usar el valor del input:
        // const shiftQuantity = shiftElement.value; 
        // const numericShift = parseInt(shiftQuantity) || 30; // Usar 30 por defecto si está vacío
        
        // Usamos el desplazamiento de 30 para el ejemplo solicitado:
        outputElement.value = cipher.encode(userText.toUpperCase(), 30);
        return;
    }
});