import { validateInput, validateTypes } from './utils.js';

const cipher = {
  encode: (offset, text) => {
    // Validación
    validateTypes(offset, text);
    validateInput(text);

    let result = "";

    for (let char of text) {
      const ascii = char.charCodeAt(0);

      // MAYÚSCULAS A-Z
      if (ascii >= 65 && ascii <= 90) {
        const newAscii = ((ascii - 65 + offset) % 26) + 65;
        result += String.fromCharCode(newAscii);
      // MINÚSCULAS a-z
      } else if (ascii >= 97 && ascii <= 122) {
        const newAscii = ((ascii - 97 + offset) % 26) + 97;
        result += String.fromCharCode(newAscii);
      // Otros caracteres NO se modifican
      } else {
        result += char;
      }
    }

    return result;
  },
  decode: (offset, text) => {
    // Validación
    validateTypes(offset, text);
    validateInput(text);

    let result = "";

    for (let char of text) {
      const ascii = char.charCodeAt(0);

      // MAYÚSCULAS A-Z
      if (ascii >= 65 && ascii <= 90) {
        const newAscii = ((ascii - 65 - offset) % 26 + 26) % 26 + 65;
        result += String.fromCharCode(newAscii);

      // MINÚSCULAS a-z
      } else if (ascii >= 97 && ascii <= 122) {
        const newAscii = ((ascii - 97 - offset) % 26 + 26) % 26 + 97;
        result += String.fromCharCode(newAscii);

      // Otros caracteres NO se modifican
      } else {
        result += char;
      }
    }

    return result;
  }
};

export default cipher;
