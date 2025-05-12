const container11 = document.getElementById('inputs11');
for (let i = 1; i <= 5; i++) {
  const inp = document.createElement('input');
  inp.type = 'number'; inp.id = 'n' + i;
  inp.placeholder = `Número ${i}`;
  container11.appendChild(inp);
}
document.getElementById('sum11').addEventListener('click', () => {
  let soma = 0;
  for (let i = 1; i <= 5; i++) {
    const v = parseFloat(document.getElementById('n' + i).value) || 0;
    soma += v;
  }
  document.getElementById('res11').textContent = `Soma: ${soma}`;
});