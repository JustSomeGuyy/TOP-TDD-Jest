const analyzeNumbers = require('./array');

describe('analyzeNumbers', () => {
    it('should return the correct result for a non-empty array', () => {
      const numbers = [1, 8, 3, 4, 2, 6];
      const result = analyzeNumbers(numbers);
      
      expect(result.average).toBe(4);
      expect(result.min).toBe(1);
      expect(result.max).toBe(8);
      expect(result.length).toBe(6);
    });
  
    it('should return default values for an empty array', () => {
      const emptyArray = [];
      const result = analyzeNumbers(emptyArray);
      
      expect(result.average).toBe(0);
      expect(result.min).toBeUndefined();
      expect(result.max).toBeUndefined();
      expect(result.length).toBe(0);
    });
});