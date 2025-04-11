<?php
if (isset($_GET['email'])) {
    $email = $_GET['email'];
    
    // Verificar si el correo existe en el archivo JSON
    $file = 'users.json';
    $data = json_decode(file_get_contents($file), true);

    foreach ($data as $user) {
        if ($user['email'] == $email) {
            echo "Cuenta activada con éxito. ¡Bienvenido!";
            // Aquí podrías cambiar el estado del usuario a "activo" en el JSON o base de datos
            exit();
        }
    }

    echo "No se encontró ese correo en nuestro registro.";
}
?>
