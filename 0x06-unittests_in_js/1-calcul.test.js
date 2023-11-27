const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of rounded numbers', function() {
      const result = calculateNumber('SUM', 1.4, 4.5);
      assert.strictEqual(result, 6);
    });
  });

  describe('SUBTRACT', function() {
    it('should subtract the rounded numbers', function() {
      const result = calculateNumber('SUBTRACT', 1.4, 4.5);
      assert.strictEqual(result, -4);
    });
  });

  describe('DIVIDE', function() {
    it('should divide the rounded numbers', function() {
      const result = calculateNumber('DIVIDE', 1.4, 4.5);
      assert.strictEqual(result, 0.2);
    });

    it('should return "Error" when dividing by 0', function() {
      const result = calculateNumber('DIVIDE', 1.4, 0);
      assert.strictEqual(result, 'Error');
    });
  });

  it('should return "Invalid type" for unknown type', function() {
    const result = calculateNumber('MULTIPLY', 1.4, 4.5);
    assert.strictEqual(result, 'Invalid type');
  });
});
