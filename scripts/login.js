function login() {
      const usuario = document.getElementById('usuario').value.trim();
      const clave = document.getElementById('clave').value.trim();
      const errorDiv = document.getElementById('error');

      const usuarioValido = 'admin123';
      const claveValida = '123456';

      if (usuario === usuarioValido && clave === claveValida) {
        // Redirigir a la página de administración
        window.location.href = 'admin-contactos.html';
      } else {
        errorDiv.textContent = '❌ Usuario o contraseña incorrectos.';
      }
    }