import { expect } from '@jest/globals';
import { sentencize } from './qstr';

test('sentencize() is correctly implemented', () => {
    expect(sentencize('test')).toBe('Test.');
});