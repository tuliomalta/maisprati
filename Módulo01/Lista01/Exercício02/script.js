const btn2 = document.getElementById('classificar');
btn2.addEventListener('click', () => {
  const age = parseInt(document.getElementById('idade').value, 10);
  const out = document.getElementById('saida');
  if (isNaN(age) || age < 0) {
    out.textContent = 'Por favor, insira uma idade válida.';
    return;
  }
  let categoria;
  if (age < 12) categoria = 'Criança';
  else if (age < 18) categoria = 'Adolescente';
  else if (age < 60) categoria = 'Adulto';
  else categoria = 'Idoso';
  out.textContent = `Categoria: ${categoria}`;
});