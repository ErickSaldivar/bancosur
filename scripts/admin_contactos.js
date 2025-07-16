function cargarContactos(filtrados = null) {
    const datos = localStorage.getItem('contactos');
    const contactos = filtrados ?? (datos ? JSON.parse(datos) : []);
    const tablaDiv = document.getElementById('tabla');

    if (contactos.length === 0) {
      tablaDiv.innerHTML = '<p>No hay contactos registrados.</p>';
      return;
    }

    let html = `<table><thead><tr>
      <th>Atendido</th>
      <th>Importante</th>
      <th>Nombre</th>
      <th>Email</th>
      <th>Mensaje</th>
    </tr></thead><tbody>`;

    contactos.forEach((c, index) => {
      html += `<tr>
        <td><input type="checkbox" class="check-contacto" data-index="${index}"></td>
        <td><input type="checkbox" class="check-importante" data-index="${index}" ${c.importante ? 'checked' : ''}></td>
        <td>${c.nombre}</td>
        <td>${c.email}</td>
        <td><textarea class="mensaje-editable" data-index="${index}">${c.mensaje}</textarea></td>
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

function buscarContactos() {
    const nombreBuscado = document.getElementById('busquedaNombre').value.trim().toLowerCase();
    const datos = localStorage.getItem('contactos');
    const contactos = datos ? JSON.parse(datos) : [];

    const filtrados = contactos.filter(c => c.nombre.toLowerCase().includes(nombreBuscado));

    if (filtrados.length === 0) {
        alert('No se encontraron contactos con ese nombre.');
    }

    cargarContactos(filtrados);
}

function guardarCambios() {
    const datos = localStorage.getItem('contactos');
    let contactos = datos ? JSON.parse(datos) : [];

    const mensajesEditables = document.querySelectorAll('.mensaje-editable');
    const importantes = document.querySelectorAll('.check-importante');

    mensajesEditables.forEach(textarea => {
      const index = parseInt(textarea.getAttribute('data-index'));
      contactos[index].mensaje = textarea.value.trim();
    });

    importantes.forEach(checkbox => {
      const index = parseInt(checkbox.getAttribute('data-index'));
      contactos[index].importante = checkbox.checked;
    });

    localStorage.setItem('contactos', JSON.stringify(contactos));
    alert('✅ Cambios guardados.');
    cargarContactos();
}

function cargarBienvenida() {
    const admin = localStorage.getItem('adminUsuario') || 'Erick';
    document.getElementById('bienvenida').textContent = `Bienvenido ${admin}`;
}

// Inicializar
cargarBienvenida();
cargarContactos();
