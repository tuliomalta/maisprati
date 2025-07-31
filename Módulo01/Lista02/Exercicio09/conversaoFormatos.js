function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const pares = [["nome", "Marco"], ["idade", 30]];
const obj = paresParaObjeto(pares);
const deVolta = objetoParaPares(obj);

console.log(obj);       // { nome: "Marco", idade: 30 }
console.log(deVolta);   // [["nome", "Marco"], ["idade", 30]]
