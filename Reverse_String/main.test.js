const reverseString = require('./main');

test('Returns the string inputted in reverse.', () => {
    expect(reverseString('Hello')).toBe('olleH')
});