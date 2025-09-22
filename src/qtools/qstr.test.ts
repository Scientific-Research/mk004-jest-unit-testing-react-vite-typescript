import { expect } from '@jest/globals';
import { sentencize } from './qstr';

test('sentencize() is correctly implemented', () => {
	expect(sentencize('test.')).toBe('Test.');
	expect(sentencize('test!')).toBe('Test!');
	expect(sentencize('test!')).toBe('Test!');
	expect(sentencize('test&')).toBe('Test&');
	expect(sentencize('nn?')).toBe('Nn?');
	expect(sentencize('test')).toBe('Test.');
	expect(sentencize('...')).toBe('...');
});
