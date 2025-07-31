const btn5 = document.getElementById('calcIMC');
btn5.addEventListener('click', () => {
  const p = parseFloat(document.getElementById('peso').value);
  const h = parseFloat(document.getElementById('altura').value);
  const out5 = document.getElementById('imcOut');
  if (isNaN(p) || isNaN(h) || p <= 0 || h <= 0) {
    out5.textContent = 'Informe peso e altura válidos.';
    return;
  }
  const imc = p / (h * h);
  let cat;
  if (imc < 18.5) cat = 'Abaixo do peso';
  else if (imc < 25) cat = 'Peso normal';
  else if (imc < 30) cat = 'Sobrepeso';
  else cat = 'Obesidade';
  out5.textContent = `IMC: ${imc.toFixed(2)} — ${cat}`;
});