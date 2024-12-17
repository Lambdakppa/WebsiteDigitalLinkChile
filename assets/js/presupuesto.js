document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Aquí puedes enviar los datos a tu servidor o procesarlos como necesites
        console.log('Datos del formulario:', data);

        alert('Solicitud enviada con éxito.');
        form.reset();
    });
});