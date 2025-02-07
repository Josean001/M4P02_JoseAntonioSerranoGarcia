function guardarEnLocalStorage() {
    let clave = "M4_UD02_P02";
    let valor = "José Antonio Serrano García";
    
    if (localStorage.getItem(clave) === null) {
        localStorage.setItem(clave, valor);
        alert("Dato almacenado en localStorage.");
    } else {
        alert("Error: El dato ya existe en localStorage.");
    }
}

function guardarEnSessionStorage() {
    let clave = "Date";
    let valor = Date.now();
    sessionStorage.setItem(clave, valor);
    alert("Fecha almacenada en sessionStorage.");
}

function mostrarDatos() {
    let localData = localStorage.getItem("M4_UD02_P02") || "No hay datos en localStorage";
    let sessionData = sessionStorage.getItem("Date") || "No hay datos en sessionStorage";
    
    alert(`localStorage: ${localData}\nsessionStorage: ${sessionData}`);
}