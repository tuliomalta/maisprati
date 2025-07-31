const produtos = [
  { nome: "Caneta", preco: 3 },
  { nome: "Lápis", preco: 1 },
  { nome: "Caderno", preco: 10 }
];

const nomesOrdenados = produtos
  .sort((a, b) => a.preco - b.preco)
  .map(produto => produto.nome);

console.log(nomesOrdenados); // ["Lápis", "Caneta", "Caderno"]
