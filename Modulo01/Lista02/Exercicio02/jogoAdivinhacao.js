const numero = Math.floor(Math.random() * 100) + 1;
let tentativa = 0;
let palpite;

while (palpite !== numero) {
  palpite = parseInt(prompt("Adivinhe o número de 1 a 100:"));
  tentativa++;
  if (palpite < numero) alert("Mais alto!");
  else if (palpite > numero) alert("Mais baixo!");
  else alert(`Parabéns! Acertou em ${tentativa} tentativas.`);
}
