// Función para solicitar palabras por teclado
function solicitarPalabras() {
    let palabras = [];
    let cantidadPalabras = parseInt(prompt("Ingrese la cantidad de palabras que desea ingresar:"));
    for (let i = 0; i < cantidadPalabras; i++) {
        let palabra = prompt(`Ingrese la palabra ${i + 1} de ${cantidadPalabras}:`);
        if (palabra === null || palabra === "") {
            break; // Si se presiona Cancelar o se deja el campo vacío, terminar el bucle
        }
        palabras.push(palabra); // Agregar la palabra al arreglo
    }
    return palabras; // Retornar el arreglo de palabras
}

// Función expresada para encontrar la palabra mayor
let encontrarPalabraMayor = (...palabras) => {
    let palabraMayor = palabras[0]; // Se asume que la primera palabra es la mayor
    for (let palabra of palabras) {
        if (palabra.length > palabraMayor.length) {
            palabraMayor = palabra; // Si la longitud de la palabra actual es mayor, se actualiza la palabra mayor
        }
    }
    return palabraMayor; // Retornar la palabra mayor
};

// Programa principal
function programaEncontrarPalabraMayor() {
    let palabras = solicitarPalabras(); // Solicitar las palabras al usuario
    if (palabras.length === 0) {
        alert("No se ingresaron palabras. El programa ha finalizado."); // Si no se ingresaron palabras, mostrar un mensaje y terminar el programa
        return;
    }
    let palabraMayor = encontrarPalabraMayor(...palabras); // Encontrar la palabra mayor
    alert(`La palabra mayor es: "${palabraMayor}"`); // Mostrar la palabra mayor
}

// Ejecutar el programa principal
programaEncontrarPalabraMayor();