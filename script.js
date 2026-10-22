// Número oficial de Buck's Western Shop (614 108 3466)
const TELEFONO_WHATSAPP = "526141083466";

// Selección de producto desde el catálogo
function consultarProducto(nombreCategoria) {
    const selectCategoria = document.getElementById("categoria");
    selectCategoria.value = nombreCategoria;
    
    // Scroll suave al formulario
    document.getElementById("contacto").scrollIntoView({ behavior: 'smooth' });
}

// Envío del formulario a WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const consulta = document.getElementById("mensaje").value;

    // Mensaje formateado formal y limpio
    const mensaje = `Hola Buck's Western Shop.%0A%0AMi nombre es *${nombre}*.%0AEstoy interesado en la categoría: *${categoria}*.%0A%0A*Consulta:* ${consulta}%0A%0AQuedo atento a su respuesta, gracias.`;

    const url = `https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`;
    window.open(url, "_blank");
});