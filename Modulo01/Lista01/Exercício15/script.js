let a = 0, b = 1;
let saída = '';
for (let i = 1; i <= 10; i++) {
  saída += a + '\n';
  [a, b] = [b, a + b];
}
document.getElementById('out15').textContent = saída;