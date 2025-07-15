function cotizar() {
      const cantidad = parseFloat(document.getElementById('cantidad').value);
      const divisa = document.getElementById('divisa').value;
      const resultado = document.getElementById('resultado');

      if (isNaN(cantidad) || cantidad <= 0) {
        resultado.innerHTML = '<p>Por favor ingrese un monto válido.</p>';
        return;
      }

      let tasa = 0;
      let nombreDivisa = '';

      switch (divisa) {
        case 'usd':
          tasa = 0.27;
          nombreDivisa = 'Dólares (USD)';
          break;
        case 'eur':
          tasa = 0.25;
          nombreDivisa = 'Euros (EUR)';
          break;
        case 'gbp':
          tasa = 0.21;
          nombreDivisa = 'Libras Esterlinas (GBP)';
          break;
        default:
          resultado.innerHTML = '<p>Seleccione una divisa válida.</p>';
          return;
      }

      const total = cantidad * tasa;
      resultado.innerHTML = `<p>${cantidad} Soles equivale a <strong>${total.toFixed(2)} ${nombreDivisa}</strong>.</p>`;
    }