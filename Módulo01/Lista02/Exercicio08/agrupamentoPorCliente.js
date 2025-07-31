const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 50 },
  { cliente: "Ana", total: 150 }
];

const agrupado = vendas.reduce((acc, venda) => {
  acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
  return acc;
}, {});

console.log(agrupado); // { Ana: 250, João: 50 }
