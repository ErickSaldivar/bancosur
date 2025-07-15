//Base de datos local (simulado) - backend
//Usa el LocalStorage -> para ver ir f12 -> pestaña Application -> Local Storage
const contactoDB = {
  obtenerContactos: function() {
    const datos = localStorage.getItem('contactos');
    return datos ? JSON.parse(datos) : [];
  },
  guardarContacto: function(contacto) {
    const contactos = this.obtenerContactos();
    contactos.push(contacto);
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }
};

// Script para manejar el formulario
// Selecciona el item #contact del formulario y ejecuta este script
const formulario = document.querySelector('#contact form');
// Escucha el evennto cuando se presiona el boton.
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar recarga

  const nombre = formulario.nombre.value.trim();
  const email = formulario.email.value.trim();
  const mensaje = formulario.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor complete todos los campos.');
    return;
  }

  const contacto = { nombre, email, mensaje };
  contactoDB.guardarContacto(contacto);

  alert('✅ Mensaje enviado. ¡Gracias por contactarnos!');

  formulario.reset();
});