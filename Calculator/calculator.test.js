const calculator = require('./calculator')

test('Calculator returns the answer based on which math equation was wanted', () => {
    
    // For adding 2 numbers together
    expect(calculator('sum', 1, 2)).toBe(3);

    // Subtracting 2 numbers together
    expect(calculator('subtract', 4, 2)).toBe(2);

    // Multiplying 2 numbers together
    expect(calculator('multiply', 2, 2)).toBe(4);

    // Divide 2 numbers apart
    expect(calculator('divide', 2, 2)).toBe(1);
})