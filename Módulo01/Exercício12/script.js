document.getElementById('go12').addEventListener('click', () => {
  const n = parseInt(document.getElementById('tab').value, 10);
  let out = '';
  for (let i = 1; i <= 10; i++) {
    out += `${n} x ${i} = ${n * i}\n`;
  }
  document.getElementById('out12').textContent = out;
});