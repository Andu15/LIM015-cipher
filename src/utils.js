export const allowedAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Validación
export const validateInput = (text) => {
    if (!text || !text.length || text == null) {
      throw new TypeError("Debes ingresar un texto");
    }

    if (!isNaN(text)) {
      throw new TypeError("No puedes ingresar números");
    }
}

export const validateTypes = (offset, text) => {
    if (typeof offset !== "number") {
      throw new TypeError("El desplazamiento debe ser un número");
    }

    if (typeof text !== "string") {
      throw new TypeError("El input debe ser un texto");
    }
}