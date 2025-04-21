function calcularTodo() {
  const objetivo = parseFloat(document.getElementById('objetivo').value);
  const tiempo = parseInt(document.getElementById('tiempo').value);
  const unidad = document.getElementById('unidad').value;
  const banco = document.getElementById('banco').value;
  const compuesto = document.getElementById('compuesto').checked;
  const ahorrado = parseFloat(document.getElementById('ahorrado').value || 0);

  // TODO: convertir tiempo a días
  // TODO: usar tasa del banco
  // TODO: calcular aportes
  // TODO: mostrar resultados en <pre>resultado
  // TODO: dibujar gráfico

  document.getElementById('resultado').textContent = 'Cálculo pendiente de implementar...';
}

// Traer cotización del dólar del BROU
fetch('https://cotizaciones-brou.herokuapp.com/api/currency/latest')
  .then(res => res.json())
  .then(data => {
    const dolar = data.rates.find(r => r.name === 'USD')?.sell || 'N/D';
    document.getElementById('dolar').textContent = dolar;
  })
  .catch(() => {
    document.getElementById('dolar').textContent = 'Error';
  });
