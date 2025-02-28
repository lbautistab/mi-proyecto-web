// Contador de clics
let contador = 0;
function incrementarContador() {
    contador++;
    document.getElementById("contador").innerText = `Clics: ${contador}`;
}

// Modo oscuro
document.getElementById("modoOscuro").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode", this.checked);
});

// Formulario de contacto
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    alert(`Gracias por contactarnos, ${nombre}!`);
});
