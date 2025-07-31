const btn10 = document.getElementById('run10');
btn10.addEventListener('click', () => {
  const n = document.getElementById('num10').value;
  if (!n) return;
  document.getElementById('out10').textContent = Array(10).fill(n).join('\n');
});