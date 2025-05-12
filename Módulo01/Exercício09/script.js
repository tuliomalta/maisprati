const pre9 = document.getElementById('count9');
let text9 = '';
for (let i = 10; i >= 1; i--) {
  text9 += i + '\n';
}
pre9.textContent = text9;