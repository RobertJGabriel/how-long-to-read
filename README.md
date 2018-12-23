# how-long-to-read [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Tell how long it will take to read a string(amount of words). The average words per minute is 130 words.

## Installation

```sh
$ npm install --save how-long-to-read
```

## Usage

```js
const howLongToRead = require('how-long-to-read');

const UNDER_A_MINUTE = 'My man is Robert James.';
const OVER_A_MINUTE = `You will need to add your website. CloudFront will give you two nameservers, that nameserver you will need to add in your domain panel in your domain registrar. This is so cloudflare can handle all the DNS settings directly.
Once you have set your nameserver to cloudflare. You can’t do anything in domain panel in you domain registrar. So if you want to add an new MX record or TXT record, you will have to set them though the Cloudflare DNS menu. Keeping it simple Cloudflare handle your ALL DNS records.
You will need to add your website. CloudFront will give you two nameservers, that nameserver you will need to add in your domain panel in your domain registrar. This is so cloudflare can handle all the DNS settings directly.`;

howLongToRead.time(UNDER_A_MINUTE) // returns 1, as in minutues;
howLongToRead.time(OVER_A_MINUTE + OVER_A_MINUTE) // returns 2, as in minutues;


```
## License

MPL-2.0 © [Robert James Gabriel](https://www.robertgabriel.ninja)


[npm-image]: https://badge.fury.io/js/how-long-to-read.svg
[npm-url]: https://npmjs.org/package/how-long-to-read
[travis-image]: https://travis-ci.com/RobertJGabriel/how-long-to-read.svg?branch=master
[travis-url]: https://travis-ci.com/RobertJGabriel/how-long-to-read
[daviddm-image]: https://david-dm.org/RobertJGabriel/how-long-to-read.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/RobertJGabriel/how-long-to-read
[coveralls-image]: https://coveralls.io/repos/RobertJGabriel/how-long-to-read/badge.svg
[coveralls-url]: https://coveralls.io/r/RobertJGabriel/how-long-to-read
