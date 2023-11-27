const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers', function() {
    const result = calculateNumber(3.7, 9.2);
    assert.strictEqual(result, 13);
  });

  it('should handle negative numbers correctly', function() {
    const result = calculateNumber(-5.8, 2.3);
    assert.strictEqual(result, -4);
  });

  it('should return 0 when both inputs are 0', function() {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);
  });

  it('should handle large numbers correctly', function() {
    const result = calculateNumber(9999999999.6, 8888888888.9);
    assert.strictEqual(result, 18888888889);
  });

  it('should handle floating-point precision correctly', function() {
    const result = calculateNumber(0.1, 0.2);
    assert.strictEqual(result, 0);
  });
});
