document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificamos que el usuario exista en localStorage (simulando un registro previo)
    const storedUser = JSON.parse(localStorage.getItem('usuario'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Inicio de sesión exitoso');
        // Redirigir a index.html
        window.location.href = 'index.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
});
