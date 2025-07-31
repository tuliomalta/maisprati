const btn1 = document.getElementById('verificar');
btn1.addEventListener('click', () => {
  const num = parseInt(document.getElementById('numero').value, 10);
  const res = document.getElementById('resultado');
  if (isNaN(num)) {
    res.textContent = 'Por favor, insira um número válido.';
  } else if (num % 2 === 0) {
    res.textContent = `${num} é par.`;
  } else {
    res.textContent = `${num} é ímpar.`;
  }
});