const formulario = document.getElementById("formularioCita");

formulario.addEventListener("submit", async function(event) {

    // Evita que la página se recargue antes de enviar la cita
    event.preventDefault();

    // Obtenemos los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    // Creamos la cita
    const cita = {
        nombre: nombre,
        servicio: servicio,
        fecha: fecha,
        hora: hora
    };

    try {

        // Enviamos los datos a Make
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

        if (respuesta.ok) {

            // Mostramos que la cita se envió correctamente
            document.getElementById("mensaje").textContent =
                "✓ Cita enviada correctamente";

            // Limpiamos los campos
            formulario.reset();

            // Esperamos 2 segundos y recargamos la página
            setTimeout(function() {
                window.location.reload();
            }, 2000);

        } else {

            document.getElementById("mensaje").textContent =
                "Hubo un problema al reservar.";

        }

    } catch (error) {

        document.getElementById("mensaje").textContent =
            "No se pudo conectar con el sistema.";

        console.error("Error:", error);
    }

});


   