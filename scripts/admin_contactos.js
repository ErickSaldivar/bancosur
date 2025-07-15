//carga contactos de LocalStorage

function cargarContactos() {
    const datos = localStorage.getItem('contactos');
    const contactos = datos ? JSON.parse(datos) : [];
    const tablaDiv = document.getElementById('tabla');

    if (contactos.length === 0) {
      tablaDiv.innerHTML = '<p>No hay contactos registrados.</p>';
      return;
    }

    let html = `<table><thead><tr><th>Atendido</th><th>Nombre</th><th>Email</th><th>Mensaje</th></tr></thead><tbody>`;
    contactos.forEach((c, index) => {
      html += `<tr>
        <td><input type="checkbox" class="check-contacto" data-index="${index}"></td>
        <td>${c.nombre}</td>
        <td>${c.email}</td>
        <td>${c.mensaje}</td>
      </tr>`;
    });
    html += '</tbody></table>';

    tablaDiv.innerHTML = html;
  }

  function limpiarContactosSeleccionados() {
    const datos = localStorage.getItem('contactos');
    let contactos = datos ? JSON.parse(datos) : [];

    const checkboxes = document.querySelectorAll('.check-contacto');
    const indicesAEliminar = [];

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        indicesAEliminar.push(parseInt(checkbox.getAttribute('data-index')));
      }
    });

    if (indicesAEliminar.length === 0) {
      alert('Seleccione al menos un contacto para eliminar.');
      return;
    }

    contactos = contactos.filter((_, index) => !indicesAEliminar.includes(index));
    localStorage.setItem('contactos', JSON.stringify(contactos));
    cargarContactos();
  }

  function cargarBienvenida() {
    const admin = localStorage.getItem('adminUsuario') || 'Erick';
    document.getElementById('bienvenida').textContent = `Bienvenido ${admin}`;
  }

  // Inicializar
  cargarBienvenida();
  cargarContactos();