const btn3 = document.getElementById('avaliar');
btn3.addEventListener('click', () => {
  const n = parseFloat(document.getElementById('nota').value);
  const out = document.getElementById('status');
  if (isNaN(n) || n < 0 || n > 10) {
    out.textContent = 'Insira uma nota entre 0 e 10.';
    return;
  }
  let resp;
  if (n >= 7) resp = 'Aprovado';
  else if (n >= 5) resp = 'Recuperação';
  else resp = 'Reprovado';
  out.textContent = resp;
});