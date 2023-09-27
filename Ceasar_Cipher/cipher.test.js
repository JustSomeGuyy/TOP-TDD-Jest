const cipher = require('./cipher');

test('Returns solved cipher code based on however many spaces asked from the original message', () => {
    expect(cipher('URYYB JBEYQ', 13)).toBe('HELLO WORLD')
})