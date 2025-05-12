const btn7 = document.getElementById('calc7');
btn7.addEventListener('click', () => {
  const n = parseInt(document.getElementById('qtd').value, 10);
  const out7 = document.getElementById('preco');
  if (isNaN(n) || n < 0) {
    out7.textContent = 'Quantidade inválida.';
    return;
  }
  const preco = n < 12 ? n * 0.30 : n * 0.25;
  out7.textContent = `Total: R$ ${preco.toFixed(2)}`;
});