import sum from './sum.js';

describe('Sum', () => {
    test('2+3 = 5', () => {
    	const result = sum(2, 3);
        expect(result).toBe(5);
    });
});