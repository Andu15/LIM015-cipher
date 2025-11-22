import { allowedAlphabet } from './utils.js'

const ALPHABET_LENGTH = allowedAlphabet.length;

const cipher = {
  encode: (text) => {
    let result = "";

    for (let char of text) {
      const upperChar = char.toUpperCase();

      // 1. Encontrar la posición (índice) de la letra
      const charIndex = allowedAlphabet.indexOf(upperChar);

      // 2. Aplicar la circularidad (aritmética modular)
      const newIndex = (charIndex + shift) % ALPHABET_LENGTH;

      // 3. Obtener la nueva letra
      const encodedChar = allowedAlphabet[newIndex];
      result += encodedChar;
    }

    return result;
  },
  getAsciiCode: (text, offset) => {
    let result = "";

    for (let char of text) {
      const asciiCode = Number(char.charCodeAt(0));
      const newCode = asciiCode + Number(offset);
      const formatCode = newCode.toString();
      result += formatCode;
    }
    
    return result;
  }
};

export default cipher;
