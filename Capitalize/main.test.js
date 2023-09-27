const capitalizeFirstLetter = require('./main');

test('Returns the word capitalized with the first letter', () => {
    expect(capitalizeFirstLetter('tyler')).toBe('Tyler')
});