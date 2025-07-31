function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const slowSquare = memoize(n => {
  console.log(`Calculando ${n}²`);
  return n * n;
});

console.log(slowSquare(4)); // Calcula
console.log(slowSquare(4)); // Cache
