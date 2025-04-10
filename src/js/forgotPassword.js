// Inicializa EmailJS con tu User ID
emailjs.init("dTvq1insZzLgAyB4c");  // Reemplaza con tu User ID de EmailJS

// Maneja el evento de submit del formulario
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('forgotEmail').value;

    // Validar que el campo no esté vacío
    if (!email) {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
    }

    // Crear el mensaje que será enviado
    const templateParams = {
        email: email,
        message: "Haz clic en el siguiente enlace para restablecer tu contraseña."
    };

    // Enviar el correo a través de EmailJS
    emailjs.send('service_84s3x95', 'template_id', templateParams)
        .then(function(response) {
            console.log('Correo enviado exitosamente:', response);
            alert('Te hemos enviado un enlace para restablecer tu contraseña. Revisa tu correo.');
        }, function(error) {
            console.error('Error al enviar el correo:', error);
            alert('Hubo un error al enviar el correo. Por favor, intenta nuevamente más tarde.');
        });
});
