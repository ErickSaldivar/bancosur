function evaluarPrestamo() {
      const nombre = document.getElementById('nombre').value.trim();
      const monto = parseFloat(document.getElementById('monto').value);
      const resultado = document.getElementById('resultado');

      if (!nombre || isNaN(monto) || monto <= 0) {
        resultado.innerHTML = '<p>Por favor ingrese datos válidos.</p>';
        return;
      }

      // Simulación de evaluación
      // Probabilidad del 70% de ser aprobado
      const aprobado = Math.random() < 0.7;
      const pagar = monto * 1.2; // Monto a pagar con un interés del 20%

      let mensaje = '';

      if (aprobado) {
        mensaje = `<p>✅ Felicitaciones <strong>${nombre}</strong>, su préstamo de <strong>${monto.toFixed(2)} soles</strong> ha sido <strong>APROBADO</strong> con una taza de interes del 20%; total a pagar <strong>${pagar.toFixed(2)} soles.</strong>.</p>`;
      } else {
        mensaje = `<p>❌ Lo sentimos <strong>${nombre}</strong>, su solicitud de préstamo <strong>NO ha sido aprobada</strong>. Puede intentarlo más tarde.</p>`;
      }

      resultado.innerHTML = mensaje;
}