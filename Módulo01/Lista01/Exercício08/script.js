const btn8 = document.getElementById('ord');
btn8.addEventListener('click', () => {
  let a = parseFloat(document.getElementById('v1').value);
  let b = parseFloat(document.getElementById('v2').value);
  if (isNaN(a) || isNaN(b)) {
    document.getElementById('out8').textContent = 'Valores inválidos.';
    return;
  }
  if (a > b) [a, b] = [b, a];
  document.getElementById('out8').textContent = `${a}, ${b}`;
});