const buttons = document.querySelectorAll('button');
const out4 = document.getElementById('out');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    switch (btn.dataset.op) {
      case '1': out4.textContent = 'Você selecionou a Opção 1.'; break;
      case '2': out4.textContent = 'Você selecionou a Opção 2.'; break;
      case '3': out4.textContent = 'Você selecionou a Opção 3.'; break;
      default: out4.textContent = 'Opção inválida.';
    }
  });
});