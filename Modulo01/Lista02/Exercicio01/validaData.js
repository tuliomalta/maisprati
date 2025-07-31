function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;
  const diasMes = [31, (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return dia <= diasMes[mes - 1];
}

console.log(ehDataValida(29, 2, 2024));
console.log(ehDataValida(31, 4, 2023));
