
const formulario = document.getElementById("formularioCita");

formulario.addEventListener("submit", async function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    const cita = {
        nombre: nombre,
        servicio: servicio,
        fecha: fecha,
        hora: hora
    };

    const mensaje = document.getElementById("mensaje");

    try {

        const respuesta = await fetch(
            "https://hook.us2.make.com/ircggvlpw9ciwmy4bak9n6fu55qr7o6q",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cita)
            }
        );

        const resultado = await respuesta.json();

        if (respuesta.ok && resultado.success === true) {

            mensaje.textContent = "✓ Cita reservada correctamente";

            formulario.reset();

        } else if (respuesta.status === 409) {

            mensaje.textContent =
                "⚠ Este horario ya está reservado. Selecciona otro.";

        } else {

            mensaje.textContent =
                "Hubo un problema al reservar. Intenta nuevamente.";

        }

    } catch (error) {

        mensaje.textContent =
            "No se pudo conectar con el sistema.";

        console.error("Error:", error);

    }

});
