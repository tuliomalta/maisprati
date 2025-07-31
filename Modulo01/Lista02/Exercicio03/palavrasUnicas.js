function palavrasUnicas(str) {
  const palavras = str.split(' ');
  const unicas = [];
  for (let i = 0; i < palavras.length; i++) {
    if (palavras.indexOf(palavras[i]) === palavras.lastIndexOf(palavras[i])) {
      unicas.push(palavras[i]);
    }
  }
  return unicas;
}

console.log(palavrasUnicas("olá mundo olá planeta"));
