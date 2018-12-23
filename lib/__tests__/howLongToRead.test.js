const HOW_LONG_TO_READ = require('../index.js'); // NO-UNUSED false positive
const UNDER_A_MINUTE = 'My man is Robert James.';
const OVER_A_MINUTE = `You will need to add your website. CloudFront will give you two nameservers, that nameserver you will need to add in your domain panel in your domain registrar. This is so cloudflare can handle all the DNS settings directly.
Once you have set your nameserver to cloudflare. You can’t do anything in domain panel in you domain registrar. So if you want to add an new MX record or TXT record, you will have to set them though the Cloudflare DNS menu. Keeping it simple Cloudflare handle your ALL DNS records.
You will need to add your website. CloudFront will give you two nameservers, that nameserver you will need to add in your domain panel in your domain registrar. This is so cloudflare can handle all the DNS settings directly.`;
describe('How long to read.', () => {
  it('Empty string', () => {
    const TEST_RESULT = expect(HOW_LONG_TO_READ.time('')).toEqual(0);
    return TEST_RESULT;
  });
  it('One word is under a mintue', () => {
    const TEST_RESULT = expect(HOW_LONG_TO_READ.time('Test')).toEqual(0);
    return TEST_RESULT;
  });
  it('Check if it takes under minute to read ten words', () => {
    const TEST_RESULT = expect(HOW_LONG_TO_READ.time(UNDER_A_MINUTE)).toEqual(1);
    return TEST_RESULT;
  });
  it('Check if it takes over minute to read.', () => {
    const TEST_RESULT = expect(HOW_LONG_TO_READ.time(OVER_A_MINUTE)).toEqual(1);
    return TEST_RESULT;
  });
  it('Check if it takes two minute to read', () => {
    const TEST_RESULT = expect(
      HOW_LONG_TO_READ.time(OVER_A_MINUTE + OVER_A_MINUTE + OVER_A_MINUTE)
    ).toEqual(2);
    return TEST_RESULT;
  });
  it('Check if it takes five minute to read', () => {
    const TEST_RESULT = expect(
      HOW_LONG_TO_READ.time(
        OVER_A_MINUTE + OVER_A_MINUTE + OVER_A_MINUTE + OVER_A_MINUTE + OVER_A_MINUTE
      )
    ).toEqual(4);
    return TEST_RESULT;
  });
});
