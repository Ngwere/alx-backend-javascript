function calculateNumber(a, b) {
  const r_a = Math.round(a);
  const r_b = Math.round(b);
  return r_a + r_b;
}

module.exports = calculateNumber;
