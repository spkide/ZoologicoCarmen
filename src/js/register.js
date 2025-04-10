document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Crear un objeto de usuario
    const newUser = {
        email: email,
        password: password
    };

    // Guardar el usuario en el localStorage
    localStorage.setItem('user', JSON.stringify(newUser));

    alert('Registro exitoso, ahora puedes iniciar sesión');
    window.location.href = 'login.html';  // Redirigir a la página de inicio de sesión
});
