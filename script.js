const formulario =
    document.getElementById("formularioCita");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value;

    const servicio =
        document.getElementById("servicio").value;

    const fecha =
        document.getElementById("fecha").value;

    const hora =
        document.getElementById("hora").value;


    console.log("Nueva cita");

    console.log("Nombre:", nombre);

    console.log("Servicio:", servicio);

    console.log("Fecha:", fecha);

    console.log("Hora:", hora);


    document.getElementById("mensaje").textContent =
        "✓ Solicitud recibida";

});