document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Guardar en "JSON" (simulado en localStorage)
    const userData = { email, password };
    localStorage.setItem("usuario", JSON.stringify(userData));

    // Parámetros del email
    const templateParams = {
        to_email: email,
        subject: "Bienvenido al Zoológico del Carmen",
        message: "Gracias por registrarte. Haz clic aquí para iniciar sesión: https://tusitio.com/login.html"
    };

    emailjs.send('service_84s3x95', 'template_id', templateParams)
        .then(function (response) {
            alert('Registro exitoso. Te hemos enviado un correo con el enlace para iniciar sesión.');
            document.getElementById('registroForm').reset();
        }, function (error) {
            console.error('Error al enviar el correo:', error);
            alert('Hubo un error al enviar el correo.');
        });
});
