document.getElementById('go14').addEventListener('click', () => {
  const n = parseInt(document.getElementById('num14').value, 10);
  if (isNaN(n) || n < 0) return document.getElementById('out14').textContent = 'Valor inválido.';
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  document.getElementById('out14').textContent = `${n}! = ${f}`;
});