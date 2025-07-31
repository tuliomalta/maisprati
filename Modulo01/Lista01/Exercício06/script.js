const btn6 = document.getElementById('verTri');
btn6.addEventListener('click', () => {
  const A = parseFloat(document.getElementById('a').value);
  const B = parseFloat(document.getElementById('b').value);
  const C = parseFloat(document.getElementById('c').value);
  const out6 = document.getElementById('triOut');
  if (!(A < B + C && B < A + C && C < A + B)) {
    out6.textContent = 'Não forma triângulo.';
    return;
  }
  if (A === B && B === C) out6.textContent = 'Equilátero';
  else if (A === B || A === C || B === C) out6.textContent = 'Isósceles';
  else out6.textContent = 'Escaleno';
});