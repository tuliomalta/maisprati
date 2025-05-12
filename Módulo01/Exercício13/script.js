let nums13 = [];
document.getElementById('add13').addEventListener('click', () => {
  const v = parseFloat(document.getElementById('num13').value);
  if (v === 0) {
    document.getElementById('out13').textContent = 'Entrada encerrada. Clique em Calcular Média.';
  } else if (!isNaN(v)) {
    nums13.push(v);
  }
  document.getElementById('num13').value = '';
});

document.getElementById('calc13').addEventListener('click', () => {
  if (nums13.length === 0) return document.getElementById('out13').textContent = 'Nenhum número válido inserido.';
  const soma = nums13.reduce((a,b) => a + b, 0);
  const media = soma / nums13.length;
  document.getElementById('out13').textContent = `Média: ${media.toFixed(2)}`;
});