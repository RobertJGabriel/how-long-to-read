const HOW_LONG_TO_READ = require('../index.js'); // NO-UNUSED false positive
const UNDER_A_MINUTE = 'My man is Robert James.';

describe('How long to read.', () => {
  it('Empty string', () => {
    const TEST_RESULT = expect(HOW_LONG_TO_READ.time('')).toEqual(0);
    return TEST_RESULT;
  });
  it('Check if it takes under minute to read ten words', () => {
    const TEST_RESULT = expect(HOW_LONG_TO_READ.time(UNDER_A_MINUTE)).toEqual(1);
    return TEST_RESULT;
  });
});
