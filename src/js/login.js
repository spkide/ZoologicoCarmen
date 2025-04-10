document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Verificar si el usuario existe (simulado aquí con datos guardados en el localStorage)
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Inicio de sesión exitoso');
        if (rememberMe) {
            localStorage.setItem('rememberMe', JSON.stringify({ email }));
        }
        window.location.href = 'dashboard.html';  // Redirigir a un panel de usuario o inicio
    } else {
        alert('Correo o contraseña incorrectos');
    }
});

document.getElementById('forgotPassword').addEventListener('click', function() {
    const email = prompt('Ingresa tu correo electrónico para restablecer la contraseña:');
    if (email) {
        // Aquí se puede integrar con una API para enviar el correo de recuperación.
        alert('Se ha enviado un enlace de restablecimiento de contraseña a ' + email);
    }
});
